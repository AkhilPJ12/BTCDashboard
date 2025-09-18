import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, TrendingUp, Activity, Zap } from "lucide-react"

const btcMetrics = [
  {
    name: "Bitcoin Price",
    value: "$43,256.78",
    change: "+2.34%",
    changeValue: "+$987.65 (24h)",
    isPositive: true,
    icon: Bitcoin,
  },
  {
    name: "Market Cap",
    value: "$847.2B",
    change: "+1.92%",
    changeValue: "Rank #1",
    isPositive: true,
    icon: TrendingUp,
  },
  {
    name: "24h Volume",
    value: "$28.5B",
    change: "+12.5%",
    changeValue: "vs avg volume",
    isPositive: true,
    icon: Activity,
  },
  {
    name: "Hash Rate",
    value: "450 EH/s",
    change: "+0.8%",
    changeValue: "7-day avg",
    isPositive: true,
    icon: Zap,
  },
]

export function PortfolioOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {btcMetrics.map((item) => (
        <Card key={item.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            <item.icon className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={item.isPositive ? "text-green-600" : "text-red-600"}>{item.change}</span>{" "}
              {item.changeValue}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
