import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const marketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$43,256.78",
    change: "+2.34%",
    changeValue: "+$987.65",
    volume: "$28.5B",
    marketCap: "$847.2B",
    isPositive: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,678.90",
    change: "+1.87%",
    changeValue: "+$49.12",
    volume: "$15.2B",
    marketCap: "$321.8B",
    isPositive: true,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: "$312.45",
    change: "-0.92%",
    changeValue: "-$2.89",
    volume: "$1.8B",
    marketCap: "$48.1B",
    isPositive: false,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "$0.4567",
    change: "+5.23%",
    changeValue: "+$0.0227",
    volume: "$892M",
    marketCap: "$16.2B",
    isPositive: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$98.76",
    change: "+3.45%",
    changeValue: "+$3.29",
    volume: "$2.1B",
    marketCap: "$42.8B",
    isPositive: true,
  },
]

export function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Cryptocurrencies</CardTitle>
        <CardDescription>Real-time market data for major cryptocurrencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketData.map((crypto) => (
            <div key={crypto.symbol} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {crypto.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium">{crypto.name}</p>
                  <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{crypto.price}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant={crypto.isPositive ? "default" : "destructive"} className="text-xs">
                    {crypto.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{crypto.changeValue}</span>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>Vol: {crypto.volume}</p>
                <p>MCap: {crypto.marketCap}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
