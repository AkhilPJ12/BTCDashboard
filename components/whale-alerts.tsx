"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpRight, ArrowDownLeft, Waves, ExternalLink, Filter, RefreshCw } from "lucide-react"

const allWhaleTransactions = [
  {
    id: "1",
    amount: 1247.83,
    usdValue: "$53.9M",
    type: "transfer",
    from: "Binance",
    to: "Unknown Wallet",
    time: "2 minutes ago",
    date: "2024-01-29",
    txHash: "a1b2c3d4e5f6...",
    isLarge: true,
  },
  {
    id: "2",
    amount: 892.45,
    usdValue: "$38.6M",
    type: "withdrawal",
    from: "Coinbase",
    to: "Cold Storage",
    time: "15 minutes ago",
    date: "2024-01-29",
    txHash: "f6e5d4c3b2a1...",
    isLarge: true,
  },
  {
    id: "3",
    amount: 2156.92,
    usdValue: "$93.2M",
    type: "transfer",
    from: "Unknown Wallet",
    to: "Kraken",
    time: "1 hour ago",
    date: "2024-01-29",
    txHash: "9z8y7x6w5v4u...",
    isLarge: true,
  },
  {
    id: "4",
    amount: 567.23,
    usdValue: "$24.5M",
    type: "deposit",
    from: "Cold Storage",
    to: "Binance",
    time: "2 hours ago",
    date: "2024-01-29",
    txHash: "m3n4o5p6q7r8...",
    isLarge: false,
  },
  {
    id: "5",
    amount: 1834.67,
    usdValue: "$79.3M",
    type: "transfer",
    from: "Bitfinex",
    to: "Unknown Wallet",
    time: "3 hours ago",
    date: "2024-01-29",
    txHash: "s9t0u1v2w3x4...",
    isLarge: true,
  },
  {
    id: "6",
    amount: 345.12,
    usdValue: "$14.9M",
    type: "withdrawal",
    from: "Kraken",
    to: "Unknown Wallet",
    time: "Yesterday",
    date: "2024-01-28",
    txHash: "y4x3w2v1u0t9...",
    isLarge: false,
  },
  {
    id: "7",
    amount: 2890.45,
    usdValue: "$125.1M",
    type: "transfer",
    from: "Unknown Wallet",
    to: "Coinbase",
    time: "2 days ago",
    date: "2024-01-27",
    txHash: "p8q9r0s1t2u3...",
    isLarge: true,
  },
]

export function WhaleAlerts() {
  const [dateFilter, setDateFilter] = useState("all")
  const [minAmount, setMinAmount] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate refresh
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }

  const filteredTransactions = allWhaleTransactions.filter((tx) => {
    // Date filter
    const today = new Date().toISOString().split("T")[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0]

    let dateMatch = true
    switch (dateFilter) {
      case "today":
        dateMatch = tx.date === today
        break
      case "yesterday":
        dateMatch = tx.date === yesterday
        break
      case "week":
        dateMatch = tx.date >= weekAgo
        break
      case "all":
      default:
        dateMatch = true
    }

    // Amount filter
    const amountMatch = minAmount === "" || tx.amount >= Number.parseFloat(minAmount)

    return dateMatch && amountMatch
  })

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "withdrawal":
        return <ArrowUpRight className="h-5 w-5 text-red-500" />
      case "deposit":
        return <ArrowDownLeft className="h-5 w-5 text-green-500" />
      default:
        return <ArrowUpRight className="h-5 w-5 text-blue-500" />
    }
  }

  const getTransactionBg = (type: string) => {
    switch (type) {
      case "withdrawal":
        return "bg-red-50 border-red-200 hover:bg-red-100"
      case "deposit":
        return "bg-green-50 border-green-200 hover:bg-green-100"
      default:
        return "bg-blue-50 border-blue-200 hover:bg-blue-100"
    }
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-blue-600" />
              Whale Alerts
              <Badge variant="secondary" className="ml-2">
                {filteredTransactions.length}
              </Badge>
            </CardTitle>
            <CardDescription>Large Bitcoin transactions detected on the blockchain</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-transparent"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="space-y-1">
              <Label htmlFor="date-filter" className="text-xs">
                Date Range
              </Label>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full sm:w-[140px] h-8">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="amount-filter" className="text-xs">
                Min Amount (BTC)
              </Label>
              <Input
                id="amount-filter"
                type="number"
                placeholder="e.g. 100"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                className="w-full sm:w-[120px] h-8"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Waves className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No whale transactions found with current filters</p>
            </div>
          ) : (
            filteredTransactions.map((tx) => (
              <div
                key={tx.id}
                className={`p-4 border rounded-lg transition-all duration-200 ${getTransactionBg(tx.type)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white rounded-full shadow-sm">{getTransactionIcon(tx.type)}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-xl">₿{tx.amount.toLocaleString()}</span>
                        <Badge variant="outline" className="bg-white">
                          {tx.usdValue}
                        </Badge>
                        {tx.isLarge && <Badge className="bg-orange-500 hover:bg-orange-600">🐋 WHALE</Badge>}
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="capitalize font-medium">{tx.type}</span>
                      <span className="text-muted-foreground">from</span>
                      <Badge variant="secondary" className="text-xs">
                        {tx.from}
                      </Badge>
                      <span className="text-muted-foreground">to</span>
                      <Badge variant="secondary" className="text-xs">
                        {tx.to}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{tx.time}</span>
                      <span className="font-mono bg-white px-2 py-1 rounded">{tx.txHash}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            Tracking transactions above ₿100 (~$4.3M) • Updates every 30 seconds
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
