# 📋 Development Instructions & Project Guide

## 🏗️ Project Architecture

### **📁 File Organization**

\`\`\`
bitcoin-analytics-dashboard/
├── 🎯 BUSINESS LOGIC
│   ├── types/index.ts           # TypeScript definitions
│   ├── constants/chart-config.ts # Configuration & settings
│   ├── utils/chart-utils.ts     # Data processing & calculations
│   ├── hooks/useChartData.ts    # State management
│   └── data/mock-data.ts        # Sample data
│
├── 🎨 UI COMPONENTS
│   ├── components/charts/       # Chart components
│   ├── components/ui/          # Reusable UI components
│   └── components/             # Feature components
│
├── 🌐 PAGES & ROUTING
│   └── app/                    # Next.js App Router pages
│
└── 📦 CONFIGURATION
    ├── package.json            # Dependencies
    ├── tailwind.config.ts      # Styling configuration
    └── tsconfig.json          # TypeScript configuration
\`\`\`

## 🛠️ How to Modify Different Aspects

### **🎨 UI & Styling Changes**

#### **1. Change Colors & Theme**
\`\`\`typescript
// 📍 Location: constants/chart-config.ts
export const CHART_COLORS = {
  primary: "hsl(25, 95%, 53%)",  // 🟠 Main Bitcoin orange
  green: "#10b981",              // 🟢 Success/profit color
  red: "#ef4444",                // 🔴 Error/loss color
  blue: "#3b82f6",               // 🔵 Info color
  purple: "#8b5cf6",             // 🟣 Accent color
  yellow: "#f59e0b",             // 🟡 Warning color
}

// 🎯 How to change:
// 1. Update colors in CHART_COLORS object
// 2. Colors automatically apply to all charts
// 3. Use HSL format for better consistency
\`\`\`

#### **2. Modify Chart Appearance**
\`\`\`typescript
// 📍 Location: constants/chart-config.ts
export const CHART_MARGINS = {
  default: { top: 10, right: 10, left: 10, bottom: 25 },
  advanced: { top: 20, right: 30, left: 20, bottom: 25 },
}

// 🎯 How to change:
// 1. Adjust margins for different chart types
// 2. Increase bottom margin for more X-axis label space
// 3. Increase left margin for longer Y-axis labels
\`\`\`

#### **3. Update Component Styling**
\`\`\`typescript
// 📍 Location: components/charts/btc-price-chart.tsx
<CardTitle className="flex items-center gap-3 text-2xl">
  Bitcoin Price Chart
  <Badge variant="secondary" className="text-sm px-3 py-1">
    BTC/USD
  </Badge>
</CardTitle>

// 🎯 How to change:
// 1. Modify Tailwind classes directly
// 2. Change text sizes: text-sm, text-lg, text-xl, text-2xl
// 3. Adjust spacing: gap-2, gap-4, px-4, py-2
// 4. Update colors: text-orange-600, bg-blue-50
\`\`\`

### **📊 Data & Functionality Changes**

#### **1. Add New Time Ranges**
\`\`\`typescript
// 📍 Location: constants/chart-config.ts
export const TIME_RANGES = [
  { label: "15M", value: "15m" },    // ➕ Add new range
  { label: "1H", value: "1h" },      // ➕ Add new range
  { label: "24H", value: "24h" },
  { label: "1W", value: "1W" },
  // ... existing ranges
]

// 📍 Then update: utils/chart-utils.ts
export const generatePriceData = (period: string) => {
  const baseData = {
    "15m": Array.from({ length: 96 }, (_, i) => ({ /* data */ })),
    "1h": Array.from({ length: 24 }, (_, i) => ({ /* data */ })),
    // ... add your new periods
  }
}
\`\`\`

#### **2. Add Technical Indicators**
\`\`\`typescript
// 📍 Location: constants/chart-config.ts
export const TECHNICAL_INDICATORS = [
  { id: "stoch_rsi", label: "Stochastic RSI", color: "#ff6b6b" },
  { id: "williams_r", label: "Williams %R", color: "#4ecdc4" },
  // ... existing indicators
]

// 📍 Then update data generation: utils/chart-utils.ts
// Add the new indicator calculations to generateChartData()
\`\`\`

#### **3. Modify Mock Data**
\`\`\`typescript
// 📍 Location: data/mock-data.ts
export const BTC_METRICS = [
  {
    name: "Your New Metric",
    value: "$123.45K",
    change: "+5.67%",
    changeValue: "+$1,234 (24h)",
    isPositive: true,
    icon: YourIcon,
  },
  // ... existing metrics
]
\`\`\`

### **🔧 Adding New Features**

#### **1. Create New Chart Component**
\`\`\`typescript
// 📍 Location: components/charts/your-new-chart.tsx
"use client"

import { ChartWrapper } from "@/components/ui/chart-wrapper"
import { useChartData } from "@/hooks/useChartData"

export function YourNewChart() {
  const { chartData, timeRange, setTimeRange } = useChartData()
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your New Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartWrapper 
          data={chartData}
          height={400}
          // ... your customizations
        />
      </CardContent>
    </Card>
  )
}
\`\`\`

#### **2. Add New Page**
\`\`\`typescript
// 📍 Location: app/your-page/page.tsx
import { Navbar } from "@/components/navbar"
import { YourNewChart } from "@/components/charts/your-new-chart"

export default function YourPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <YourNewChart />
      </main>
    </div>
  )
}
\`\`\`

#### **3. Update Navigation**
\`\`\`typescript
// 📍 Location: components/navbar.tsx
const navItems = [
  { name: "Your Page", href: "/your-page", active: false },
  // ... existing items
]
\`\`\`

## 🚀 Running the Project

### **Development Mode**
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
\`\`\`

### **Production Build**
\`\`\`bash
# Build for production
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel --prod
\`\`\`

### **Development Workflow**
\`\`\`bash
# 1. Make changes to files
# 2. Save files (auto-reload in dev mode)
# 3. Check browser for updates
# 4. Test functionality
# 5. Commit changes

git add .
git commit -m "Your changes"
git push
\`\`\`

## 🔍 Common Modifications

### **📈 Chart Customizations**

#### **Change Chart Height**
\`\`\`typescript
// In any chart component
<ChartWrapper 
  data={chartData}
  height={600}  // 🎯 Change this value
/>
\`\`\`

#### **Modify Chart Colors**
\`\`\`typescript
// 📍 Location: components/ui/chart-wrapper.tsx
<Line
  stroke={CHART_COLORS.primary}  // 🎯 Change to any color
  strokeWidth={3}                // 🎯 Change line thickness
/>
\`\`\`

#### **Add Chart Grid Lines**
\`\`\`typescript
// 📍 Location: components/ui/chart-wrapper.tsx
<CartesianGrid 
  strokeDasharray="3 3"          // 🎯 Dash pattern
  stroke="hsl(var(--border))"    // 🎯 Grid color
  opacity={0.3}                  // 🎯 Grid transparency
  vertical={true}                // 🎯 Show vertical lines
/>
\`\`\`

### **🎨 Layout Modifications**

#### **Change Card Layout**
\`\`\`typescript
// In any component with cards
<div className="grid gap-6 lg:grid-cols-3">  {/* 🎯 Change columns */}
  <YourCard />
  <YourCard />
  <YourCard />
</div>
\`\`\`

#### **Adjust Spacing**
\`\`\`typescript
// Common spacing classes:
className="space-y-4"    // Vertical spacing between children
className="gap-6"        // Grid gap
className="px-4 py-6"    // Padding horizontal/vertical
className="mb-8"         // Margin bottom
\`\`\`

### **📱 Responsive Design**

#### **Breakpoint Classes**
\`\`\`typescript
className="text-sm md:text-lg lg:text-xl"     // Responsive text
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Responsive grid
className="hidden md:block"                    // Hide on mobile
className="block md:hidden"                    // Show only on mobile
\`\`\`

## 🐛 Troubleshooting

### **Common Issues**

#### **Charts Not Displaying**
\`\`\`bash
# Check if Recharts is installed
npm list recharts

# Reinstall if needed
npm install recharts
\`\`\`

#### **TypeScript Errors**
\`\`\`bash
# Check TypeScript configuration
npx tsc --noEmit

# Fix type errors in types/index.ts
\`\`\`

#### **Styling Issues**
\`\`\`bash
# Rebuild Tailwind CSS
npm run build

# Check if classes are properly imported
\`\`\`

### **Performance Optimization**

#### **Reduce Chart Data Points**
\`\`\`typescript
// 📍 Location: utils/chart-utils.ts
// Reduce array length for better performance
Array.from({ length: 24 }, ...)  // Instead of 100+
\`\`\`

#### **Lazy Load Components**
\`\`\`typescript
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./heavy-chart'), {
  loading: () => <p>Loading...</p>
})
\`\`\`

## 📚 Resources

### **Documentation**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)

### **Useful Commands**
\`\`\`bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting
npm run type-check   # TypeScript checking
\`\`\`

---

**💡 Pro Tips:**
- Always test changes in development mode first
- Use TypeScript for better code quality
- Follow the existing code patterns
- Keep components small and focused
- Use the existing utility functions when possible

**🆘 Need Help?**
- Check the console for error messages
- Review the existing code for patterns
- Test one change at a time
- Use Git to track your changes
