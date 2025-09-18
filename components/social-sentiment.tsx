import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageCircle, Twitter, Users, TrendingUp } from "lucide-react"

const sentimentData = [
  {
    platform: "Twitter",
    sentiment: 72,
    volume: "45.2K",
    change: "+8.5%",
    icon: Twitter,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    platform: "Reddit",
    sentiment: 68,
    volume: "12.8K",
    change: "+3.2%",
    icon: MessageCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    platform: "Telegram",
    sentiment: 81,
    volume: "28.1K",
    change: "+12.7%",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

const sentimentTrends = [
  { keyword: "Bitcoin ETF", mentions: 8420, sentiment: 85, trend: "+15%" },
  { keyword: "BTC Halving", mentions: 5230, sentiment: 78, trend: "+8%" },
  { keyword: "Institutional", mentions: 3890, sentiment: 82, trend: "+22%" },
  { keyword: "Regulation", mentions: 2150, sentiment: 45, trend: "-5%" },
]

export function SocialSentiment() {
  const getSentimentLabel = (score: number) => {
    if (score >= 80) return { label: "Very Bullish", color: "text-green-700" }
    if (score >= 60) return { label: "Bullish", color: "text-green-600" }
    if (score >= 40) return { label: "Neutral", color: "text-yellow-600" }
    if (score >= 20) return { label: "Bearish", color: "text-red-600" }
    return { label: "Very Bearish", color: "text-red-700" }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-600" />
          Social Sentiment Analysis
        </CardTitle>
        <CardDescription>Real-time social media sentiment tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-4">
            {sentimentData.map((platform, index) => (
              <div key={index} className={`p-4 rounded-lg ${platform.bgColor} border`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <platform.icon className={`h-5 w-5 ${platform.color}`} />
                    <div>
                      <p className="font-medium">{platform.platform}</p>
                      <p className="text-xs text-muted-foreground">{platform.volume} mentions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {getSentimentLabel(platform.sentiment).label}
                    </Badge>
                    <p className="text-xs text-green-600">{platform.change}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sentiment Score</span>
                    <span className="font-bold">{platform.sentiment}/100</span>
                  </div>
                  <Progress value={platform.sentiment} className="h-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Trending Keywords</h4>
            {sentimentTrends.map((trend, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm">{trend.keyword}</p>
                  <p className="text-xs text-muted-foreground">{trend.mentions.toLocaleString()} mentions</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${getSentimentLabel(trend.sentiment).color}`}>
                      {trend.sentiment}%
                    </span>
                    <Badge variant={trend.trend.startsWith("+") ? "default" : "destructive"} className="text-xs">
                      {trend.trend}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
