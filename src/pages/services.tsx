import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Plane,
  Newspaper,
  Flower2,
  FileText,
  Gift,
  ShoppingBag,
  Wine,
  Home,
  Sparkles,
  UtensilsCrossed,
  Shirt,
  Flame,
} from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Meet Aircraft on Arrival",
    description: "Our team greets your aircraft upon landing to ensure seamless and prompt catering delivery.",
  },
  {
    icon: Flame,
    title: "Dry Ice",
    description: "Temperature-controlled packaging with dry ice to keep your items fresh throughout your journey.",
  },
  {
    icon: Newspaper,
    title: "Newspapers and Magazines",
    description: "Current publications and periodicals delivered fresh to keep you informed and entertained.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping Services",
    description: "Last-minute requests fulfilled with our dedicated shopping service for any special items you need.",
  },
  {
    icon: Flower2,
    title: "Fresh Flower Arrangements",
    description: "Beautiful floral displays to enhance your cabin ambiance and create a welcoming atmosphere.",
  },
  {
    icon: Wine,
    title: "Glassware and China",
    description: "Premium dining service with elegant glassware and fine china for an elevated dining experience.",
  },
  {
    icon: FileText,
    title: "Hand Written Menus",
    description: "Personalized menu cards elegantly handwritten for each guest, adding a touch of sophistication.",
  },
  {
    icon: Home,
    title: "Cabin Supplies and Cleaners",
    description: "Complete cabin supply provisioning including cleaning products to maintain pristine conditions.",
  },
  {
    icon: Gift,
    title: "Gift Baskets",
    description: "Thoughtfully curated gift baskets for special occasions or to welcome your guests aboard.",
  },
  {
    icon: Sparkles,
    title: "Dishwashing",
    description: "Professional dishwashing services to handle all galley cleanup and china care.",
  },
  {
    icon: UtensilsCrossed,
    title: "Halal and Kosher Items",
    description: "Certified halal and kosher catering options prepared according to strict dietary requirements.",
  },
  {
    icon: Shirt,
    title: "Linen and Laundry Service",
    description: "Premium linens provided and laundered to maintain the highest standards of cleanliness.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="min-h-screen pt-[105px] flex flex-col">
        <div className="flex-1 container mx-auto px-6 py-12 lg:py-16 flex flex-col">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">What We Offer</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-4">
              We Welcome All Requests
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Beyond exceptional catering, we provide a full range of services to enhance your flight experience.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6 content-start max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card/60 rounded-xl border border-border/40 hover:border-border/70 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
