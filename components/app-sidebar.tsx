import { BarChart3, Bitcoin, TrendingUp, LineChart, Activity, Zap, Globe, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Overview",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Price Analysis",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "On-Chain Metrics",
    url: "#",
    icon: Activity,
  },
  {
    title: "Mining Data",
    url: "#",
    icon: Zap,
  },
  {
    title: "Market Data",
    url: "#",
    icon: LineChart,
  },
  {
    title: "Network Stats",
    url: "#",
    icon: Globe,
  },
]

const tools = [
  {
    title: "Price Alerts",
    url: "#",
    icon: Bitcoin,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <Bitcoin className="h-8 w-8 text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">Bitcoin Analytics</h2>
            <p className="text-xs text-muted-foreground">BTC Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Bitcoin Data</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.title === "Overview"}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
            <p className="text-xs font-medium text-orange-800">Bitcoin Network</p>
            <p className="text-xs text-orange-600">Block Height: 820,145</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
