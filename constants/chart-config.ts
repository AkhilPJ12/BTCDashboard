// Chart configuration and constants

interface TimeRange {
  label: string
  value: string
}

interface TechnicalIndicator {
  id: string
  label: string
  color: string
}

export const TIME_RANGES: TimeRange[] = [
  { label: "24H", value: "24h" },
  { label: "1D", value: "1D" },
  { label: "1W", value: "1W" },
  { label: "1M", value: "1M" },
  { label: "1Y", value: "1Y" },
  { label: "All", value: "All" },
]

export const ADVANCED_TIME_RANGES: TimeRange[] = [
  { label: "24 hrs", value: "24h" },
  { label: "Day", value: "1D" },
  { label: "Week", value: "1W" },
  { label: "Year", value: "1Y" },
  { label: "All", value: "All" },
]

export const TECHNICAL_INDICATORS: TechnicalIndicator[] = [
  { id: "sma_20", label: "SMA (20)", color: "#8884d8" },
  { id: "ema_12", label: "EMA (12)", color: "#82ca9d" },
  { id: "bb_upper", label: "Bollinger Upper", color: "#ffc658" },
  { id: "bb_lower", label: "Bollinger Lower", color: "#ffc658" },
  { id: "rsi", label: "RSI", color: "#ff7300" },
  { id: "macd", label: "MACD", color: "#8dd1e1" },
]

export const CHART_COLORS = {
  primary: "hsl(25, 95%, 53%)", // Orange
  green: "#10b981",
  red: "#ef4444",
  blue: "#3b82f6",
  purple: "#8b5cf6",
  yellow: "#f59e0b",
}

export const CHART_MARGINS = {
  default: { top: 10, right: 10, left: 10, bottom: 25 },
  advanced: { top: 20, right: 30, left: 20, bottom: 25 },
}
