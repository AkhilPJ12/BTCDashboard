import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function BtcFearGreed() {
  const fearGreedIndex = 72
  const getIndexLabel = (value: number) => {
    if (value <= 20) return { label: "Extreme Fear", color: "text-red-600" }
    if (value <= 40) return { label: "Fear", color: "text-orange-600" }
    if (value <= 60) return { label: "Neutral", color: "text-yellow-600" }
    if (value <= 80) return { label: "Greed", color: "text-green-600" }
    return { label: "Extreme Greed", color: "text-green-700" }
  }

  const indexInfo = getIndexLabel(fearGreedIndex)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fear & Greed Index</CardTitle>
        <CardDescription>Market sentiment analysis for Bitcoin</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{fearGreedIndex}</p>
                    <p className="text-xs text-muted-foreground">Index</p>
                  </div>
                </div>
              </div>
            </div>
            <p className={`text-xl font-semibold ${indexInfo.color}`}>{indexInfo.label}</p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Volatility (25%)</span>
                <span className="text-orange-600">High</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Market Momentum (25%)</span>
                <span className="text-green-600">Positive</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Social Media (15%)</span>
                <span className="text-green-600">Bullish</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Surveys (15%)</span>
                <span className="text-yellow-600">Neutral</span>
              </div>
              <Progress value={55} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Dominance (10%)</span>
                <span className="text-green-600">Strong</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Trends (10%)</span>
                <span className="text-green-600">Upward</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
