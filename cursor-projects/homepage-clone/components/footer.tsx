import Link from "next/link"

export default function Footer() {
  const links = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <footer className="w-full py-4 text-center md:py-5">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="mb-2 md:mb-3">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-3 text-gray-500 dark:text-gray-400 text-xs">
            {links.map((link, index, arr) => (
              <li key={index} className="flex items-center">
                <Link
                  href={link.href}
                  className="hover:text-[#4d8eff] transition-colors duration-300 uppercase tracking-wide text-transition"
                >
                  {link.name}
                </Link>
                {index < arr.length - 1 && <span className="mx-2 md:mx-3"> • </span>}
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-gray-500 dark:text-gray-400 text-xs text-transition">
          © 2025 ShopMindAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
