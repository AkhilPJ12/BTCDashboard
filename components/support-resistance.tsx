import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowUp, ArrowDown } from "lucide-react"

const levels = [
  {
    type: "resistance",
    price: 45200,
    strength: "Strong",
    touches: 8,
    distance: 1944,
    probability: 85,
  },
  {
    type: "resistance",
    price: 44100,
    strength: "Medium",
    touches: 5,
    distance: 844,
    probability: 65,
  },
  {
    type: "support",
    price: 42800,
    strength: "Strong",
    touches: 12,
    distance: -456,
    probability: 90,
  },
  {
    type: "support",
    price: 41500,
    strength: "Weak",
    touches: 3,
    distance: -1756,
    probability: 45,
  },
]

export function SupportResistance() {
  const currentPrice = 43256

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-purple-600" />
          Support & Resistance
        </CardTitle>
        <CardDescription>Key price levels based on historical data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="text-2xl font-bold text-orange-600">${currentPrice.toLocaleString()}</p>
          </div>
          {levels.map((level, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg ${
                level.type === "resistance" ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {level.type === "resistance" ? (
                    <ArrowUp className="h-4 w-4 text-red-600" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-green-600" />
                  )}
                  <span className="font-medium capitalize">{level.type}</span>
                  <Badge
                    variant={
                      level.strength === "Strong" ? "default" : level.strength === "Medium" ? "secondary" : "outline"
                    }
                  >
                    {level.strength}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="font-bold">${level.price.toLocaleString()}</p>
                  <p className={`text-xs ${level.distance > 0 ? "text-red-600" : "text-green-600"}`}>
                    {level.distance > 0 ? "+" : ""}
                    {level.distance} ({((Math.abs(level.distance) / currentPrice) * 100).toFixed(1)}%)
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{level.touches} touches</span>
                <span>{level.probability}% hold probability</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
