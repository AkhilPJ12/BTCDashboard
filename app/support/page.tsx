import { Navbar } from "@/components/navbar"
import { SupportDonation } from "@/components/support-donation"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <SupportDonation />
      </main>
    </div>
  )
}
