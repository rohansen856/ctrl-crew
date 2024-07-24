"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  stats: {
    label: "Stats",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

interface RadarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  chartData: {
    domain: string
    stats: number
  }[]
}

export function RadialChart({ ...props }: RadarChartProps) {
  return (
    <Card className=" bg-secondary" {...props}>
      <CardHeader className="items-center pb-4">
        <CardTitle className="capitalize">{props.name}</CardTitle>
        <CardDescription>
          Main stronghold in{" "}
          <b>
            {props.chartData.toSorted((a, b) => b.stats - a.stats)[0].domain}
          </b>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect mx-auto mb-4 max-h-[250px] overflow-visible rounded-xl border bg-background"
        >
          <RadarChart data={props.chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="domain" />
            <PolarGrid />
            <Radar
              dataKey="stats"
              fill="var(--color-stats)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Also Works in{" "}
          <b>
            {props.chartData.toSorted((a, b) => b.stats - a.stats)[1].domain} +{" "}
            {props.chartData.toSorted((a, b) => b.stats - a.stats)[2].domain}{" "}
          </b>
          <TrendingUp className="size-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
