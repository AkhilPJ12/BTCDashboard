"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ExternalLink, TrendingUp, Users, Building, Zap, Globe, Banknote } from "lucide-react"

const newsArticles = [
  {
    id: "1",
    title: "Bitcoin ETF Sees Record $2.1B Inflow as Institutional Adoption Accelerates",
    summary:
      "Major institutional investors continue to pour money into Bitcoin ETFs, with BlackRock's IBIT leading the charge with unprecedented daily inflows.",
    source: "CoinDesk",
    time: "15 minutes ago",
    category: "ETF",
    image: "/placeholder.svg?height=120&width=200&text=Bitcoin+ETF",
    url: "#",
    isBreaking: true,
    readTime: "3 min read",
  },
  {
    id: "2",
    title: "MicroStrategy Announces Additional $500M Bitcoin Purchase Strategy",
    summary:
      "The business intelligence company plans to acquire more Bitcoin through convertible notes, further solidifying its position as the largest corporate Bitcoin holder.",
    source: "Bitcoin Magazine",
    time: "1 hour ago",
    category: "Corporate",
    image: "/placeholder.svg?height=120&width=200&text=MicroStrategy",
    url: "#",
    isBreaking: false,
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Lightning Network Capacity Reaches New All-Time High of 5,000 BTC",
    summary:
      "The Bitcoin Lightning Network continues its growth trajectory, with increased adoption driving capacity to unprecedented levels.",
    source: "The Block",
    time: "2 hours ago",
    category: "Technology",
    image: "/placeholder.svg?height=120&width=200&text=Lightning+Network",
    url: "#",
    isBreaking: false,
    readTime: "2 min read",
  },
  {
    id: "4",
    title: "Bitcoin Mining Difficulty Adjusts Upward by 3.2% as Hash Rate Soars",
    summary:
      "Network security reaches new heights as mining difficulty increases, reflecting growing computational power securing the Bitcoin blockchain.",
    source: "CryptoSlate",
    time: "4 hours ago",
    category: "Mining",
    image: "/placeholder.svg?height=120&width=200&text=Bitcoin+Mining",
    url: "#",
    isBreaking: false,
    readTime: "5 min read",
  },
]

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "etf":
      return <TrendingUp className="h-4 w-4" />
    case "corporate":
      return <Building className="h-4 w-4" />
    case "technology":
      return <Zap className="h-4 w-4" />
    case "mining":
      return <Users className="h-4 w-4" />
    case "government":
      return <Globe className="h-4 w-4" />
    case "banking":
      return <Banknote className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

const getCategoryStyle = (category: string) => {
  switch (category.toLowerCase()) {
    case "etf":
      return "bg-green-500 text-white"
    case "corporate":
      return "bg-blue-500 text-white"
    case "technology":
      return "bg-purple-500 text-white"
    case "mining":
      return "bg-orange-500 text-white"
    case "government":
      return "bg-red-500 text-white"
    case "banking":
      return "bg-indigo-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export function BtcNews() {
  const [loadingMore, setLoadingMore] = useState(false)

  const handleLoadMore = async () => {
    setLoadingMore(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoadingMore(false)
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-orange-600" />
          Latest Bitcoin News
          <Badge variant="outline" className="ml-2">
            {newsArticles.length} articles
          </Badge>
        </CardTitle>
        <CardDescription>Stay updated with the latest Bitcoin developments and market news</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[600px] overflow-y-auto">
          {newsArticles.map((article, index) => (
            <div
              key={article.id}
              className={`group relative overflow-hidden rounded-lg border transition-all duration-200 hover:shadow-lg ${
                article.isBreaking
                  ? "bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-sm"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {article.isBreaking && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
              )}

              <div className="p-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-20 h-16 object-cover rounded-md border"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {article.isBreaking && (
                          <Badge className="bg-red-500 hover:bg-red-600 text-white animate-pulse text-xs">
                            🔴 BREAKING
                          </Badge>
                        )}
                        <Badge className={`text-xs ${getCategoryStyle(article.category)}`}>
                          <span className="flex items-center gap-1">
                            {getCategoryIcon(article.category)}
                            {article.category}
                          </span>
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>

                    <h3 className="font-semibold text-sm leading-tight hover:text-orange-600 cursor-pointer transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{article.summary}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-orange-600">{article.source}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.time}
                        </span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded-full">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t">
          <Button
            variant="outline"
            className="w-full bg-transparent hover:bg-orange-50 hover:border-orange-200"
            onClick={handleLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More News"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
