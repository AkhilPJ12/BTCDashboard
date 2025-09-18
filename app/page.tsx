import { Navbar } from "@/components/navbar"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { BtcPriceChart } from "@/components/btc-price-chart"
import { BtcOnChainMetrics } from "@/components/btc-on-chain-metrics"
import { BtcTradingPairs } from "@/components/btc-trading-pairs"
import { BtcFearGreed } from "@/components/btc-fear-greed"
import { WhaleAlertWidget } from "@/components/whale-alert-widget"
import { BtcNetworkHealth } from "@/components/btc-network-health"
import { BtcMarketInsights } from "@/components/btc-market-insights"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <span className="text-orange-500">₿</span>
              Bitcoin Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">Comprehensive Bitcoin market analysis and on-chain metrics</p>
          </div>

          <PortfolioOverview />

          <div className="grid gap-6 lg:grid-cols-4 space-y-6">
            <div className="lg:col-span-3 space-y-6">
              <BtcPriceChart />
            </div>
            <div className="space-y-6">
              <BtcFearGreed />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 space-y-6">
            <BtcOnChainMetrics />
            <WhaleAlertWidget />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 space-y-6">
            <BtcNetworkHealth />
            <BtcMarketInsights />
          </div>

          <BtcTradingPairs />
        </div>
      </main>
    </div>
  )
}
