import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChefHat, Clock, Wine, Sparkles, Quote } from "lucide-react"
import { Link } from "react-router"

const highlights = [
  { icon: ChefHat, label: "Bespoke Menus" },
  { icon: Clock, label: "24/7 Service" },
  { icon: Wine, label: "Fine Beverages" },
  { icon: Sparkles, label: "White Glove" },
]

const stats = [
  { value: "30+", label: "Years in Hospitality" },
  { value: "24/7", label: "Service Availability" },
  { value: "365", label: "Days a Year" },
  { value: "3", label: "Major FBOs Access" },
]

const reviews = [
  {
    quote:
      "Skyway has been our go-to caterer for years. Their attention to detail and quality is unmatched. Every flight feels like a five-star dining experience.",
    author: "Michael R.",
    title: "Charter Operations Manager",
    company: "Executive Aviation Services",
  },
  {
    quote:
      "The team at Skyway consistently exceeds our expectations. Their 24/7 availability and last-minute flexibility have saved us countless times.",
    author: "Sarah L.",
    title: "Flight Coordinator",
    company: "Private Jets Canada",
  },
  {
    quote:
      "Outstanding service and exceptional food quality. Our clients always comment on the catering when flying through Toronto. Highly recommended.",
    author: "David K.",
    title: "Director of Operations",
    company: "Pearson FBO Services",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-auto">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <section className="min-h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/screenshot-202025-12-10-20at-2011.png')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-background/95 via-background/80 to-background" />
        </div>

        <div className="relative text-center px-6 max-w-4xl mx-auto pt-16">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6 font-medium">
            Private Aviation Catering
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-balance">
            Elevate your journey
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Exceptional culinary experiences crafted for discerning travelers. From intimate flights to grand voyages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="rounded-full px-10 h-12 text-base">
              <Link to="/menu">
                View Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-12 text-base bg-transparent">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary/60" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground/60">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-border/50 animate-pulse" />
        </div>
      </section>

      <section className="min-h-screen py-20 lg:py-28 bg-secondary/20 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary/70 mb-4 font-medium">About Skyway</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-8 text-balance leading-tight">
              Dedicated to Excellence in Private Catering
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                Skyway Catering Services is dedicated to providing the best in private catering. We have been in the
                hospitality industry for over 30 years and understand that quality, punctuality, caring and flexibility
                are essential to maintaining the highest standards our valued customers expect.
              </p>
              <p>
                We are located across from Pearson International Airport, CYYZ, in Toronto, Canada. Operating 24 hours a
                day, 365 days a year, we offer you the flexibility to deliver catering services at any time of the day
                or night.
              </p>
              <p>
                Billing can be done direct or through the FBO of your choice. Visa, American Express, Master Card,
                company and personal cheques are accepted.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 min-h-screen bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary/70 mb-4 font-medium">Testimonials</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="relative p-8 bg-secondary/30 rounded-2xl border border-border/30">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <blockquote className="text-foreground/90 leading-relaxed mb-8">"{review.quote}"</blockquote>
                <div className="mt-auto">
                  <p className="font-medium text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.title}</p>
                  <p className="text-sm text-primary/70">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}