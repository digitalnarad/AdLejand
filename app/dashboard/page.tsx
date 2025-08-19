"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { AIAssistant } from "@/components/ai-assistant"
import {
  BarChart3,
  Bell,
  Brain,
  Copy,
  DollarSign,
  Eye,
  Facebook,
  Chrome,
  Linkedin,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

// Mock data for campaigns
const mockCampaigns = [
  {
    id: "1",
    name: "Summer Sale - Facebook",
    platform: "Meta",
    status: "active",
    budget: 500,
    spent: 342.5,
    impressions: 45230,
    clicks: 1205,
    conversions: 23,
    ctr: 2.66,
    cpc: 0.28,
    roas: 4.2,
    icon: <Facebook className="w-4 h-4" />,
    color: "bg-blue-500",
  },
  {
    id: "2",
    name: "Lead Generation - Google",
    platform: "Google",
    status: "active",
    budget: 800,
    spent: 623.8,
    impressions: 32100,
    clicks: 892,
    conversions: 31,
    ctr: 2.78,
    cpc: 0.7,
    roas: 3.8,
    icon: <Chrome className="w-4 h-4" />,
    color: "bg-green-500",
  },
  {
    id: "3",
    name: "B2B Outreach - LinkedIn",
    platform: "LinkedIn",
    status: "paused",
    budget: 300,
    spent: 156.2,
    impressions: 8900,
    clicks: 234,
    conversions: 8,
    ctr: 2.63,
    cpc: 0.67,
    roas: 2.9,
    icon: <Linkedin className="w-4 h-4" />,
    color: "bg-blue-600",
  },
]

const notifications = [
  {
    id: "1",
    title: "Campaign Budget Alert",
    description: "Summer Sale campaign will exhaust budget in 2 days",
    time: "5 minutes ago",
    type: "warning",
  },
  {
    id: "2",
    title: "Optimization Applied",
    description: "AI increased bid for high-converting keywords",
    time: "1 hour ago",
    type: "success",
  },
  {
    id: "3",
    title: "New Conversion",
    description: "Lead Generation campaign generated a new conversion",
    time: "2 hours ago",
    type: "info",
  },
]

export default function DashboardPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null)

  const totalSpent = mockCampaigns.reduce((sum, campaign) => sum + campaign.spent, 0)
  const totalConversions = mockCampaigns.reduce((sum, campaign) => sum + campaign.conversions, 0)
  const avgRoas = mockCampaigns.reduce((sum, campaign) => sum + campaign.roas, 0) / mockCampaigns.length
  const activeCampaigns = mockCampaigns.filter((c) => c.status === "active").length

  const handleCampaignAction = (campaignId: string, action: string) => {
    console.log(`[v0] Campaign action: ${action} for campaign ${campaignId}`)
    // Handle campaign actions here
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Play className="w-3 h-3 text-success" />
      case "paused":
        return <Pause className="w-3 h-3 text-warning" />
      default:
        return <Clock className="w-3 h-3 text-muted-foreground" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-destructive"
      case "medium":
        return "text-warning"
      default:
        return "text-muted-foreground"
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
                    <SidebarMenuButton isActive asChild>
                      <a href="/dashboard">
                        <BarChart3 />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/campaigns" className="hover:bg-primary/10 transition-colors">
                        <Target />
                        <span>Campaigns</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/analytics" className="hover:bg-primary/10 transition-colors">
                        <TrendingUp />
                        <span>Analytics</span>
                      </a>
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
            <SidebarGroup>
              <SidebarGroupLabel>Platforms</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Facebook />
                      <span>Meta Ads</span>
                      <Badge variant="secondary" className="ml-auto">
                        2
                      </Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Chrome />
                      <span>Google Ads</span>
                      <Badge variant="secondary" className="ml-auto">
                        1
                      </Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Linkedin />
                      <span>LinkedIn Ads</span>
                      <Badge variant="secondary" className="ml-auto">
                        1
                      </Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="hover:bg-primary/10 transition-colors">
                    <Settings />
                    <span>Settings</span>
                  </a>
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
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                asChild
              >
                <a href="/campaigns/create">
                  <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  New Campaign
                </a>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                  >
                    <Bell className="w-4 h-4" />
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs animate-pulse">
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-2 hover:bg-muted rounded-md">
                        <div className="flex items-start gap-2">
                          {notification.type === "warning" && <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />}
                          {notification.type === "success" && <CheckCircle className="w-4 h-4 text-success mt-0.5" />}
                          {notification.type === "info" && <Bell className="w-4 h-4 text-primary mt-0.5" />}
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalSpent.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowUpRight className="w-3 h-3 inline mr-1 text-success" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{activeCampaigns}</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowUpRight className="w-3 h-3 inline mr-1 text-success" />
                    +1 this week
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
                    +23% from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg ROAS</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{avgRoas.toFixed(1)}x</div>
                  <p className="text-xs text-muted-foreground">
                    <ArrowDownRight className="w-3 h-3 inline mr-1 text-destructive" />
                    -2% from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Campaign Performance */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Campaign Performance
                    </CardTitle>
                    <CardDescription>Monitor your active campaigns and their key metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockCampaigns.map((campaign) => (
                      <Card key={campaign.id} className="border-2 hover:border-primary/20 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 ${campaign.color} rounded-lg flex items-center justify-center text-white`}
                              >
                                {campaign.icon}
                              </div>
                              <div>
                                <h3 className="font-semibold">{campaign.name}</h3>
                                <div className="flex items-center gap-2">
                                  {getStatusIcon(campaign.status)}
                                  <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                                    {campaign.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleCampaignAction(campaign.id, "view")}>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleCampaignAction(campaign.id, "duplicate")}>
                                  <Copy className="w-4 h-4 mr-2" />
                                  Duplicate
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleCampaignAction(campaign.id, campaign.status === "active" ? "pause" : "resume")
                                  }
                                >
                                  {campaign.status === "active" ? (
                                    <>
                                      <Pause className="w-4 h-4 mr-2" />
                                      Pause Campaign
                                    </>
                                  ) : (
                                    <>
                                      <Play className="w-4 h-4 mr-2" />
                                      Resume Campaign
                                    </>
                                  )}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          {/* Budget Progress */}
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Budget Used</span>
                              <span>
                                ${campaign.spent.toFixed(2)} / ${campaign.budget}
                              </span>
                            </div>
                            <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                          </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Impressions</p>
                              <p className="font-semibold">{campaign.impressions.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Clicks</p>
                              <p className="font-semibold">{campaign.clicks.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">CTR</p>
                              <p className="font-semibold">{campaign.ctr}%</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">ROAS</p>
                              <p className="font-semibold text-success">{campaign.roas}x</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* AI Insights Panel */}
              <div>
                <AIAssistant />
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
