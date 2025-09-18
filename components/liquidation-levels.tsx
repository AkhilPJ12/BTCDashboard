import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingDown, TrendingUp } from "lucide-react"

const liquidationData = [
  {
    price: 45000,
    amount: "$1.2B",
    type: "short",
    percentage: 85,
    exchange: "Binance",
  },
  {
    price: 44500,
    amount: "$890M",
    type: "short",
    percentage: 65,
    exchange: "Bybit",
  },
  {
    price: 42000,
    amount: "$2.1B",
    type: "long",
    percentage: 95,
    exchange: "OKX",
  },
  {
    price: 41500,
    amount: "$1.5B",
    type: "long",
    percentage: 78,
    exchange: "Binance",
  },
]

export function LiquidationLevels() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-600" />
          Liquidation Heatmap
        </CardTitle>
        <CardDescription>Major liquidation levels and potential cascade zones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {liquidationData.map((data, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${data.type === "long" ? "bg-green-100" : "bg-red-100"}`}>
                    {data.type === "long" ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold">${data.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{data.exchange}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={data.type === "long" ? "default" : "destructive"} className="mb-1">
                    {data.type.toUpperCase()} {data.amount}
                  </Badge>
                  <p className="text-xs text-muted-foreground">Liquidation Volume</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Risk Level</span>
                  <span>{data.percentage}%</span>
                </div>
                <Progress value={data.percentage} className="h-2" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800">
            <strong>Warning:</strong> High liquidation clusters can cause significant price volatility and cascade
            effects.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
