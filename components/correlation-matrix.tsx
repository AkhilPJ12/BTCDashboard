import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3 } from "lucide-react"

const correlationData = [
  { asset: "S&P 500", correlation: 0.72, change: "+0.05", period: "30D", color: "bg-green-500" },
  { asset: "Gold", correlation: -0.23, change: "-0.12", period: "30D", color: "bg-red-500" },
  { asset: "DXY", correlation: -0.68, change: "+0.08", period: "30D", color: "bg-red-500" },
  { asset: "Nasdaq", correlation: 0.81, change: "+0.03", period: "30D", color: "bg-green-500" },
  { asset: "Ethereum", correlation: 0.89, change: "-0.02", period: "30D", color: "bg-green-500" },
  { asset: "Oil (WTI)", correlation: 0.34, change: "+0.15", period: "30D", color: "bg-yellow-500" },
  { asset: "10Y Treasury", correlation: -0.45, change: "-0.07", period: "30D", color: "bg-red-500" },
  { asset: "VIX", correlation: -0.58, change: "+0.11", period: "30D", color: "bg-red-500" },
]

export function CorrelationMatrix() {
  const getCorrelationStrength = (corr: number) => {
    const abs = Math.abs(corr)
    if (abs >= 0.7) return "Strong"
    if (abs >= 0.4) return "Moderate"
    return "Weak"
  }

  const getCorrelationColor = (corr: number) => {
    if (corr >= 0.7) return "text-green-600"
    if (corr >= 0.4) return "text-yellow-600"
    if (corr >= 0) return "text-gray-600"
    if (corr >= -0.4) return "text-gray-600"
    if (corr >= -0.7) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Correlation Matrix
        </CardTitle>
        <CardDescription>Bitcoin's correlation with major financial assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {correlationData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                  {item.asset.split(" ")[0].slice(0, 3).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-sm">{item.asset}</p>
                  <p className="text-xs text-muted-foreground">{item.period} correlation</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold text-lg ${getCorrelationColor(item.correlation)}`}>
                    {item.correlation > 0 ? "+" : ""}
                    {item.correlation.toFixed(2)}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {getCorrelationStrength(item.correlation)}
                  </Badge>
                </div>
                <p className={`text-xs ${item.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {item.change} vs prev period
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-800">
            <strong>Note:</strong> Correlations above 0.7 indicate strong positive relationship, below -0.7 indicate
            strong negative relationship.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
