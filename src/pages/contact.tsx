import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Fan as Fax } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "2410 Lucknow Drive Unit 32",
    value2: "Mississauga, ON L5S 1V1",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "Tel: 905 677 2526",
    value2: "Toll Free: 1 8666 SKYWAY / 1 866 675 9929",
  },
  {
    icon: Fax,
    label: "Fax",
    value: "905 677 2275",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "david@skywaycatering.com",
  },
]

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="min-h-screen pt-[105px] flex flex-col justify-center">
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">Get in Touch</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-balance">
                Let's craft your perfect flight
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're planning a transcontinental journey or a short regional hop, our team is ready to create
                a bespoke dining experience.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-card/60 rounded-xl border border-border/40">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                    {item.value2 && <p className="text-sm text-muted-foreground">{item.value2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
