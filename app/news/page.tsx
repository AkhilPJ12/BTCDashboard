import { Navbar } from "@/components/navbar"
import { NewsStats } from "@/components/news-stats"
import { WhaleAlerts } from "@/components/whale-alerts"
import { BtcNews } from "@/components/btc-news"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <span className="text-orange-500">📰</span>
              Bitcoin News & Alerts
            </h1>
            <p className="text-muted-foreground">Stay informed with real-time whale alerts and latest Bitcoin news</p>
          </div>

          <NewsStats />

          <div className="grid gap-6 lg:grid-cols-2">
            <WhaleAlerts />
            <BtcNews />
          </div>
        </div>
      </main>
    </div>
  )
}
