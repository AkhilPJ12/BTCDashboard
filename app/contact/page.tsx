import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-muted-foreground mt-2">
              We're here to help with any questions about our Bitcoin dashboard
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
    </div>
  )
}
