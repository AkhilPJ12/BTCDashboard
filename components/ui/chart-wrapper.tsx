import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from "recharts"
import { getXAxisInterval } from "@/utils/chart-utils"
import { CHART_MARGINS, CHART_COLORS } from "@/constants/chart-config"
import type { PriceData, TechnicalIndicator } from "@/types"

interface ChartWrapperProps {
  data: PriceData[]
  height?: number
  showGrid?: boolean
  selectedIndicators?: string[]
  technicalIndicators?: TechnicalIndicator[]
  margin?: typeof CHART_MARGINS.default
}

export function ChartWrapper({
  data,
  height = 400,
  showGrid = true,
  selectedIndicators = [],
  technicalIndicators = [],
  margin = CHART_MARGINS.default,
}: ChartWrapperProps) {
  return (
    <div className={`h-[${height}px] w-full`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={margin}>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} vertical={false} />
          )}
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            tickMargin={8}
            interval={getXAxisInterval(data.length)}
            height={25}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13, fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            domain={["dataMin - 500", "dataMax + 500"]}
            width={60}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background border rounded-lg p-4 shadow-lg">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
                    {payload.map((entry, index) => (
                      <p key={index} className="text-xl font-bold" style={{ color: entry.color }}>
                        {entry.name}: ${entry.value?.toLocaleString()}
                      </p>
                    ))}
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={CHART_COLORS.primary}
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              fill: CHART_COLORS.primary,
              strokeWidth: 3,
              stroke: "#fff",
            }}
          />
          {selectedIndicators.map((indicatorId) => {
            const indicator = technicalIndicators.find((ind) => ind.id === indicatorId)
            return (
              <Line
                key={indicatorId}
                type="monotone"
                dataKey={indicatorId}
                stroke={indicator?.color}
                strokeWidth={2}
                dot={false}
                strokeDasharray={indicatorId.includes("bb") ? "5 5" : "0"}
              />
            )
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
