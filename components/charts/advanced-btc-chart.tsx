"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChartWrapper } from "@/components/ui/chart-wrapper"
import { useAdvancedChartData } from "@/hooks/useChartData"
import { ADVANCED_TIME_RANGES, TECHNICAL_INDICATORS, CHART_MARGINS } from "@/constants/chart-config"
import { TrendingUp, Settings, AlertTriangle } from "lucide-react"

export function AdvancedBtcChart() {
  const {
    timeRange,
    setTimeRange,
    selectedIndicators,
    handleIndicatorChange,
    chartData,
    latestPrice,
    priceDifference,
    priceChangePercent,
    isPositive,
  } = useAdvancedChartData()

  // Calculate predicted high/low based on indicators (simplified)
  const avgRSI = chartData.reduce((sum, d) => sum + (d.rsi || 0), 0) / chartData.length
  const avgMACD = chartData.reduce((sum, d) => sum + (d.macd || 0), 0) / chartData.length
  const volatility = Math.sqrt(
    chartData.reduce((sum, d) => sum + Math.pow(d.price - latestPrice, 2), 0) / chartData.length,
  )

  const predictedHigh = Math.round(latestPrice + volatility * 0.5 + (avgRSI > 50 ? 500 : 0) + (avgMACD > 0 ? 300 : 0))
  const predictedLow = Math.round(latestPrice - volatility * 0.5 - (avgRSI < 50 ? 500 : 0) - (avgMACD < 0 ? 300 : 0))

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
                  {TECHNICAL_INDICATORS.map((indicator) => (
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
              {ADVANCED_TIME_RANGES.map((range) => (
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

        <ChartWrapper
          data={chartData}
          height={480}
          selectedIndicators={selectedIndicators}
          technicalIndicators={TECHNICAL_INDICATORS}
          margin={CHART_MARGINS.advanced}
        />
      </CardContent>
    </Card>
  )
}
