import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Globe, TrendingUp } from "lucide-react"

const networkMetrics = [
  {
    title: "Network Security",
    value: "99.98%",
    description: "Uptime last 30 days",
    progress: 99.98,
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Hash Rate",
    value: "450 EH/s",
    description: "Network computing power",
    progress: 85,
    icon: Zap,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Node Count",
    value: "15,847",
    description: "Active Bitcoin nodes",
    progress: 78,
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Market Dominance",
    value: "52.3%",
    description: "BTC market cap dominance",
    progress: 52.3,
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function BtcNetworkHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-600" />
          Network Health
        </CardTitle>
        <CardDescription>Bitcoin network status and security metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {networkMetrics.map((metric, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${metric.bgColor}`}>
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{metric.title}</p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
                <Badge variant="outline" className="font-bold">
                  {metric.value}
                </Badge>
              </div>
              <Progress value={metric.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
