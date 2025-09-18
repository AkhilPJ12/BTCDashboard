import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tradingPairs = [
  {
    pair: "BTC/USD",
    price: "$43,256.78",
    change: "+2.34%",
    volume: "$28.5B",
    exchange: "Binance",
    isPositive: true,
  },
  {
    pair: "BTC/EUR",
    price: "€39,847.23",
    change: "+1.87%",
    volume: "€8.2B",
    exchange: "Kraken",
    isPositive: true,
  },
  {
    pair: "BTC/GBP",
    price: "£34,123.45",
    change: "+2.12%",
    volume: "£2.1B",
    exchange: "Coinbase",
    isPositive: true,
  },
  {
    pair: "BTC/JPY",
    price: "¥6,234,567",
    change: "+1.95%",
    volume: "¥1.8T",
    exchange: "bitFlyer",
    isPositive: true,
  },
  {
    pair: "BTC/USDT",
    price: "$43,245.12",
    change: "+2.28%",
    volume: "$45.2B",
    exchange: "Binance",
    isPositive: true,
  },
]

export function BtcTradingPairs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin Trading Pairs</CardTitle>
        <CardDescription>BTC prices across major exchanges and currencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tradingPairs.map((pair) => (
            <div
              key={pair.pair}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">₿</span>
                </div>
                <div>
                  <p className="font-semibold">{pair.pair}</p>
                  <p className="text-sm text-muted-foreground">{pair.exchange}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{pair.price}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant={pair.isPositive ? "default" : "destructive"} className="text-xs">
                    {pair.change}
                  </Badge>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p className="font-medium">Volume</p>
                <p>{pair.volume}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
