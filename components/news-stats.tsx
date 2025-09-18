import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Activity, Newspaper, AlertTriangle } from "lucide-react"

const newsStats = [
  {
    title: "Breaking News",
    value: "3",
    description: "Active breaking stories",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    change: "+2 from yesterday",
  },
  {
    title: "Whale Alerts",
    value: "12",
    description: "Large transactions today",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    change: "+5 from yesterday",
  },
  {
    title: "News Articles",
    value: "47",
    description: "Published in last 24h",
    icon: Newspaper,
    color: "text-green-600",
    bgColor: "bg-green-50",
    change: "+12 from yesterday",
  },
  {
    title: "Market Sentiment",
    value: "Bullish",
    description: "Based on news analysis",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    change: "↑ from neutral",
  },
]

export function NewsStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {newsStats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <p className="text-xs text-green-600 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
