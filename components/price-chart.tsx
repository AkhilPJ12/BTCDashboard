import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PriceChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Bitcoin Price Chart</CardTitle>
            <CardDescription>BTC/USD - Last 24 hours</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              1H
            </Button>
            <Button variant="outline" size="sm">
              24H
            </Button>
            <Button variant="default" size="sm">
              7D
            </Button>
            <Button variant="outline" size="sm">
              30D
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-700">Interactive Chart</p>
            <p className="text-sm text-gray-500">Chart visualization would be rendered here</p>
            <p className="text-xs text-gray-400 mt-2">Integrate with Chart.js, Recharts, or similar library</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
