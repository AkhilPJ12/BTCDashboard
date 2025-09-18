import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const onChainData = [
  {
    metric: "Active Addresses",
    value: "1,234,567",
    change: "+5.2%",
    description: "24h active addresses",
    progress: 75,
  },
  {
    metric: "Transaction Count",
    value: "298,456",
    change: "+2.1%",
    description: "24h transactions",
    progress: 60,
  },
  {
    metric: "Network Difficulty",
    value: "62.46 T",
    change: "+1.8%",
    description: "Mining difficulty",
    progress: 85,
  },
  {
    metric: "Mempool Size",
    value: "45.2 MB",
    change: "-12.3%",
    description: "Unconfirmed transactions",
    progress: 30,
  },
  {
    metric: "Average Fee",
    value: "18.5 sat/vB",
    change: "-8.7%",
    description: "Transaction fees",
    progress: 40,
  },
  {
    metric: "HODL Waves",
    value: "68.2%",
    change: "+0.5%",
    description: "1+ year holders",
    progress: 68,
  },
]

export function BtcOnChainMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin On-Chain Metrics</CardTitle>
        <CardDescription>Real-time blockchain and network statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {onChainData.map((item) => (
            <div key={item.metric} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{item.metric}</p>
                <span className={`text-sm ${item.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {item.change}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
              <Progress value={item.progress} className="h-2" />
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
