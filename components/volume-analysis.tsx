import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react"

const volumeData = [
  {
    timeframe: "1H",
    volume: "$2.8B",
    change: "+15.2%",
    buyVolume: 65,
    sellVolume: 35,
    isPositive: true,
  },
  {
    timeframe: "4H",
    volume: "$8.4B",
    change: "+8.7%",
    buyVolume: 58,
    sellVolume: 42,
    isPositive: true,
  },
  {
    timeframe: "24H",
    volume: "$28.5B",
    change: "-3.2%",
    buyVolume: 45,
    sellVolume: 55,
    isPositive: false,
  },
  {
    timeframe: "7D",
    volume: "$156.2B",
    change: "+12.8%",
    buyVolume: 62,
    sellVolume: 38,
    isPositive: true,
  },
]

export function VolumeAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Volume Analysis
        </CardTitle>
        <CardDescription>Buy/sell volume distribution and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {volumeData.map((data, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono min-w-[50px] justify-center">
                    {data.timeframe}
                  </Badge>
                  <div className="min-w-0">
                    <p className="font-bold text-lg">{data.volume}</p>
                    <p className={`text-sm ${data.isPositive ? "text-green-600" : "text-red-600"}`}>
                      {data.change} vs previous
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {data.isPositive ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">Buy: {data.buyVolume}%</span>
                  <span className="text-red-600 font-medium">Sell: {data.sellVolume}%</span>
                </div>
                <div className="flex h-3 rounded-full overflow-hidden bg-muted">
                  <div
                    className="bg-green-500 transition-all duration-300"
                    style={{ width: `${data.buyVolume}%` }}
                  ></div>
                  <div
                    className="bg-red-500 transition-all duration-300"
                    style={{ width: `${data.sellVolume}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
