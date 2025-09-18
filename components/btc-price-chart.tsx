"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

// Sample data for different time periods with appropriate labels
const priceData = {
  "24h": Array.from({ length: 48 }, (_, i) => ({
    time: `${Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`,
    price: 43000 + Math.sin(i * 0.3) * 800 + Math.random() * 400 - 200,
  })),
  "1D": Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    price: 42000 + Math.sin(i * 0.5) * 1200 + Math.random() * 600 - 300,
  })),
  "1W": Array.from({ length: 14 }, (_, i) => ({
    time: `Day ${i + 1}`,
    price: 41000 + Math.sin(i * 0.4) * 2000 + Math.random() * 800 - 400,
  })),
  "1M": Array.from({ length: 30 }, (_, i) => ({
    time: `${i + 1}`,
    price: 35000 + Math.sin(i * 0.2) * 5000 + Math.random() * 1000 - 500,
  })),
  "1Y": Array.from({ length: 52 }, (_, i) => ({
    time: `W${i + 1}`,
    price: 20000 + Math.sin(i * 0.1) * 15000 + Math.random() * 2000 - 1000,
  })),
  All: Array.from({ length: 40 }, (_, i) => ({
    time: `${2015 + Math.floor(i / 4)}Q${(i % 4) + 1}`,
    price: 1000 + Math.pow(i * 0.3, 2) * 800 + Math.random() * 3000 - 1500,
  })),
}

const timeRanges = [
  { label: "24H", value: "24h" },
  { label: "1D", value: "1D" },
  { label: "1W", value: "1W" },
  { label: "1M", value: "1M" },
  { label: "1Y", value: "1Y" },
  { label: "All", value: "All" },
]

export function BtcPriceChart() {
  const [timeRange, setTimeRange] = useState("1D")

  const currentData = priceData[timeRange as keyof typeof priceData]
  const latestPrice = currentData[currentData.length - 1].price
  const firstPrice = currentData[0].price
  const priceDifference = latestPrice - firstPrice
  const priceChangePercent = ((priceDifference / firstPrice) * 100).toFixed(2)
  const isPositive = priceDifference >= 0

  // Calculate smart intervals for X-axis
  const getXAxisInterval = (dataLength: number) => {
    if (dataLength <= 10) return 0
    if (dataLength <= 20) return 1
    if (dataLength <= 30) return 2
    if (dataLength <= 50) return Math.floor(dataLength / 8)
    return Math.floor(dataLength / 6)
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-3 text-2xl">
              Bitcoin Price Chart
              <Badge variant="secondary" className="text-sm px-3 py-1">
                BTC/USD
              </Badge>
            </CardTitle>
            <CardDescription className="text-base mt-1">Real-time Bitcoin price tracking</CardDescription>
          </div>
          <div className="flex gap-1 bg-muted p-1.5 rounded-lg">
            {timeRanges.map((range) => (
              <Button
                key={range.value}
                variant={timeRange === range.value ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeRange(range.value)}
                className="h-9 px-4 text-sm font-medium"
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-4">
        {/* Price Display */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-baseline gap-4">
              <span className="text-3xl lg:text-4xl font-bold text-orange-600">${latestPrice.toLocaleString()}</span>
              <div className={`flex items-center gap-2 ${isPositive ? "text-green-600" : "text-red-600"}`}>
                <span className="text-lg font-semibold">
                  {isPositive ? "+" : ""}${Math.abs(priceDifference).toLocaleString()}
                </span>
                <span className="text-base">
                  ({isPositive ? "+" : ""}
                  {priceChangePercent}%)
                </span>
              </div>
            </div>
          </div>
          <div className="text-right text-base text-muted-foreground space-y-1">
            <div className="font-medium">High: ${Math.max(...currentData.map((d) => d.price)).toLocaleString()}</div>
            <div className="font-medium">Low: ${Math.min(...currentData.map((d) => d.price)).toLocaleString()}</div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[400px] lg:h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData} margin={{ top: 10, right: 10, left: 10, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} vertical={false} />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                tickMargin={8}
                interval={getXAxisInterval(currentData.length)}
                height={25}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 13, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                domain={["dataMin - 500", "dataMax + 500"]}
                width={60}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background border rounded-lg p-4 shadow-lg">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
                        <p className="text-xl font-bold text-orange-600">${payload[0].value?.toLocaleString()}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="hsl(25, 95%, 53%)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 5,
                  fill: "hsl(25, 95%, 53%)",
                  strokeWidth: 3,
                  stroke: "#fff",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
