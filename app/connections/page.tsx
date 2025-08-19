"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  BarChart3,
  Brain,
  CheckCircle,
  AlertCircle,
  Settings,
  Target,
  TrendingUp,
  Zap,
  Facebook,
  Chrome,
  Linkedin,
  Shield,
  Eye,
  Unlink,
  RefreshCw,
  ExternalLink,
  Activity,
} from "lucide-react"

type ConnectionStatus = "connected" | "disconnected" | "error" | "connecting"

interface PlatformConnection {
  id: string
  name: string
  icon: React.ReactNode
  status: ConnectionStatus
  description: string
  permissions: string[]
  color: string
  connectedDate?: string
  lastSync?: string
  accountInfo?: {
    name: string
    id: string
    currency: string
  }
  metrics?: {
    activeCampaigns: number
    monthlySpend: number
    impressions: number
  }
}

export default function ConnectionsPage() {
  const [platforms, setPlatforms] = useState<PlatformConnection[]>([
    {
      id: "meta",
      name: "Meta Ads",
      icon: <Facebook className="w-6 h-6" />,
      status: "connected",
      description: "Facebook and Instagram advertising accounts",
      permissions: ["Read ad account data", "Create and manage campaigns", "Access insights and reporting"],
      color: "bg-blue-500",
      connectedDate: "2024-01-15",
      lastSync: "2 minutes ago",
      accountInfo: {
        name: "Your Business Account",
        id: "123456789",
        currency: "USD",
      },
      metrics: {
        activeCampaigns: 3,
        monthlySpend: 1250,
        impressions: 45230,
      },
    },
    {
      id: "google",
      name: "Google Ads",
      icon: <Chrome className="w-6 h-6" />,
      status: "connected",
      description: "Google Ads and YouTube advertising accounts",
      permissions: ["Read ad account data", "Create and manage campaigns", "Access performance metrics"],
      color: "bg-green-500",
      connectedDate: "2024-01-20",
      lastSync: "5 minutes ago",
      accountInfo: {
        name: "Google Ads Account",
        id: "987-654-3210",
        currency: "USD",
      },
      metrics: {
        activeCampaigns: 2,
        monthlySpend: 890,
        impressions: 32100,
      },
    },
    {
      id: "linkedin",
      name: "LinkedIn Ads",
      icon: <Linkedin className="w-6 h-6" />,
      status: "disconnected",
      description: "LinkedIn advertising for B2B campaigns",
      permissions: ["Read ad account data", "Create sponsored content", "Access campaign analytics"],
      color: "bg-blue-600",
    },
  ])

  const [autoSync, setAutoSync] = useState(true)

  const handleConnect = (platformId: string) => {
    setPlatforms((prev) =>
      prev.map((platform) =>
        platform.id === platformId ? { ...platform, status: "connecting" as ConnectionStatus } : platform,
      ),
    )

    // Simulate connection process
    setTimeout(() => {
      setPlatforms((prev) =>
        prev.map((platform) =>
          platform.id === platformId
            ? {
                ...platform,
                status: "connected" as ConnectionStatus,
                connectedDate: new Date().toISOString().split("T")[0],
                lastSync: "Just now",
                accountInfo: {
                  name: `${platform.name} Account`,
                  id: "NEW-ACCOUNT-ID",
                  currency: "USD",
                },
                metrics: {
                  activeCampaigns: 0,
                  monthlySpend: 0,
                  impressions: 0,
                },
              }
            : platform,
        ),
      )
    }, 2000)
  }

  const handleDisconnect = (platformId: string) => {
    setPlatforms((prev) =>
      prev.map((platform) =>
        platform.id === platformId
          ? {
              ...platform,
              status: "disconnected" as ConnectionStatus,
              connectedDate: undefined,
              lastSync: undefined,
              accountInfo: undefined,
              metrics: undefined,
            }
          : platform,
      ),
    )
  }

  const handleRefresh = (platformId: string) => {
    setPlatforms((prev) =>
      prev.map((platform) =>
        platform.id === platformId && platform.status === "connected"
          ? { ...platform, lastSync: "Just now" }
          : platform,
      ),
    )
  }

  const getStatusIcon = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="w-5 h-5 text-success" />
      case "connecting":
        return <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-destructive" />
      default:
        return <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
    }
  }

  const getStatusText = (status: ConnectionStatus) => {
    switch (status) {
      case "connected":
        return "Connected"
      case "connecting":
        return "Connecting..."
      case "error":
        return "Connection Failed"
      default:
        return "Not Connected"
    }
  }

  const connectedPlatforms = platforms.filter((p) => p.status === "connected")
  const totalSpend = connectedPlatforms.reduce((sum, p) => sum + (p.metrics?.monthlySpend || 0), 0)
  const totalCampaigns = connectedPlatforms.reduce((sum, p) => sum + (p.metrics?.activeCampaigns || 0), 0)

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
                    <SidebarMenuButton asChild>
                      <a href="/dashboard" className="hover:bg-primary/10 transition-colors">
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
                  {platforms.map((platform) => (
                    <SidebarMenuItem key={platform.id}>
                      <SidebarMenuButton isActive={platform.status === "connected"}>
                        {platform.icon}
                        <span>{platform.name.split(" ")[0]}</span>
                        {platform.status === "connected" && (
                          <Badge variant="secondary" className="ml-auto">
                            {platform.metrics?.activeCampaigns || 0}
                          </Badge>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive asChild>
                  <a href="/connections">
                    <Settings />
                    <span>Connections</span>
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
              <h1 className="text-lg font-semibold">Platform Connections</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="w-4 h-4" />
                Auto-sync
                <Switch checked={autoSync} onCheckedChange={setAutoSync} />
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Connected Platforms</CardTitle>
                  <CheckCircle className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{connectedPlatforms.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {platforms.length - connectedPlatforms.length} available to connect
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Monthly Spend</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalSpend.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Across all platforms</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalCampaigns}</div>
                  <p className="text-xs text-muted-foreground">Running campaigns</p>
                </CardContent>
              </Card>
            </div>

            {/* Platform Connections */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Advertising Platforms</h2>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh All
                </Button>
              </div>

              {platforms.map((platform) => (
                <Card key={platform.id} className="border-2 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center text-white`}
                        >
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{platform.name}</h3>
                            {getStatusIcon(platform.status)}
                            <Badge variant={platform.status === "connected" ? "default" : "secondary"}>
                              {getStatusText(platform.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>

                          {platform.status === "connected" && platform.accountInfo && (
                            <div className="bg-muted/50 rounded-lg p-3 mb-3">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Account</p>
                                  <p className="font-medium">{platform.accountInfo.name}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Account ID</p>
                                  <p className="font-mono text-xs">{platform.accountInfo.id}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Currency</p>
                                  <p className="font-medium">{platform.accountInfo.currency}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Last Sync</p>
                                  <p className="font-medium">{platform.lastSync}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {platform.status === "connected" && platform.metrics && (
                            <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                              <div>
                                <p className="text-muted-foreground">Active Campaigns</p>
                                <p className="font-semibold">{platform.metrics.activeCampaigns}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Monthly Spend</p>
                                <p className="font-semibold">${platform.metrics.monthlySpend.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Impressions</p>
                                <p className="font-semibold">{platform.metrics.impressions.toLocaleString()}</p>
                              </div>
                            </div>
                          )}

                          {/* Permissions */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Shield className="w-3 h-3" />
                              <span>Permissions:</span>
                            </div>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {platform.permissions.map((permission, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <Eye className="w-3 h-3" />
                                  {permission}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {platform.status === "connected" ? (
                          <>
                            <Button size="sm" variant="outline" onClick={() => handleRefresh(platform.id)}>
                              <RefreshCw className="w-3 h-3 mr-1" />
                              Refresh
                            </Button>
                            <Button size="sm" variant="outline">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Manage
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button size="sm" variant="destructive">
                                  <Unlink className="w-3 h-3 mr-1" />
                                  Disconnect
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Disconnect {platform.name}?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will disconnect your {platform.name} account and pause all active campaigns on
                                    this platform. You can reconnect at any time.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDisconnect(platform.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Disconnect
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </>
                        ) : (
                          <Button
                            onClick={() => handleConnect(platform.id)}
                            disabled={platform.status === "connecting"}
                          >
                            {platform.status === "connecting" ? "Connecting..." : "Connect"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
