// Global type definitions
export interface TimeRange {
  label: string
  value: string
}

export interface PriceData {
  time: string
  price: number
  volume?: number
  rsi?: number
  macd?: number
  bb_upper?: number
  bb_lower?: number
  sma_20?: number
  ema_12?: number
}

export interface CryptoMetric {
  name: string
  value: string
  change: string
  changeValue: string
  isPositive: boolean
  icon: any
}

export interface WhaleTransaction {
  id: string
  amount: number
  usdValue: string
  type: string
  from: string
  to: string
  time: string
  date: string
  txHash: string
  isLarge: boolean
}

export interface NewsArticle {
  id: string
  title: string
  summary: string
  source: string
  time: string
  category: string
  image: string
  url: string
  isBreaking: boolean
  readTime: string
}

export interface TechnicalIndicator {
  id: string
  label: string
  color: string
}
