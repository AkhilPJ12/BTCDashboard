import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Users, Flame } from "lucide-react"

const insights = [
  {
    title: "Institutional Flow",
    value: "+$2.1B",
    change: "+15.2%",
    description: "ETF inflows this week",
    icon: TrendingUp,
    isPositive: true,
    trend: "Strong buying pressure from institutions",
  },
  {
    title: "Retail Interest",
    value: "High",
    change: "+8.7%",
    description: "Google search trends",
    icon: Users,
    isPositive: true,
    trend: "Increasing retail FOMO signals",
  },
  {
    title: "Transaction Fees",
    value: "18.5 sat/vB",
    change: "-12.3%",
    description: "Average network fee",
    icon: DollarSign,
    isPositive: true,
    trend: "Lower fees indicate healthy mempool",
  },
  {
    title: "HODLer Strength",
    value: "68.2%",
    change: "+2.1%",
    description: "1+ year holders",
    icon: Flame,
    isPositive: true,
    trend: "Long-term holders accumulating",
  },
]

export function BtcMarketInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-orange-600" />
          Market Insights
        </CardTitle>
        <CardDescription>Key Bitcoin market indicators and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${insight.isPositive ? "bg-green-50" : "bg-red-50"}`}>
                    <insight.icon className={`h-4 w-4 ${insight.isPositive ? "text-green-600" : "text-red-600"}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{insight.title}</p>
                    <p className="text-xs text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{insight.value}</p>
                  <Badge variant={insight.isPositive ? "default" : "destructive"} className="text-xs">
                    {insight.change}
                  </Badge>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic pl-11">{insight.trend}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
