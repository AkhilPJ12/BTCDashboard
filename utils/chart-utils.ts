import type { PriceData } from "@/types"

// Chart utility functions
export const generateChartData = (period: string): PriceData[] => {
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

export const generatePriceData = (period: string): PriceData[] => {
  const baseData = {
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
  return baseData[period as keyof typeof baseData] || baseData["1D"]
}

export const getXAxisInterval = (dataLength: number): number => {
  if (dataLength <= 10) return 0
  if (dataLength <= 20) return 1
  if (dataLength <= 30) return 2
  if (dataLength <= 50) return Math.floor(dataLength / 8)
  return Math.floor(dataLength / 6)
}

export const calculatePriceChange = (currentData: PriceData[]) => {
  const latestPrice = currentData[currentData.length - 1].price
  const firstPrice = currentData[0].price
  const priceDifference = latestPrice - firstPrice
  const priceChangePercent = ((priceDifference / firstPrice) * 100).toFixed(2)
  const isPositive = priceDifference >= 0

  return {
    latestPrice,
    firstPrice,
    priceDifference,
    priceChangePercent,
    isPositive,
  }
}
