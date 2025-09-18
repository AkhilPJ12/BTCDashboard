"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Waves, ExternalLink } from "lucide-react"

const whaleTransactions = [
  {
    id: "1",
    amount: "1,247.83",
    usdValue: "$53.9M",
    type: "transfer",
    from: "Binance",
    to: "Unknown Wallet",
    time: "2 minutes ago",
    txHash: "a1b2c3d4e5f6...",
    isLarge: true,
  },
  {
    id: "2",
    amount: "892.45",
    usdValue: "$38.6M",
    type: "withdrawal",
    from: "Coinbase",
    to: "Cold Storage",
    time: "15 minutes ago",
    txHash: "f6e5d4c3b2a1...",
    isLarge: true,
  },
  {
    id: "3",
    amount: "2,156.92",
    usdValue: "$93.2M",
    type: "transfer",
    from: "Unknown Wallet",
    to: "Kraken",
    time: "1 hour ago",
    txHash: "9z8y7x6w5v4u...",
    isLarge: true,
  },
]

export function WhaleAlertWidget() {
  const [isLoading, setIsLoading] = useState(false)

  const handleViewAll = () => {
    // Navigate to Whale Alert page
    window.location.href = "/news"
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "withdrawal":
        return <ArrowUpRight className="h-4 w-4 text-red-500" />
      case "deposit":
        return <ArrowDownLeft className="h-4 w-4 text-green-500" />
      default:
        return <ArrowUpRight className="h-4 w-4 text-blue-500" />
    }
  }

  const getTransactionBg = (type: string) => {
    switch (type) {
      case "withdrawal":
        return "bg-red-50 border-red-200"
      case "deposit":
        return "bg-green-50 border-green-200"
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Waves className="h-5 w-5 text-blue-600" />
          Whale Alerts
          <Badge className="ml-2 bg-orange-500">Live</Badge>
        </CardTitle>
        <CardDescription>Recent large Bitcoin transactions</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-3 px-6">
          {whaleTransactions.slice(0, 3).map((tx) => (
            <div
              key={tx.id}
              className={`p-3 border rounded-lg transition-all ${getTransactionBg(tx.type)} hover:shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white rounded-full">{getTransactionIcon(tx.type)}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">₿{tx.amount}</span>
                      <Badge variant="outline" className="bg-white text-xs">
                        {tx.usdValue}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tx.from} → {tx.to}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-right text-muted-foreground">{tx.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-3 pb-4 flex justify-center">
        <Button variant="outline" size="sm" className="w-full bg-transparent border-dashed" onClick={handleViewAll}>
          View All Whale Alerts
          <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
