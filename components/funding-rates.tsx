import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

const fundingData = [
  {
    exchange: "Binance",
    rate: 0.0125,
    nextFunding: "2h 15m",
    prediction: 0.0089,
    volume: "$12.5B",
    openInterest: "$8.2B",
  },
  {
    exchange: "Bybit",
    rate: 0.0098,
    nextFunding: "2h 15m",
    prediction: 0.0076,
    volume: "$8.9B",
    openInterest: "$5.8B",
  },
  {
    exchange: "OKX",
    rate: 0.0156,
    nextFunding: "5h 45m",
    prediction: 0.0134,
    volume: "$6.2B",
    openInterest: "$4.1B",
  },
  {
    exchange: "Deribit",
    rate: -0.0023,
    nextFunding: "1h 30m",
    prediction: -0.0045,
    volume: "$2.1B",
    openInterest: "$1.8B",
  },
]

const avgFundingRate = 0.0089
const fundingTrend = "Bullish"

export function FundingRates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-yellow-600" />
          Funding Rates Analysis
        </CardTitle>
        <CardDescription>Perpetual futures funding rates across exchanges</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">Average Rate</p>
            <p className={`text-xl font-bold ${avgFundingRate > 0 ? "text-green-600" : "text-red-600"}`}>
              {avgFundingRate > 0 ? "+" : ""}
              {(avgFundingRate * 100).toFixed(3)}%
            </p>
            <p className="text-xs text-muted-foreground">8h funding</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">Market Sentiment</p>
            <Badge variant={fundingTrend === "Bullish" ? "default" : "destructive"} className="text-sm">
              {fundingTrend}
            </Badge>
            <p className="text-xs text-muted-foreground">Based on funding</p>
          </div>
        </div>

        <div className="space-y-4">
          {fundingData.map((exchange, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {exchange.exchange.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium">{exchange.exchange}</p>
                    <p className="text-xs text-muted-foreground">Next: {exchange.nextFunding}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    {exchange.rate > 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`font-bold ${exchange.rate > 0 ? "text-green-600" : "text-red-600"}`}>
                      {exchange.rate > 0 ? "+" : ""}
                      {(exchange.rate * 100).toFixed(3)}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pred: {exchange.prediction > 0 ? "+" : ""}
                    {(exchange.prediction * 100).toFixed(3)}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground">Volume: </span>
                  <span className="font-medium">{exchange.volume}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Open Interest: </span>
                  <span className="font-medium">{exchange.openInterest}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>Note:</strong> Positive funding rates indicate long bias (longs pay shorts), negative rates indicate
            short bias.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
