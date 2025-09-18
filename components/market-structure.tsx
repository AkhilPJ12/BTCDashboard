import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Users, Building, Coins } from "lucide-react"

const marketStructure = [
  {
    metric: "Market Maker Ratio",
    value: "68%",
    description: "Professional vs retail trading",
    progress: 68,
    icon: Building,
    color: "text-blue-600",
    trend: "+2.3% from yesterday",
  },
  {
    metric: "Retail Participation",
    value: "32%",
    description: "Individual trader activity",
    progress: 32,
    icon: Users,
    color: "text-green-600",
    trend: "-1.8% from yesterday",
  },
  {
    metric: "Algorithmic Trading",
    value: "78%",
    description: "Automated trading volume",
    progress: 78,
    icon: Activity,
    color: "text-purple-600",
    trend: "+5.2% from yesterday",
  },
  {
    metric: "Spot vs Derivatives",
    value: "45:55",
    description: "Spot to derivatives ratio",
    progress: 45,
    icon: Coins,
    color: "text-orange-600",
    trend: "Derivatives dominant",
  },
]

export function MarketStructure() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-indigo-600" />
          Market Structure
        </CardTitle>
        <CardDescription>Trading composition and market participant analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {marketStructure.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-full">
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.metric}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="font-bold">
                    {item.value}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{item.trend}</p>
                </div>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
