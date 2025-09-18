import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

const whaleMovements = [
  {
    time: "15 min ago",
    amount: 2156,
    usdValue: "$93.2M",
    from: "Unknown Wallet",
    to: "Coinbase",
    priceImpact: -0.8,
    volumeSpike: 45,
    marketReaction: "Bearish",
    confidence: 85,
  },
  {
    time: "1 hour ago",
    amount: 1247,
    usdValue: "$53.9M",
    from: "Binance",
    to: "Unknown Wallet",
    priceImpact: +0.3,
    volumeSpike: 28,
    marketReaction: "Neutral",
    confidence: 62,
  },
  {
    time: "3 hours ago",
    amount: 3421,
    usdValue: "$148.1M",
    from: "Cold Storage",
    to: "Multiple Exchanges",
    priceImpact: -1.2,
    volumeSpike: 78,
    marketReaction: "Very Bearish",
    confidence: 92,
  },
]

const impactMetrics = {
  totalVolume: "$295.2M",
  avgImpact: -0.57,
  marketSentiment: "Cautious",
  whaleActivity: "High",
}

export function WhaleMovementImpact() {
  const getReactionColor = (reaction: string) => {
    switch (reaction) {
      case "Very Bullish":
        return "text-green-700"
      case "Bullish":
        return "text-green-600"
      case "Neutral":
        return "text-gray-600"
      case "Bearish":
        return "text-red-600"
      case "Very Bearish":
        return "text-red-700"
      default:
        return "text-gray-600"
    }
  }

  const getReactionBg = (reaction: string) => {
    switch (reaction) {
      case "Very Bullish":
        return "bg-green-100 border-green-200"
      case "Bullish":
        return "bg-green-50 border-green-200"
      case "Neutral":
        return "bg-gray-50 border-gray-200"
      case "Bearish":
        return "bg-red-50 border-red-200"
      case "Very Bearish":
        return "bg-red-100 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Waves className="h-5 w-5 text-cyan-600" />
          Whale Movement Impact
        </CardTitle>
        <CardDescription>Analysis of large transactions and their market impact</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Volume (24h)</span>
              <span className="font-bold">{impactMetrics.totalVolume}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Avg Price Impact</span>
              <span className={`font-bold ${impactMetrics.avgImpact < 0 ? "text-red-600" : "text-green-600"}`}>
                {impactMetrics.avgImpact}%
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Market Sentiment</span>
              <Badge variant="secondary">{impactMetrics.marketSentiment}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Whale Activity</span>
              <Badge variant="destructive">{impactMetrics.whaleActivity}</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {whaleMovements.map((movement, index) => (
            <div key={index} className={`p-4 border rounded-lg ${getReactionBg(movement.marketReaction)}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    {movement.priceImpact > 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold">₿{movement.amount.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{movement.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">
                    {movement.usdValue}
                  </Badge>
                  <p className={`text-sm font-medium ${getReactionColor(movement.marketReaction)}`}>
                    {movement.marketReaction}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="text-sm">
                  <span className="text-muted-foreground">From:</span>{" "}
                  <span className="font-medium">{movement.from}</span>
                  <span className="text-muted-foreground mx-2">→</span>
                  <span className="text-muted-foreground">To:</span> <span className="font-medium">{movement.to}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground">Price Impact: </span>
                  <span className={`font-bold ${movement.priceImpact < 0 ? "text-red-600" : "text-green-600"}`}>
                    {movement.priceImpact > 0 ? "+" : ""}
                    {movement.priceImpact}%
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Volume Spike: </span>
                  <span className="font-bold">+{movement.volumeSpike}%</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Confidence: </span>
                  <span className="font-bold">{movement.confidence}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
            <p className="text-xs text-amber-800">
              <strong>Alert:</strong> High whale activity detected. Monitor for potential market volatility and
              follow-up movements.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
