"use client"

import { useState, useMemo } from "react"
import { generateChartData, generatePriceData, calculatePriceChange } from "@/utils/chart-utils"

export const useAdvancedChartData = (initialTimeRange = "1D") => {
  const [timeRange, setTimeRange] = useState(initialTimeRange)
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(["sma_20", "ema_12"])

  const chartData = useMemo(() => generateChartData(timeRange), [timeRange])
  const priceStats = useMemo(() => calculatePriceChange(chartData), [chartData])

  const handleIndicatorChange = (indicatorId: string, checked: boolean) => {
    if (checked) {
      setSelectedIndicators([...selectedIndicators, indicatorId])
    } else {
      setSelectedIndicators(selectedIndicators.filter((id) => id !== indicatorId))
    }
  }

  return {
    timeRange,
    setTimeRange,
    selectedIndicators,
    handleIndicatorChange,
    chartData,
    ...priceStats,
  }
}

export const usePriceChartData = (initialTimeRange = "1D") => {
  const [timeRange, setTimeRange] = useState(initialTimeRange)

  const chartData = useMemo(() => generatePriceData(timeRange), [timeRange])
  const priceStats = useMemo(() => calculatePriceChange(chartData), [chartData])

  return {
    timeRange,
    setTimeRange,
    chartData,
    ...priceStats,
  }
}
