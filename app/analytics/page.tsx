import { Navbar } from "@/components/navbar"
import { AdvancedBtcChart } from "@/components/advanced-btc-chart"
import { VolumeAnalysis } from "@/components/volume-analysis"
import { SupportResistance } from "@/components/support-resistance"
import { LiquidationLevels } from "@/components/liquidation-levels"
import { MarketStructure } from "@/components/market-structure"
import { OptionsFlow } from "@/components/options-flow"
import { CorrelationMatrix } from "@/components/correlation-matrix"
import { OrderBookAnalysis } from "@/components/order-book-analysis"
import { SocialSentiment } from "@/components/social-sentiment"
import { FundingRates } from "@/components/funding-rates"
import { WhaleMovementImpact } from "@/components/whale-movement-impact"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <span className="text-orange-500">📊</span>
              Advanced Analytics
            </h1>
            <p className="text-muted-foreground">Professional trading tools and technical analysis for Bitcoin</p>
          </div>

          {/* Advanced Chart - Full Width */}
          <AdvancedBtcChart />

          {/* First Row - Core Analytics */}
          <div className="grid gap-6 lg:grid-cols-2">
            <VolumeAnalysis />
            <SupportResistance />
          </div>

          {/* Second Row - Risk & Structure */}
          <div className="grid gap-6 lg:grid-cols-2">
            <LiquidationLevels />
            <MarketStructure />
          </div>

          {/* Third Row - Options & Correlations */}
          <div className="grid gap-6 lg:grid-cols-2">
            <OptionsFlow />
            <CorrelationMatrix />
          </div>

          {/* Fourth Row - Order Book & Sentiment */}
          <div className="grid gap-6 lg:grid-cols-2">
            <OrderBookAnalysis />
            <SocialSentiment />
          </div>

          {/* Fifth Row - Funding & Whale Impact */}
          <div className="grid gap-6 lg:grid-cols-2">
            <FundingRates />
            <WhaleMovementImpact />
          </div>
        </div>
      </main>
    </div>
  )
}
