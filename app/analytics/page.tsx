"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  BarChart3,
  Brain,
  Calendar,
  Chrome,
  Download,
  DollarSign,
  Facebook,
  FileText,
  Linkedin,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Calculator,
} from "lucide-react"

// Mock analytics data
const performanceData = [
  { date: "2024-01-01", impressions: 12500, clicks: 340, conversions: 23, spend: 145.5, revenue: 920 },
  { date: "2024-01-02", impressions: 13200, clicks: 380, conversions: 28, spend: 162.3, revenue: 1120 },
  { date: "2024-01-03", impressions: 11800, clicks: 295, conversions: 19, spend: 138.2, revenue: 760 },
  { date: "2024-01-04", impressions: 14500, clicks: 420, conversions: 35, spend: 189.4, revenue: 1400 },
  { date: "2024-01-05", impressions: 13800, clicks: 390, conversions: 31, spend: 175.6, revenue: 1240 },
  { date: "2024-01-06", impressions: 15200, clicks: 450, conversions: 38, spend: 198.7, revenue: 1520 },
  { date: "2024-01-07", impressions: 14100, clicks: 410, conversions: 33, spend: 182.3, revenue: 1320 },
]

const platformData = [
  { platform: "Meta", spend: 1245.8, conversions: 89, revenue: 3560, color: "#1877F2" },
  { platform: "Google", spend: 892.4, conversions: 67, revenue: 2890, color: "#4285F4" },
  { platform: "LinkedIn", spend: 456.2, conversions: 23, revenue: 1150, color: "#0A66C2" },
]

const campaignPerformance = [
  {
    id: "1",
    name: "Summer Sale - Facebook",
    platform: "Meta",
    impressions: 45230,
    clicks: 1205,
    conversions: 23,
    spend: 342.5,
    revenue: 920,
    ctr: 2.66,
    cpc: 0.28,
    roas: 2.68,
    status: "active",
  },
  {
    id: "2",
    name: "Lead Generation - Google",
    platform: "Google",
    impressions: 32100,
    clicks: 892,
    conversions: 31,
    spend: 623.8,
    revenue: 1240,
    ctr: 2.78,
    cpc: 0.7,
    roas: 1.99,
    status: "active",
  },
  {
    id: "3",
    name: "B2B Outreach - LinkedIn",
    platform: "LinkedIn",
    impressions: 8900,
    clicks: 234,
    conversions: 8,
    spend: 156.2,
    revenue: 320,
    ctr: 2.63,
    cpc: 0.67,
    roas: 2.05,
    status: "paused",
  },
]

const chartConfig = {
  impressions: {
    label: "Impressions",
    color: "hsl(var(--chart-1))",
  },
  clicks: {
    label: "Clicks",
    color: "hsl(var(--chart-2))",
  },
  conversions: {
    label: "Conversions",
    color: "hsl(var(--chart-3))",
  },
  spend: {
    label: "Spend",
    color: "hsl(var(--chart-4))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-5))",
  },
  value: {
    label: "Value",
    color: "hsl(var(--chart-2))",
  },
  platform: {
    label: "Platform",
    color: "hsl(var(--chart-1))",
  },
}

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("7d")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [roiInputs, setRoiInputs] = useState({
    revenue: 8770,
    adSpend: 2594.4,
    operatingCosts: 1200,
  })

  // Calculate totals
  const totalSpend = platformData.reduce((sum, platform) => sum + platform.spend, 0)
  const totalRevenue = platformData.reduce((sum, platform) => sum + platform.revenue, 0)
  const totalConversions = platformData.reduce((sum, platform) => sum + platform.conversions, 0)
  const totalImpressions = performanceData.reduce((sum, day) => sum + day.impressions, 0)
  const totalClicks = performanceData.reduce((sum, day) => sum + day.clicks, 0)

  // Calculate metrics
  const overallROAS = totalRevenue / totalSpend
  const avgCTR = (totalClicks / totalImpressions) * 100
  const avgCPC = totalSpend / totalClicks
  const conversionRate = (totalConversions / totalClicks) * 100

  // ROI Calculator
  const calculateROI = () => {
    const { revenue, adSpend, operatingCosts } = roiInputs
    const totalCosts = adSpend + operatingCosts
    const profit = revenue - totalCosts
    const roi = (profit / totalCosts) * 100
    return { profit, roi, totalCosts }
  }

  const { profit, roi, totalCosts } = calculateROI()

  const exportData = (format: "csv" | "pdf") => {
    console.log(`[v0] Exporting analytics data as ${format}`)
    // Export functionality would be implemented here
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Meta":
        return <Facebook className="w-4 h-4" />
      case "Google":
        return <Chrome className="w-4 h-4" />
      case "LinkedIn":
        return <Linkedin className="w-4 h-4" />
      default:
        return <Target className="w-4 h-4" />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar variant="inset">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">AdLejand</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BarChart3 />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Target />
                      <span>Campaigns</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <TrendingUp />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Brain />
                      <span>AI Assistant</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2 flex-1">
              <h1 className="text-lg font-semibold">Analytics & Reports</h1>
            </div>
            <div className="flex items-center gap-2">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => exportData("csv")}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" onClick={() => exportData("pdf")}>
                <FileText className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalSpend.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowUpRight className="w-3 h-3 inline mr-1 text-success" />
                    +12% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowUpRight className="w-3 h-3 inline mr-1 text-success" />
                    +23% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ROAS</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{overallROAS.toFixed(2)}x</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowDownRight className="w-3 h-3 inline mr-1 text-destructive" />
                    -5% from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversions</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalConversions}</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowUpRight className="w-3 h-3 inline mr-1 text-success" />
                    +18% from last period
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="performance" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="platforms">Platforms</TabsTrigger>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                <TabsTrigger value="roi">ROI Calculator</TabsTrigger>
              </TabsList>

              {/* Performance Tab */}
              <TabsContent value="performance" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Performance Over Time */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Over Time</CardTitle>
                      <CardDescription>Daily metrics for the selected period</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-80">
                        <AreaChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="date"
                            tickFormatter={(value) =>
                              new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                            }
                          />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="var(--color-revenue)"
                            fill="var(--color-revenue)"
                            fillOpacity={0.6}
                          />
                          <Area
                            type="monotone"
                            dataKey="spend"
                            stackId="1"
                            stroke="var(--color-spend)"
                            fill="var(--color-spend)"
                            fillOpacity={0.6}
                          />
                        </AreaChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  {/* Conversion Funnel */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Conversion Funnel</CardTitle>
                      <CardDescription>From impressions to conversions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-80">
                        <BarChart
                          data={[
                            { stage: "Impressions", value: totalImpressions, percentage: 100 },
                            { stage: "Clicks", value: totalClicks, percentage: (totalClicks / totalImpressions) * 100 },
                            {
                              stage: "Conversions",
                              value: totalConversions,
                              percentage: (totalConversions / totalImpressions) * 100,
                            },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="stage" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" fill="var(--color-clicks)" />
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Key Performance Metrics</CardTitle>
                    <CardDescription>Summary of your advertising performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">{avgCTR.toFixed(2)}%</div>
                        <div className="text-sm text-muted-foreground">Average CTR</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">${avgCPC.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground">Average CPC</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">{conversionRate.toFixed(2)}%</div>
                        <div className="text-sm text-muted-foreground">Conversion Rate</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          ${(totalRevenue / totalConversions).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">Revenue per Conversion</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Platforms Tab */}
              <TabsContent value="platforms" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Platform Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Spend by Platform</CardTitle>
                      <CardDescription>Distribution of ad spend across platforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-80">
                        <PieChart>
                          <Pie
                            data={platformData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="spend"
                            label={({ platform, percent }) => `${platform} ${(percent * 100).toFixed(0)}%`}
                          >
                            {platformData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  {/* Platform Performance */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Performance</CardTitle>
                      <CardDescription>Revenue vs spend by platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-80">
                        <BarChart data={platformData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="platform" />
                          <YAxis />
                          <Bar dataKey="spend" fill="var(--color-spend)" />
                          <Bar dataKey="revenue" fill="var(--color-revenue)" />
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>

                {/* Platform Comparison Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Comparison</CardTitle>
                    <CardDescription>Detailed metrics for each advertising platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Platform</TableHead>
                          <TableHead>Spend</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Conversions</TableHead>
                          <TableHead>ROAS</TableHead>
                          <TableHead>CPA</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {platformData.map((platform) => (
                          <TableRow key={platform.platform}>
                            <TableCell className="flex items-center gap-2">
                              {getPlatformIcon(platform.platform)}
                              {platform.platform}
                            </TableCell>
                            <TableCell>${platform.spend.toFixed(2)}</TableCell>
                            <TableCell>${platform.revenue.toFixed(2)}</TableCell>
                            <TableCell>{platform.conversions}</TableCell>
                            <TableCell>{(platform.revenue / platform.spend).toFixed(2)}x</TableCell>
                            <TableCell>${(platform.spend / platform.conversions).toFixed(2)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Campaigns Tab */}
              <TabsContent value="campaigns" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Detailed performance metrics for all campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Campaign</TableHead>
                          <TableHead>Platform</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Impressions</TableHead>
                          <TableHead>Clicks</TableHead>
                          <TableHead>CTR</TableHead>
                          <TableHead>Conversions</TableHead>
                          <TableHead>Spend</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>ROAS</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {campaignPerformance.map((campaign) => (
                          <TableRow key={campaign.id}>
                            <TableCell className="font-medium">{campaign.name}</TableCell>
                            <TableCell className="flex items-center gap-2">
                              {getPlatformIcon(campaign.platform)}
                              {campaign.platform}
                            </TableCell>
                            <TableCell>
                              <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                                {campaign.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{campaign.impressions.toLocaleString()}</TableCell>
                            <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                            <TableCell>{campaign.ctr}%</TableCell>
                            <TableCell>{campaign.conversions}</TableCell>
                            <TableCell>${campaign.spend.toFixed(2)}</TableCell>
                            <TableCell>${campaign.revenue.toFixed(2)}</TableCell>
                            <TableCell>
                              <span className={campaign.roas >= 2 ? "text-success" : "text-warning"}>
                                {campaign.roas.toFixed(2)}x
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ROI Calculator Tab */}
              <TabsContent value="roi" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* ROI Calculator */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-primary" />
                        ROI Calculator
                      </CardTitle>
                      <CardDescription>Calculate your return on investment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="revenue">Total Revenue ($)</Label>
                        <Input
                          id="revenue"
                          type="number"
                          value={roiInputs.revenue}
                          onChange={(e) => setRoiInputs((prev) => ({ ...prev, revenue: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adSpend">Ad Spend ($)</Label>
                        <Input
                          id="adSpend"
                          type="number"
                          value={roiInputs.adSpend}
                          onChange={(e) => setRoiInputs((prev) => ({ ...prev, adSpend: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="operatingCosts">Operating Costs ($)</Label>
                        <Input
                          id="operatingCosts"
                          type="number"
                          value={roiInputs.operatingCosts}
                          onChange={(e) =>
                            setRoiInputs((prev) => ({ ...prev, operatingCosts: Number(e.target.value) }))
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* ROI Results */}
                  <Card>
                    <CardHeader>
                      <CardTitle>ROI Results</CardTitle>
                      <CardDescription>Your calculated return on investment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-primary">${profit.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">Total Profit</div>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                          <div className={`text-2xl font-bold ${roi >= 0 ? "text-success" : "text-destructive"}`}>
                            {roi.toFixed(1)}%
                          </div>
                          <div className="text-sm text-muted-foreground">ROI</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Revenue:</span>
                          <span>${roiInputs.revenue.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Costs:</span>
                          <span>${totalCosts.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium">
                          <span>Net Profit:</span>
                          <span className={profit >= 0 ? "text-success" : "text-destructive"}>
                            ${profit.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>ROI Formula:</strong> (Revenue - Total Costs) / Total Costs × 100
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          A positive ROI indicates profitable campaigns. Aim for ROI above 100% for sustainable growth.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
