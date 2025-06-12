// SVG Sprite optimization pentru scalabilitate
export const brandLogos = {
  // Convert inline SVGs to optimized paths
  'net-a-porter': 'M4 4h16v16H4z M8 8h8 M8 12h8 M8 16h6',
  'ssense': 'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z M8 12h8',
  'shopify': 'M8 3h8l2 18-6-2-6 2z',
  'amazon': 'M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z M8 17c2-1 6-1 8 0',
  'nordstrom': 'M3 12l9-9 9 9-9 9z',
  'mr-porter': 'M6 6h12v12H6z M9 9h6v6H9z',
  'bigcommerce': 'M4 8h16v8H4z M8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z M16 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  'ebay': 'M12 8a8 4 0 1 1 0 8 8 4 0 0 1 0-8z',
  'rakuten': 'M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z',
  'hubspot': 'M12 2l8 6-8 6-8-6z M12 8l4 3-4 3-4-3z',
  'semrush': 'M4 12l4-4 4 4 4-4 4 4',
  'clickfunnels': 'M6 8h12l-2 4H8l-2 4',
  'luxlair': 'M8 8h8v8H8z M10 10h4v4h-4z',
  'vestiaire': 'M12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z M12 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6z',
  'luisaviaroma': 'M8 6h8v12H8z M10 8h4v8h-4z',
  'dior': 'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z',
  'koio': 'M6 10h12v4H6z',
  'allbirds': 'M12 4a6 8 0 1 1 0 16 6 8 0 0 1 0-16z M12 8a3 4 0 1 1 0 8 3 4 0 0 1 0-8z',
  'tommy-bahama': 'M6 6h12l-2 12H8z M8 8h8l-1 8H9z',
  'realreal': 'M6 6h12v12H6z M9 9h6v6H9z'
};

// Optimized SVG component with performance focus
export const OptimizedIcon = ({ name, className = "w-5 h-5" }) => {
  const path = brandLogos[name];
  if (!path) return null;

  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} className="fill-current opacity-65" />
    </svg>
  );
};

export default OptimizedIcon;