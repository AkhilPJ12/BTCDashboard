import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

const optionsData = [
  {
    strike: 45000,
    expiry: "Jan 31",
    putVolume: 1250,
    callVolume: 890,
    putOI: 3400,
    callOI: 2100,
    gamma: 0.85,
    type: "resistance",
  },
  {
    strike: 44000,
    expiry: "Jan 31",
    putVolume: 780,
    callVolume: 1450,
    putOI: 2200,
    callOI: 4100,
    gamma: 0.72,
    type: "neutral",
  },
  {
    strike: 42000,
    expiry: "Jan 31",
    putVolume: 2100,
    callVolume: 650,
    putOI: 5600,
    callOI: 1800,
    gamma: 0.91,
    type: "support",
  },
  {
    strike: 40000,
    expiry: "Feb 7",
    putVolume: 1890,
    callVolume: 420,
    putOI: 4200,
    callOI: 1200,
    gamma: 0.68,
    type: "support",
  },
]

const putCallRatio = 1.34
const totalGamma = 2.8
const maxPain = 43200

export function OptionsFlow() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-indigo-600" />
          Options Flow Analysis
        </CardTitle>
        <CardDescription>Bitcoin options market data and gamma exposure</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">Put/Call Ratio</p>
            <p className="text-xl font-bold text-red-600">{putCallRatio}</p>
            <p className="text-xs text-muted-foreground">Bearish sentiment</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">Total Gamma</p>
            <p className="text-xl font-bold text-purple-600">{totalGamma}B</p>
            <p className="text-xs text-muted-foreground">Exposure level</p>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">Max Pain</p>
            <p className="text-xl font-bold text-orange-600">${maxPain.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Option expiry target</p>
          </div>
        </div>

        <div className="space-y-4">
          {optionsData.map((option, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono">
                    ${option.strike.toLocaleString()}
                  </Badge>
                  <Badge variant="secondary">{option.expiry}</Badge>
                  <Badge
                    variant={
                      option.type === "support" ? "default" : option.type === "resistance" ? "destructive" : "secondary"
                    }
                  >
                    {option.type}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Gamma: {option.gamma}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-red-600">Puts</span>
                    <span>
                      Vol: {option.putVolume} | OI: {option.putOI}
                    </span>
                  </div>
                  <Progress value={(option.putVolume / (option.putVolume + option.callVolume)) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-green-600">Calls</span>
                    <span>
                      Vol: {option.callVolume} | OI: {option.callOI}
                    </span>
                  </div>
                  <Progress
                    value={(option.callVolume / (option.putVolume + option.callVolume)) * 100}
                    className="h-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
