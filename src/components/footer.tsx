import { Plane } from "lucide-react"
import { Link } from "react-router"
import { SkywayLogo } from "./skyway-logo"

interface FooterProps {
  compact?: boolean
}

export function Footer({ compact = false }: FooterProps) {
  if (compact) {
    return (
      <footer className="bg-primary text-primary-foreground py-4 shrink-0">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link to="//" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Plane className="w-3.5 h-3.5" />
            </div>
            <span className="font-serif text-sm font-medium tracking-wide">Skyway Catering</span>
          </Link>
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} Skyway Catering Services. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="//" className="flex items-center gap-3 mb-6">
              <SkywayLogo shouldAnimate={false} lightMode={true} />
            </Link>
            <p className="opacity-70 leading-relaxed max-w-sm">
              Premium in-flight catering services for private aviation, delivering exceptional culinary experiences at
              40,000 feet.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Menu", href: "/menu" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="opacity-70 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link to="#" className="opacity-70 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Skyway Catering Services. All rights reserved.
          </p>
          <p className="text-sm opacity-70">Crafted with excellence in Toronto, Canada</p>
        </div>
      </div>
    </footer>
  )
}
