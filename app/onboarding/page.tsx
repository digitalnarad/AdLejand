"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Zap,
  Facebook,
  Chrome,
  Linkedin,
  Shield,
  Eye,
  Settings,
  Target,
  BarChart3,
} from "lucide-react"

type ConnectionStatus = "disconnected" | "connecting" | "connected" | "error"

interface PlatformConnection {
  id: string
  name: string
  icon: React.ReactNode
  status: ConnectionStatus
  description: string
  permissions: string[]
  color: string
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    businessType: "",
    description: "",
    website: "",
    targetAudience: "",
  })

  const [platforms, setPlatforms] = useState<PlatformConnection[]>([
    {
      id: "meta",
      name: "Meta Ads",
      icon: <Facebook className="w-6 h-6" />,
      status: "disconnected",
      description: "Connect Facebook and Instagram advertising accounts",
      permissions: ["Read ad account data", "Create and manage campaigns", "Access insights and reporting"],
      color: "bg-blue-500",
    },
    {
      id: "google",
      name: "Google Ads",
      icon: <Chrome className="w-6 h-6" />,
      status: "disconnected",
      description: "Connect Google Ads and YouTube advertising accounts",
      permissions: ["Read ad account data", "Create and manage campaigns", "Access performance metrics"],
      color: "bg-green-500",
    },
    {
      id: "linkedin",
      name: "LinkedIn Ads",
      icon: <Linkedin className="w-6 h-6" />,
      status: "disconnected",
      description: "Connect LinkedIn advertising for B2B campaigns",
      permissions: ["Read ad account data", "Create sponsored content", "Access campaign analytics"],
      color: "bg-blue-600",
    },
  ])

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handlePlatformConnect = (platformId: string) => {
    setPlatforms((prev) =>
      prev.map((platform) =>
        platform.id === platformId ? { ...platform, status: "connecting" as ConnectionStatus } : platform,
      ),
    )

    // Simulate connection process
    setTimeout(() => {
      setPlatforms((prev) =>
        prev.map((platform) =>
          platform.id === platformId ? { ...platform, status: "connected" as ConnectionStatus } : platform,
        ),
      )
    }, 2000)
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

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return businessInfo.businessName && businessInfo.businessType && businessInfo.description
      case 2:
        return platforms.some((p) => p.status === "connected")
      case 3:
        return true
      default:
        return false
    }
  }

  const connectedPlatforms = platforms.filter((p) => p.status === "connected").length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AdLejand</span>
          </div>
          <Badge variant="secondary">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">Get Started with AdLejand</h1>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Tell Us About Your Business
              </CardTitle>
              <CardDescription>
                Help our AI understand your business so we can create the most effective campaigns for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    placeholder="Enter your business name"
                    value={businessInfo.businessName}
                    onChange={(e) => setBusinessInfo((prev) => ({ ...prev, businessName: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select
                    value={businessInfo.businessType}
                    onValueChange={(value) => setBusinessInfo((prev) => ({ ...prev, businessType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="local">Local Business</SelectItem>
                      <SelectItem value="agency">Marketing Agency</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what your business does, your products/services, and what makes you unique..."
                  value={businessInfo.description}
                  onChange={(e) => setBusinessInfo((prev) => ({ ...prev, description: e.target.value }))}
                  className="min-h-24"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    placeholder="https://yourwebsite.com"
                    value={businessInfo.website}
                    onChange={(e) => setBusinessInfo((prev) => ({ ...prev, website: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience (Optional)</Label>
                  <Input
                    id="targetAudience"
                    placeholder="e.g., Small business owners, 25-45 years old"
                    value={businessInfo.targetAudience}
                    onChange={(e) => setBusinessInfo((prev) => ({ ...prev, targetAudience: e.target.value }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Connect Your Ad Accounts
              </CardTitle>
              <CardDescription>
                Connect at least one advertising platform to start creating AI-powered campaigns. You can add more
                platforms later.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {platforms.map((platform, index) => (
                <div key={platform.id}>
                  <Card className="border-2 hover:border-primary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
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

                            {/* Permissions */}
                            <div className="space-y-2">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Shield className="w-3 h-3" />
                                <span>Required permissions:</span>
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
                        <Button
                          onClick={() => handlePlatformConnect(platform.id)}
                          disabled={platform.status === "connecting" || platform.status === "connected"}
                          variant={platform.status === "connected" ? "secondary" : "default"}
                        >
                          {platform.status === "connected"
                            ? "Connected"
                            : platform.status === "connecting"
                              ? "Connecting..."
                              : "Connect"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  {index < platforms.length - 1 && <Separator className="my-4" />}
                </div>
              ))}

              {connectedPlatforms > 0 && (
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-medium text-success">
                      Great! You've connected {connectedPlatforms} platform{connectedPlatforms > 1 ? "s" : ""}.
                    </span>
                  </div>
                  <p className="text-sm text-success/80 mt-1">
                    You can now proceed to the next step or connect additional platforms.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                You're All Set!
              </CardTitle>
              <CardDescription>Your AdLejand account is ready. Here's what happens next.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">Create Your First Campaign</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use our AI-powered campaign builder to create your first high-performing ad campaign in minutes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-success/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-success" />
                      </div>
                      <h3 className="font-semibold">Monitor Performance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Track your campaigns across all platforms from one unified dashboard with real-time insights.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Account Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business:</span>
                    <span>{businessInfo.businessName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="capitalize">{businessInfo.businessType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Connected Platforms:</span>
                    <span>
                      {connectedPlatforms} platform{connectedPlatforms > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i + 1 <= currentStep ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>

          {currentStep < totalSteps ? (
            <Button onClick={() => setCurrentStep((prev) => prev + 1)} disabled={!canProceed()}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button size="lg" asChild>
              <a href="/dashboard">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
