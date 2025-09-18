import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

const transactions = [
  {
    id: "1",
    type: "buy",
    asset: "BTC",
    amount: "0.5",
    price: "$43,256.78",
    total: "$21,628.39",
    time: "2 minutes ago",
    status: "completed",
  },
  {
    id: "2",
    type: "sell",
    asset: "ETH",
    amount: "2.5",
    price: "$2,678.90",
    total: "$6,697.25",
    time: "1 hour ago",
    status: "completed",
  },
  {
    id: "3",
    type: "buy",
    asset: "ADA",
    amount: "1000",
    price: "$0.4567",
    total: "$456.70",
    time: "3 hours ago",
    status: "pending",
  },
  {
    id: "4",
    type: "sell",
    asset: "SOL",
    amount: "5",
    price: "$98.76",
    total: "$493.80",
    time: "1 day ago",
    status: "completed",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest trading activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === "buy" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {transaction.type === "buy" ? (
                    <ArrowDownIcon className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowUpIcon className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    {transaction.type === "buy" ? "Bought" : "Sold"} {transaction.asset}
                  </p>
                  <p className="text-sm text-muted-foreground">{transaction.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{transaction.total}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {transaction.amount} @ {transaction.price}
                  </span>
                  <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
