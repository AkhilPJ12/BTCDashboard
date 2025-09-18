import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, TrendingUp, TrendingDown } from "lucide-react"

const orderBookData = {
  spread: 0.02,
  spreadPercent: 0.0046,
  bidDepth: 2.8,
  askDepth: 3.2,
  imbalance: -12.5,
  liquidity: "High",
}

const depthLevels = [
  { price: 43280, size: 1.2, side: "ask", percentage: 85 },
  { price: 43270, size: 0.8, side: "ask", percentage: 60 },
  { price: 43260, size: 2.1, side: "ask", percentage: 95 },
  { price: 43250, size: 1.5, side: "ask", percentage: 75 },
  { price: 43240, size: 0.9, side: "bid", percentage: 65 },
  { price: 43230, size: 1.8, side: "bid", percentage: 90 },
  { price: 43220, size: 1.1, side: "bid", percentage: 70 },
  { price: 43210, size: 2.3, side: "bid", percentage: 100 },
]

export function OrderBookAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-green-600" />
          Order Book Analysis
        </CardTitle>
        <CardDescription>Real-time order book depth and liquidity analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Bid-Ask Spread</span>
              <span className="font-bold">
                ${orderBookData.spread} ({orderBookData.spreadPercent}%)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Liquidity</span>
              <Badge variant="default">{orderBookData.liquidity}</Badge>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Order Imbalance</span>
              <span className={`font-bold ${orderBookData.imbalance < 0 ? "text-red-600" : "text-green-600"}`}>
                {orderBookData.imbalance}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Depth Ratio</span>
              <span className="font-bold">
                {orderBookData.bidDepth}B : {orderBookData.askDepth}B
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-center py-2 bg-muted/30 rounded">
            <span className="text-sm font-medium">Current Price: $43,256</span>
          </div>

          {depthLevels.map((level, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded ${
                level.side === "ask" ? "bg-red-50" : "bg-green-50"
              }`}
            >
              <div className="flex items-center gap-2">
                {level.side === "ask" ? (
                  <TrendingUp className="h-3 w-3 text-red-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-green-600" />
                )}
                <span className="font-mono text-sm">${level.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 flex-1 mx-4">
                <Progress
                  value={level.percentage}
                  className={`h-2 flex-1 ${level.side === "ask" ? "[&>div]:bg-red-500" : "[&>div]:bg-green-500"}`}
                />
                <span className="text-xs font-medium w-12 text-right">₿{level.size}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
