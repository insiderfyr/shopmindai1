import os
import subprocess
from PIL import Image
import cairosvg

# ShopMindAI Favicon Generator - Silicon Valley Standard
# Generates all favicon variants from the master SVG

def generate_favicons():
    """Generate all favicon variants for perfect cross-platform support"""
    
    svg_path = "public/shopmindai-icon.svg"
    public_dir = "public"
    
    # Define all required sizes for different platforms
    favicon_sizes = {
        # Standard favicon sizes
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "favicon-96x96.png": 96,
        "favicon-194x194.png": 194,
        
        # Apple Touch Icons
        "apple-touch-icon.png": 180,
        "apple-touch-icon-57x57.png": 57,
        "apple-touch-icon-60x60.png": 60,
        "apple-touch-icon-72x72.png": 72,
        "apple-touch-icon-76x76.png": 76,
        "apple-touch-icon-114x114.png": 114,
        "apple-touch-icon-120x120.png": 120,
        "apple-touch-icon-144x144.png": 144,
        "apple-touch-icon-152x152.png": 152,
        "apple-touch-icon-180x180.png": 180,
        
        # Android Chrome
        "android-chrome-192x192.png": 192,
        "android-chrome-512x512.png": 512,
        
        # Microsoft Tiles
        "mstile-70x70.png": 70,
        "mstile-144x144.png": 144,
        "mstile-150x150.png": 150,
        "mstile-310x150.png": (310, 150),
        "mstile-310x310.png": 310,
        
        # Other sizes
        "icon-192.png": 192,
        "icon-512.png": 512,
    }
    
    print("🚀 ShopMindAI Favicon Generator - Silicon Valley Edition")
    print("=" * 50)
    
    # Convert SVG to PNG for each size
    for filename, size in favicon_sizes.items():
        output_path = os.path.join(public_dir, filename)
        
        if isinstance(size, tuple):
            width, height = size
        else:
            width = height = size
            
        try:
            # Convert SVG to PNG using cairosvg
            cairosvg.svg2png(
                url=svg_path,
                write_to=output_path,
                output_width=width,
                output_height=height
            )
            print(f"✅ Generated: {filename} ({width}x{height})")
        except Exception as e:
            print(f"❌ Error generating {filename}: {e}")
            # Fallback: try using Pillow if cairosvg fails
            try:
                # First convert to a large PNG, then resize
                temp_path = "temp_large.png"
                cairosvg.svg2png(url=svg_path, write_to=temp_path, output_width=1024, output_height=1024)
                img = Image.open(temp_path)
                img_resized = img.resize((width, height), Image.Resampling.LANCZOS)
                img_resized.save(output_path, "PNG", optimize=True)
                os.remove(temp_path)
                print(f"✅ Generated (fallback): {filename} ({width}x{height})")
            except Exception as e2:
                print(f"❌ Fallback also failed for {filename}: {e2}")
    
    # Generate ICO file with multiple sizes
    print("\n🎨 Generating multi-resolution ICO file...")
    try:
        ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        images = []
        
        for size in ico_sizes:
            temp_path = f"temp_{size[0]}.png"
            cairosvg.svg2png(url=svg_path, write_to=temp_path, output_width=size[0], output_height=size[1])
            img = Image.open(temp_path)
            images.append(img)
            os.remove(temp_path)
        
        # Save as ICO
        images[0].save(
            os.path.join(public_dir, "favicon.ico"),
            format="ICO",
            sizes=ico_sizes,
            append_images=images[1:]
        )
        print("✅ Generated: favicon.ico (multi-resolution)")
    except Exception as e:
        print(f"❌ Error generating ICO: {e}")
    
    print("\n🎉 Favicon generation complete!")
    print("\n📱 Next steps:")
    print("1. Test favicons at: https://realfavicongenerator.net/favicon_checker")
    print("2. Update manifest.json with proper icon references")
    print("3. Clear browser cache and test on different devices")

if __name__ == "__main__":
    # Check if we're in the right directory
    if not os.path.exists("public"):
        print("❌ Error: 'public' directory not found. Run this from the project root.")
        exit(1)
    
    # Check dependencies
    try:
        import cairosvg
        import PIL
    except ImportError:
        print("📦 Installing required dependencies...")
        os.system("pip install cairosvg pillow")
        print("\n✅ Dependencies installed. Please run the script again.")
        exit(0)
    
    generate_favicons()
