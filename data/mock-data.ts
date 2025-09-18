import type { CryptoMetric, WhaleTransaction, NewsArticle } from "@/types"
import { Bitcoin, TrendingUp, Activity, Zap } from "lucide-react"

// Mock data for components
export const BTC_METRICS: CryptoMetric[] = [
  {
    name: "Bitcoin Price",
    value: "$43,256.78",
    change: "+2.34%",
    changeValue: "+$987.65 (24h)",
    isPositive: true,
    icon: Bitcoin,
  },
  {
    name: "Market Cap",
    value: "$847.2B",
    change: "+1.92%",
    changeValue: "Rank #1",
    isPositive: true,
    icon: TrendingUp,
  },
  {
    name: "24h Volume",
    value: "$28.5B",
    change: "+12.5%",
    changeValue: "vs avg volume",
    isPositive: true,
    icon: Activity,
  },
  {
    name: "Hash Rate",
    value: "450 EH/s",
    change: "+0.8%",
    changeValue: "7-day avg",
    isPositive: true,
    icon: Zap,
  },
]

export const WHALE_TRANSACTIONS: WhaleTransaction[] = [
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
]

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    title: "Bitcoin ETF Sees Record $2.1B Inflow as Institutional Adoption Accelerates",
    summary:
      "Major institutional investors continue to pour money into Bitcoin ETFs, with BlackRock's IBIT leading the charge with unprecedented daily inflows.",
    source: "CoinDesk",
    time: "15 minutes ago",
    category: "ETF",
    image: "/placeholder.svg?height=120&width=200&text=Bitcoin+ETF",
    url: "#",
    isBreaking: true,
    readTime: "3 min read",
  },
  {
    id: "2",
    title: "MicroStrategy Announces Additional $500M Bitcoin Purchase Strategy",
    summary:
      "The business intelligence company plans to acquire more Bitcoin through convertible notes, further solidifying its position as the largest corporate Bitcoin holder.",
    source: "Bitcoin Magazine",
    time: "1 hour ago",
    category: "Corporate",
    image: "/placeholder.svg?height=120&width=200&text=MicroStrategy",
    url: "#",
    isBreaking: false,
    readTime: "4 min read",
  },
]
