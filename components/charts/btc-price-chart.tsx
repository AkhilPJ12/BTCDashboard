"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChartWrapper } from "@/components/ui/chart-wrapper"
import { usePriceChartData } from "@/hooks/useChartData"
import { TIME_RANGES } from "@/constants/chart-config"

export function BtcPriceChart() {
  const { timeRange, setTimeRange, chartData, latestPrice, priceDifference, priceChangePercent, isPositive } =
    usePriceChartData()

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
            {TIME_RANGES.map((range) => (
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
            <div className="font-medium">High: ${Math.max(...chartData.map((d) => d.price)).toLocaleString()}</div>
            <div className="font-medium">Low: ${Math.min(...chartData.map((d) => d.price)).toLocaleString()}</div>
          </div>
        </div>

        {/* Chart */}
        <ChartWrapper data={chartData} height={450} />
      </CardContent>
    </Card>
  )
}
