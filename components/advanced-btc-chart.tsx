"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { TrendingUp, Settings, AlertTriangle } from "lucide-react"

// Sample data with technical indicators
const generateChartData = (period: string) => {
  const baseData = {
    "24h": Array.from({ length: 48 }, (_, i) => ({
      time: `${Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`,
      price: 43000 + Math.random() * 2000 - 1000,
      volume: 20 + Math.random() * 20,
      rsi: 30 + Math.random() * 40,
      macd: -50 + Math.random() * 100,
      bb_upper: 44000 + Math.random() * 1000,
      bb_lower: 42000 + Math.random() * 1000,
      sma_20: 43200 + Math.random() * 800,
      ema_12: 43100 + Math.random() * 900,
    })),
    "1D": Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      price: 42000 + Math.random() * 4000,
      volume: 25 + Math.random() * 15,
      rsi: 25 + Math.random() * 50,
      macd: -75 + Math.random() * 150,
      bb_upper: 45000 + Math.random() * 2000,
      bb_lower: 41000 + Math.random() * 2000,
      sma_20: 43000 + Math.random() * 1500,
      ema_12: 42800 + Math.random() * 1600,
    })),
    "1W": Array.from({ length: 14 }, (_, i) => ({
      time: `Day ${i + 1}`,
      price: 40000 + Math.random() * 8000,
      volume: 30 + Math.random() * 25,
      rsi: 20 + Math.random() * 60,
      macd: -100 + Math.random() * 200,
      bb_upper: 48000 + Math.random() * 3000,
      bb_lower: 38000 + Math.random() * 3000,
      sma_20: 42000 + Math.random() * 3000,
      ema_12: 41500 + Math.random() * 3500,
    })),
    "1Y": Array.from({ length: 52 }, (_, i) => ({
      time: `W${i + 1}`,
      price: 30000 + Math.random() * 20000,
      volume: 35 + Math.random() * 30,
      rsi: 15 + Math.random() * 70,
      macd: -150 + Math.random() * 300,
      bb_upper: 50000 + Math.random() * 5000,
      bb_lower: 25000 + Math.random() * 5000,
      sma_20: 40000 + Math.random() * 8000,
      ema_12: 38000 + Math.random() * 10000,
    })),
    All: Array.from({ length: 20 }, (_, i) => ({
      time: `${2015 + Math.floor(i / 4)}Q${(i % 4) + 1}`,
      price: 5000 + Math.random() * 40000,
      volume: 40 + Math.random() * 40,
      rsi: 10 + Math.random() * 80,
      macd: -200 + Math.random() * 400,
      bb_upper: 55000 + Math.random() * 10000,
      bb_lower: 15000 + Math.random() * 10000,
      sma_20: 35000 + Math.random() * 15000,
      ema_12: 30000 + Math.random() * 20000,
    })),
  }
  return baseData[period as keyof typeof baseData] || baseData["1D"]
}

const timeRanges = [
  { label: "24 hrs", value: "24h" },
  { label: "Day", value: "1D" },
  { label: "Week", value: "1W" },
  { label: "Year", value: "1Y" },
  { label: "All", value: "All" },
]

const technicalIndicators = [
  { id: "sma_20", label: "SMA (20)", color: "#8884d8" },
  { id: "ema_12", label: "EMA (12)", color: "#82ca9d" },
  { id: "bb_upper", label: "Bollinger Upper", color: "#ffc658" },
  { id: "bb_lower", label: "Bollinger Lower", color: "#ffc658" },
  { id: "rsi", label: "RSI", color: "#ff7300" },
  { id: "macd", label: "MACD", color: "#8dd1e1" },
]

export function AdvancedBtcChart() {
  const [timeRange, setTimeRange] = useState("1D")
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(["sma_20", "ema_12"])

  const chartData = generateChartData(timeRange)
  const latestPrice = chartData[chartData.length - 1].price
  const firstPrice = chartData[0].price
  const priceDifference = latestPrice - firstPrice
  const priceChangePercent = ((priceDifference / firstPrice) * 100).toFixed(2)
  const isPositive = priceDifference >= 0

  // Calculate predicted high/low based on indicators (simplified)
  const avgRSI = chartData.reduce((sum, d) => sum + d.rsi, 0) / chartData.length
  const avgMACD = chartData.reduce((sum, d) => sum + d.macd, 0) / chartData.length
  const volatility = Math.sqrt(
    chartData.reduce((sum, d) => sum + Math.pow(d.price - latestPrice, 2), 0) / chartData.length,
  )

  const predictedHigh = Math.round(latestPrice + volatility * 0.5 + (avgRSI > 50 ? 500 : 0) + (avgMACD > 0 ? 300 : 0))
  const predictedLow = Math.round(latestPrice - volatility * 0.5 - (avgRSI < 50 ? 500 : 0) - (avgMACD < 0 ? 300 : 0))

  const handleIndicatorChange = (indicatorId: string, checked: boolean) => {
    if (checked) {
      setSelectedIndicators([...selectedIndicators, indicatorId])
    } else {
      setSelectedIndicators(selectedIndicators.filter((id) => id !== indicatorId))
    }
  }

  // Calculate smart intervals for X-axis
  const getXAxisInterval = (dataLength: number) => {
    if (dataLength <= 10) return 0
    if (dataLength <= 20) return 1
    if (dataLength <= 30) return 2
    if (dataLength <= 50) return Math.floor(dataLength / 8)
    return Math.floor(dataLength / 6)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Advanced Bitcoin Chart
              <Badge variant="secondary">Professional</Badge>
            </CardTitle>
            <CardDescription>Technical analysis with multiple indicators and predictions</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Indicators ({selectedIndicators.length})
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Technical Indicators</h4>
                  {technicalIndicators.map((indicator) => (
                    <div key={indicator.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={indicator.id}
                        checked={selectedIndicators.includes(indicator.id)}
                        onCheckedChange={(checked) => handleIndicatorChange(indicator.id, checked as boolean)}
                      />
                      <Label htmlFor={indicator.id} className="text-sm">
                        {indicator.label}
                      </Label>
                      <div className="w-3 h-3 rounded-full ml-auto" style={{ backgroundColor: indicator.color }}></div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <div className="flex space-x-2">
              {timeRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={timeRange === range.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange(range.value)}
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-4">
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-2xl lg:text-3xl font-bold text-orange-600">${latestPrice.toLocaleString()}</p>
            <p className={`text-base font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
              {isPositive ? "+" : ""}${Math.abs(priceDifference).toLocaleString()} ({isPositive ? "+" : ""}
              {priceChangePercent}%)
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500">Predicted High (24h)</Badge>
              <span className="font-bold text-green-600">${predictedHigh.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-red-500">Predicted Low (24h)</Badge>
              <span className="font-bold text-red-600">${predictedLow.toLocaleString()}</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            <div className="flex items-start gap-1">
              <AlertTriangle className="h-3 w-3 mt-0.5 text-amber-500 flex-shrink-0" />
              <div>
                <p className="font-medium">Prediction Disclaimer</p>
                <p>Based on indicators and 8 years of data. Not financial advice.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[480px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                fontSize={12}
                tick={{
                  fill: "hsl(var(--muted-foreground))",
                }}
                interval={getXAxisInterval(chartData.length)}
                height={25}
                tickMargin={8}
              />
              <YAxis
                domain={["dataMin - 1000", "dataMax + 1000"]}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                fontSize={12}
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                width={70}
                tickCount={10}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background border rounded-lg p-3 shadow-lg">
                        <p className="text-sm font-medium mb-2">{label}</p>
                        {payload.map((entry, index) => (
                          <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: ${entry.value?.toLocaleString()}
                          </p>
                        ))}
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
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
              {selectedIndicators.map((indicatorId) => {
                const indicator = technicalIndicators.find((ind) => ind.id === indicatorId)
                return (
                  <Line
                    key={indicatorId}
                    type="monotone"
                    dataKey={indicatorId}
                    stroke={indicator?.color}
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray={indicatorId.includes("bb") ? "5 5" : "0"}
                  />
                )
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
