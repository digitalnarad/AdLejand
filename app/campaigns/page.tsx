"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import {
  BarChart3,
  Brain,
  Chrome,
  Copy,
  Edit,
  Eye,
  Facebook,
  Linkedin,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  Search,
  Settings,
  Target,
  TrendingUp,
  Trash2,
  Users,
  Zap,
  Clock,
  DollarSign,
} from "lucide-react"

// Mock campaigns data
const mockCampaigns = [
  {
    id: "1",
    name: "Summer Sale - Facebook",
    platform: "Meta",
    status: "active",
    objective: "conversions",
    budget: 500,
    spent: 342.5,
    impressions: 45230,
    clicks: 1205,
    conversions: 23,
    ctr: 2.66,
    cpc: 0.28,
    roas: 4.2,
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    icon: <Facebook className="w-4 h-4" />,
    color: "bg-blue-500",
  },
  {
    id: "2",
    name: "Lead Generation - Google",
    platform: "Google",
    status: "active",
    objective: "leads",
    budget: 800,
    spent: 623.8,
    impressions: 32100,
    clicks: 892,
    conversions: 31,
    ctr: 2.78,
    cpc: 0.7,
    roas: 3.8,
    startDate: "2024-01-10",
    endDate: "2024-02-10",
    icon: <Chrome className="w-4 h-4" />,
    color: "bg-green-500",
  },
  {
    id: "3",
    name: "B2B Outreach - LinkedIn",
    platform: "LinkedIn",
    status: "paused",
    objective: "awareness",
    budget: 300,
    spent: 156.2,
    impressions: 8900,
    clicks: 234,
    conversions: 8,
    ctr: 2.63,
    cpc: 0.67,
    roas: 2.9,
    startDate: "2024-01-20",
    endDate: "2024-02-20",
    icon: <Linkedin className="w-4 h-4" />,
    color: "bg-blue-600",
  },
  {
    id: "4",
    name: "Holiday Promotion",
    platform: "Meta",
    status: "completed",
    objective: "sales",
    budget: 1200,
    spent: 1200,
    impressions: 89500,
    clicks: 2340,
    conversions: 67,
    ctr: 2.61,
    cpc: 0.51,
    roas: 5.2,
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    icon: <Facebook className="w-4 h-4" />,
    color: "bg-blue-500",
  },
]

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [platformFilter, setPlatformFilter] = useState("all")

  const filteredCampaigns = mockCampaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter
    const matchesPlatform = platformFilter === "all" || campaign.platform === platformFilter
    return matchesSearch && matchesStatus && matchesPlatform
  })

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
      case "completed":
        return <Clock className="w-3 h-3 text-muted-foreground" />
      default:
        return <Clock className="w-3 h-3 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "paused":
        return "secondary"
      case "completed":
        return "outline"
      default:
        return "secondary"
    }
  }

  const totalSpent = filteredCampaigns.reduce((sum, campaign) => sum + campaign.spent, 0)
  const totalConversions = filteredCampaigns.reduce((sum, campaign) => sum + campaign.conversions, 0)
  const activeCampaigns = filteredCampaigns.filter((c) => c.status === "active").length

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
                    <SidebarMenuButton isActive>
                      <Target />
                      <span>Campaigns</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
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
              <h1 className="text-lg font-semibold">Campaigns</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild>
                <a href="/campaigns/create">
                  <Plus className="w-4 h-4 mr-2" />
                  New Campaign
                </a>
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{filteredCampaigns.length}</div>
                  <p className="text-xs text-muted-foreground">{activeCampaigns} active</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalSpent.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">Across all campaigns</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalConversions}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search campaigns..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={platformFilter} onValueChange={setPlatformFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="Meta">Meta</SelectItem>
                      <SelectItem value="Google">Google</SelectItem>
                      <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Campaigns List */}
            <div className="space-y-4">
              {filteredCampaigns.map((campaign) => (
                <Card key={campaign.id} className="border-2 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
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
                            <Badge variant={getStatusColor(campaign.status) as any}>{campaign.status}</Badge>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground capitalize">{campaign.objective}</span>
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
                          <DropdownMenuItem onClick={() => handleCampaignAction(campaign.id, "edit")}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Campaign
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
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleCampaignAction(campaign.id, "delete")}
                            className="text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Campaign
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Budget Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Budget Used</span>
                        <span>
                          ${campaign.spent.toFixed(2)} / ${campaign.budget}
                        </span>
                      </div>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
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
                        <p className="text-muted-foreground">CPC</p>
                        <p className="font-semibold">${campaign.cpc}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROAS</p>
                        <p className="font-semibold text-success">{campaign.roas}x</p>
                      </div>
                    </div>

                    {/* Campaign Dates */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t text-sm text-muted-foreground">
                      <span>
                        {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                        {new Date(campaign.endDate).toLocaleDateString()}
                      </span>
                      <span>{campaign.platform}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredCampaigns.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Target className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No campaigns found</h3>
                    <p className="text-muted-foreground mb-4">
                      {searchQuery || statusFilter !== "all" || platformFilter !== "all"
                        ? "Try adjusting your filters"
                        : "Create your first campaign to get started"}
                    </p>
                    <Button asChild>
                      <a href="/campaigns/create">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Campaign
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
