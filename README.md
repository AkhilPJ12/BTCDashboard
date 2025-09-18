# 🚀 Bitcoin Analytics Dashboard

A comprehensive, professional-grade Bitcoin analytics dashboard built with Next.js, TypeScript, and modern web technologies. Features real-time price tracking, advanced technical analysis, whale alerts, news aggregation, and extensive on-chain metrics.

![Bitcoin Dashboard](https://img.shields.io/badge/Bitcoin-Dashboard-orange?style=for-the-badge&logo=bitcoin)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 📊 **Core Analytics**
- **Real-time Bitcoin Price Tracking** - Live price updates with multiple timeframes
- **Advanced Technical Analysis** - 20+ technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands)
- **Interactive Charts** - Professional-grade charts with zoom, pan, and indicator overlays
- **Price Predictions** - AI-powered price forecasting based on technical indicators

### 🐋 **Market Intelligence**
- **Whale Alert System** - Track large Bitcoin transactions in real-time
- **On-Chain Metrics** - Network health, hash rate, difficulty, active addresses
- **Market Sentiment Analysis** - Fear & Greed Index, social media sentiment
- **Options Flow Analysis** - Put/call ratios, gamma exposure, max pain levels

### 📰 **News & Information**
- **Real-time News Feed** - Latest Bitcoin news from major sources
- **Breaking News Alerts** - Instant notifications for market-moving events
- **Market Insights** - Professional analysis and trend identification
- **Social Sentiment Tracking** - Twitter, Reddit, Telegram sentiment analysis

### 🔧 **Professional Tools**
- **Support & Resistance Levels** - Automated level detection
- **Liquidation Heatmaps** - Identify potential cascade zones
- **Order Book Analysis** - Real-time depth and liquidity analysis
- **Funding Rates** - Cross-exchange funding rate comparison
- **Correlation Matrix** - Bitcoin's correlation with traditional assets

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS + shadcn/ui
- **Charts:** Recharts
- **Icons:** Lucide React
- **State Management:** React Hooks
- **Data Fetching:** Native Fetch API
- **Deployment:** Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/bitcoin-analytics-dashboard.git
   cd bitcoin-analytics-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
bitcoin-analytics-dashboard/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home dashboard
│   ├── analytics/page.tsx       # Advanced analytics
│   ├── news/page.tsx           # News & whale alerts
│   ├── contact/page.tsx        # Contact form
│   └── support/page.tsx        # Support & donations
├── components/                   # React components
│   ├── charts/                 # Chart components
│   │   ├── btc-price-chart.tsx
│   │   └── advanced-btc-chart.tsx
│   ├── ui/                     # shadcn/ui components
│   │   ├── chart-wrapper.tsx   # Reusable chart wrapper
│   │   └── ...                 # Other UI components
│   ├── navbar.tsx              # Navigation
│   ├── portfolio-overview.tsx  # Metrics cards
│   ├── whale-alerts.tsx        # Whale transaction alerts
│   ├── btc-news.tsx           # News feed
│   └── ...                     # Other components
├── constants/                   # Configuration constants
│   └── chart-config.ts         # Chart settings & colors
├── data/                       # Mock data & samples
│   └── mock-data.ts           # Sample datasets
├── hooks/                      # Custom React hooks
│   └── useChartData.ts        # Chart data management
├── types/                      # TypeScript definitions
│   └── index.ts               # Global type definitions
├── utils/                      # Utility functions
│   └── chart-utils.ts         # Chart calculations
└── README.md                   # This file
\`\`\`

## 🎨 Customization Guide

### **🎯 Quick Customization**

#### **Change Colors & Theme**
\`\`\`typescript
// constants/chart-config.ts
export const CHART_COLORS = {
  primary: "hsl(25, 95%, 53%)", // Orange - change this
  green: "#10b981",             // Success color
  red: "#ef4444",               // Error color
  // ... add more colors
}
\`\`\`

#### **Add New Time Ranges**
\`\`\`typescript
// constants/chart-config.ts
export const TIME_RANGES = [
  { label: "1H", value: "1h" },    // Add new range
  { label: "24H", value: "24h" },
  // ... existing ranges
]
\`\`\`

#### **Modify Chart Data**
\`\`\`typescript
// utils/chart-utils.ts
export const generateChartData = (period: string) => {
  // Modify data generation logic here
  // Connect to real APIs instead of mock data
}
\`\`\`

### **🔧 Advanced Customization**

#### **Add New Technical Indicators**
\`\`\`typescript
// constants/chart-config.ts
export const TECHNICAL_INDICATORS = [
  { id: "your_indicator", label: "Your Indicator", color: "#your-color" },
  // ... existing indicators
]
\`\`\`

#### **Create New Chart Types**
\`\`\`typescript
// components/charts/your-new-chart.tsx
export function YourNewChart() {
  const { chartData } = useChartData()
  return (
    <ChartWrapper 
      data={chartData}
      // ... your customizations
    />
  )
}
\`\`\`

## 📊 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| **Dashboard** | `/` | Main Bitcoin analytics dashboard |
| **Advanced Analytics** | `/analytics` | Professional trading tools |
| **News & Alerts** | `/news` | Bitcoin news and whale alerts |
| **Contact** | `/contact` | Contact form |
| **Support** | `/support` | Donation and support page |

## 🔌 API Integration

Currently uses mock data. To integrate real APIs:

1. **Replace mock data** in `data/mock-data.ts`
2. **Update data fetching** in `utils/chart-utils.ts`
3. **Add API calls** in `hooks/useChartData.ts`

### **Recommended APIs:**
- **CoinGecko API** - Price data
- **Blockchain.info** - On-chain data  
- **WhaleAlert API** - Large transactions
- **CryptoCompare** - News feeds
- **TradingView** - Technical indicators

## 🚀 Deployment

### **Vercel (Recommended)**
\`\`\`bash
npm run build
vercel --prod
\`\`\`

### **Other Platforms**
\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** - Beautiful UI components
- **Recharts** - Powerful charting library
- **Lucide** - Beautiful icons
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js** - The React framework for production

## 📞 Support

- **GitHub Issues** - Bug reports and feature requests
- **Email** - your-email@example.com
- **Bitcoin Donations** - bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh

---

**⚠️ Disclaimer:** This dashboard is for educational and informational purposes only. Not financial advice. Always do your own research before making investment decisions.

**Made with ❤️ for the Bitcoin community**
