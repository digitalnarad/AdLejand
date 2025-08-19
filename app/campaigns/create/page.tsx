"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
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
  ArrowLeft,
  BarChart3,
  Brain,
  DollarSign,
  Eye,
  Lightbulb,
  Play,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

interface CampaignFormData {
  campaignName: string
  objective: string
  platform: string
  businessDescription: string
  targetAudience: {
    locations: string[]
    ageRange: { min: number; max: number }
    interests: string[]
    customAudience: string
  }
  budget: {
    type: "daily" | "lifetime"
    amount: number
    duration: number
  }
  schedule: {
    startDate: string
    endDate?: string
    runContinuously: boolean
  }
  advanced: {
    bidStrategy: string
    placements: string[]
    deviceTargeting: string[]
  }
}

const aiSuggestions = [
  {
    id: "1",
    trigger: "businessDescription",
    condition: (value: string) => value.length > 50,
    title: "Audience Targeting Suggestion",
    description:
      "Based on your business description, we recommend targeting 'small business owners' and 'entrepreneurs' aged 25-45.",
    action: "Apply Suggestion",
    impact: "high",
  },
  {
    id: "2",
    trigger: "budget",
    condition: (value: any) => value?.amount > 1000,
    title: "Budget Optimization",
    description:
      "For budgets over $1000, we recommend starting with 70% on Facebook and 30% on Google for optimal reach.",
    action: "Optimize Budget",
    impact: "medium",
  },
  {
    id: "3",
    trigger: "objective",
    condition: (value: string) => value === "conversions",
    title: "Conversion Tracking",
    description: "For conversion campaigns, ensure you have Facebook Pixel and Google Analytics properly configured.",
    action: "Setup Tracking",
    impact: "high",
  },
]

const adPreviews = {
  facebook: {
    title: "Your Business Name",
    description: "Transform your business with our innovative solutions. Get started today!",
    image: "/facebook-ad-preview.png",
    cta: "Learn More",
  },
  google: {
    headline: "Business Solutions | Your Company",
    description1: "Innovative solutions for modern businesses.",
    description2: "Get started with a free consultation today.",
    displayUrl: "yourcompany.com",
  },
  linkedin: {
    title: "Professional Business Solutions",
    description: "Connect with industry leaders and grow your business network.",
    image: "/linkedin-ad-preview.png",
    cta: "Connect Now",
  },
}

export default function CreateCampaignPage() {
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>("facebook")

  const form = useForm<CampaignFormData>({
    defaultValues: {
      campaignName: "",
      objective: "",
      platform: "",
      businessDescription: "",
      targetAudience: {
        locations: [],
        ageRange: { min: 18, max: 65 },
        interests: [],
        customAudience: "",
      },
      budget: {
        type: "daily",
        amount: 50,
        duration: 7,
      },
      schedule: {
        startDate: "",
        runContinuously: true,
      },
      advanced: {
        bidStrategy: "automatic",
        placements: ["feed", "stories"],
        deviceTargeting: ["mobile", "desktop"],
      },
    },
  })

  const watchedValues = form.watch()

  // AI Suggestions Logic
  useEffect(() => {
    const newSuggestions: string[] = []

    aiSuggestions.forEach((suggestion) => {
      const fieldValue = watchedValues[suggestion.trigger as keyof CampaignFormData]
      if (suggestion.condition(fieldValue)) {
        newSuggestions.push(suggestion.id)
      }
    })

    setActiveSuggestions(newSuggestions)
  }, [watchedValues])

  const onSubmit = (data: CampaignFormData) => {
    console.log("[v0] Campaign data:", data)
    // Handle campaign creation
  }

  const applySuggestion = (suggestionId: string) => {
    console.log("[v0] Applying suggestion:", suggestionId)
    // Apply AI suggestion logic here
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
                <SidebarMenuButton asChild>
                  <a href="/connections" className="hover:bg-primary/10 transition-colors">
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
              <Button variant="ghost" size="icon" asChild>
                <a href="/dashboard">
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </Button>
              <h1 className="text-lg font-semibold">Create New Campaign</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Save Draft</Button>
              <Button form="campaign-form" type="submit">
                <Play className="w-4 h-4 mr-2" />
                Launch Campaign
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Campaign Form */}
              <div className="lg:col-span-2 space-y-6">
                <Form {...form}>
                  <form id="campaign-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Basic Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Campaign Basics
                        </CardTitle>
                        <CardDescription>Set up the foundation of your campaign</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="campaignName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Campaign Name</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Summer Sale 2024" {...field} />
                              </FormControl>
                              <FormDescription>Choose a descriptive name for your campaign</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="objective"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Campaign Objective</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select objective" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                                    <SelectItem value="traffic">Website Traffic</SelectItem>
                                    <SelectItem value="leads">Lead Generation</SelectItem>
                                    <SelectItem value="conversions">Conversions</SelectItem>
                                    <SelectItem value="sales">Sales</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="platform"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Primary Platform</FormLabel>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value)
                                    setSelectedPlatform(value)
                                  }}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select platform" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="facebook">Meta (Facebook & Instagram)</SelectItem>
                                    <SelectItem value="google">Google Ads</SelectItem>
                                    <SelectItem value="linkedin">LinkedIn Ads</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="businessDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business/Product Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe your business, products, or services. Our AI will use this to optimize your campaign..."
                                  className="min-h-24"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                The more detailed your description, the better our AI can optimize your campaign
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    {/* Audience Targeting */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          Target Audience
                        </CardTitle>
                        <CardDescription>Define who you want to reach with your campaign</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="targetAudience.customAudience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Audience Description</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Small business owners, entrepreneurs, marketing managers"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>Describe your ideal customer in simple terms</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Age Range</label>
                            <div className="flex items-center gap-2">
                              <FormField
                                control={form.control}
                                name="targetAudience.ageRange.min"
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder="18"
                                        min="13"
                                        max="65"
                                        {...field}
                                        onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <span className="text-muted-foreground">to</span>
                              <FormField
                                control={form.control}
                                name="targetAudience.ageRange.max"
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder="65"
                                        min="18"
                                        max="65"
                                        {...field}
                                        onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          <FormItem>
                            <FormLabel>Primary Location</FormLabel>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select location" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                                <SelectItem value="worldwide">Worldwide</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Budget & Schedule */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-primary" />
                          Budget & Schedule
                        </CardTitle>
                        <CardDescription>Set your campaign budget and timeline</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="budget.type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Type</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex gap-6"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="daily" id="daily" />
                                    <label htmlFor="daily">Daily Budget</label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="lifetime" id="lifetime" />
                                    <label htmlFor="lifetime">Lifetime Budget</label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="budget.amount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  {watchedValues.budget?.type === "daily" ? "Daily" : "Total"} Budget ($)
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    min="5"
                                    placeholder="50"
                                    {...field}
                                    onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Minimum ${watchedValues.budget?.type === "daily" ? "5" : "25"}
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget.duration"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Campaign Duration (days)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    min="1"
                                    placeholder="7"
                                    {...field}
                                    onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                                  />
                                </FormControl>
                                <FormDescription>How long should the campaign run?</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="schedule.runContinuously"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                              <div className="space-y-0.5">
                                <FormLabel>Run Continuously</FormLabel>
                                <FormDescription>Campaign will run until manually stopped</FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </form>
                </Form>
              </div>

              {/* AI Suggestions & Preview */}
              <div className="space-y-6">
                {/* AI Suggestions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      AI Suggestions
                    </CardTitle>
                    <CardDescription>Real-time optimization recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeSuggestions.length === 0 ? (
                      <div className="text-center py-6 text-muted-foreground">
                        <Lightbulb className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Fill out the form to get AI suggestions</p>
                      </div>
                    ) : (
                      activeSuggestions.map((suggestionId) => {
                        const suggestion = aiSuggestions.find((s) => s.id === suggestionId)
                        if (!suggestion) return null

                        return (
                          <Card key={suggestion.id} className="border-l-4 border-l-primary">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-sm">{suggestion.title}</h4>
                                <Badge variant="outline" className={getImpactColor(suggestion.impact)}>
                                  {suggestion.impact}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{suggestion.description}</p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full bg-transparent"
                                onClick={() => applySuggestion(suggestion.id)}
                              >
                                <Sparkles className="w-3 h-3 mr-1" />
                                {suggestion.action}
                              </Button>
                            </CardContent>
                          </Card>
                        )
                      })
                    )}
                  </CardContent>
                </Card>

                {/* Ad Preview */}
                {selectedPlatform && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-primary" />
                        Ad Preview
                      </CardTitle>
                      <CardDescription>How your ad will appear on {selectedPlatform}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedPlatform === "facebook" && (
                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-xs text-primary-foreground font-bold">YB</span>
                            </div>
                            <div>
                              <p className="font-semibold text-sm">
                                {watchedValues.campaignName || "Your Business Name"}
                              </p>
                              <p className="text-xs text-muted-foreground">Sponsored</p>
                            </div>
                          </div>
                          <img
                            src={adPreviews.facebook.image || "/placeholder.svg"}
                            alt="Ad preview"
                            className="w-full h-32 object-cover rounded mb-3"
                          />
                          <p className="text-sm mb-2">
                            {watchedValues.businessDescription?.slice(0, 100) || adPreviews.facebook.description}
                            {watchedValues.businessDescription && watchedValues.businessDescription.length > 100
                              ? "..."
                              : ""}
                          </p>
                          <Button size="sm" className="w-full">
                            {adPreviews.facebook.cta}
                          </Button>
                        </div>
                      )}

                      {selectedPlatform === "google" && (
                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <span className="text-xs bg-primary text-primary-foreground px-1 rounded">Ad</span>
                              <span className="text-xs text-muted-foreground">{adPreviews.google.displayUrl}</span>
                            </div>
                            <h3 className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                              {watchedValues.campaignName || adPreviews.google.headline}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {watchedValues.businessDescription?.slice(0, 80) || adPreviews.google.description1}
                              {watchedValues.businessDescription && watchedValues.businessDescription.length > 80
                                ? "..."
                                : ""}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedPlatform === "linkedin" && (
                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                              <span className="text-xs text-primary-foreground font-bold">YB</span>
                            </div>
                            <div>
                              <p className="font-semibold text-sm">
                                {watchedValues.campaignName || "Your Business Name"}
                              </p>
                              <p className="text-xs text-muted-foreground">Promoted</p>
                            </div>
                          </div>
                          <img
                            src={adPreviews.linkedin.image || "/placeholder.svg"}
                            alt="Ad preview"
                            className="w-full h-32 object-cover rounded mb-3"
                          />
                          <p className="text-sm mb-2">
                            {watchedValues.businessDescription?.slice(0, 100) || adPreviews.linkedin.description}
                            {watchedValues.businessDescription && watchedValues.businessDescription.length > 100
                              ? "..."
                              : ""}
                          </p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            {adPreviews.linkedin.cta}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
