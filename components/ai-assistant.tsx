"use client"

import { useState, useRef, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Bot, Send, Sparkles, TrendingUp, Users, Zap } from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  actions?: Array<{
    label: string
    action: string
    variant?: "default" | "destructive" | "outline"
  }>
}

interface AIInsight {
  id: string
  type: "optimization" | "alert" | "suggestion"
  title: string
  description: string
  impact: "high" | "medium" | "low"
  campaign?: string
  action?: string
}

const mockInsights: AIInsight[] = [
  {
    id: "1",
    type: "optimization",
    title: "Budget Reallocation Opportunity",
    description:
      'Your "Summer Sale" campaign is performing 40% better than average. Consider increasing budget by $200/day.',
    impact: "high",
    campaign: "Summer Sale Campaign",
    action: "increase_budget",
  },
  {
    id: "2",
    type: "alert",
    title: "Declining Performance",
    description: "Facebook campaign CTR dropped 25% in the last 3 days. Ad fatigue detected.",
    impact: "medium",
    campaign: "Facebook Brand Awareness",
    action: "refresh_creative",
  },
  {
    id: "3",
    type: "suggestion",
    title: "New Audience Opportunity",
    description: "Similar audiences to your best performers show 60% higher conversion potential.",
    impact: "high",
    action: "create_lookalike",
  },
]

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hi! I'm your AI advertising assistant. I can help you optimize campaigns, analyze performance, and answer questions about your ads. Try asking me something like 'How are my Facebook ads performing?' or 'Increase budget on my best campaign by 20%'.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("facebook") || lowerQuery.includes("meta")) {
      return {
        id: Date.now().toString(),
        type: "assistant",
        content:
          "Your Facebook campaigns are performing well! Here's a quick summary:\n\n• **Summer Sale Campaign**: $2,450 spent, 3.2% CTR, $0.85 CPC\n• **Brand Awareness**: $1,200 spent, 2.8% CTR, $0.92 CPC\n• **Retargeting**: $800 spent, 4.1% CTR, $0.65 CPC\n\nYour retargeting campaign has the best performance. Would you like me to increase its budget?",
        timestamp: new Date(),
        actions: [
          { label: "Increase Budget", action: "increase_budget", variant: "default" },
          { label: "View Details", action: "view_details", variant: "outline" },
        ],
      }
    }

    if (lowerQuery.includes("increase") && lowerQuery.includes("budget")) {
      return {
        id: Date.now().toString(),
        type: "assistant",
        content:
          "I can help you increase campaign budgets! Based on your query, I recommend:\n\n• **Summer Sale Campaign**: Increase from $100/day to $120/day (+20%)\n• Expected impact: +15-20% more conversions\n• Estimated additional spend: $140/week\n\nShould I apply this budget increase?",
        timestamp: new Date(),
        actions: [
          { label: "Apply Changes", action: "apply_budget", variant: "default" },
          { label: "Modify Amount", action: "modify_budget", variant: "outline" },
        ],
      }
    }

    if (lowerQuery.includes("performance") || lowerQuery.includes("how are")) {
      return {
        id: Date.now().toString(),
        type: "assistant",
        content:
          "Here's your overall performance summary:\n\n📊 **This Week vs Last Week**\n• Total Spend: $4,450 (+12%)\n• Conversions: 89 (+18%)\n• ROAS: 4.2x (+8%)\n• CTR: 3.1% (+5%)\n\n🎯 **Top Performer**: Summer Sale Campaign\n🔍 **Needs Attention**: Facebook Brand Awareness (declining CTR)\n\nWould you like me to optimize the underperforming campaigns?",
        timestamp: new Date(),
        actions: [
          { label: "Optimize Now", action: "optimize_campaigns", variant: "default" },
          { label: "View Analytics", action: "view_analytics", variant: "outline" },
        ],
      }
    }

    return {
      id: Date.now().toString(),
      type: "assistant",
      content:
        'I can help you with campaign optimization, performance analysis, budget adjustments, and more! Here are some things you can ask me:\n\n• "How are my Google Ads performing?"\n• "Pause underperforming campaigns"\n• "Create a lookalike audience"\n• "What\'s my best ROAS campaign?"\n• "Increase budget on top performers"\n\nWhat would you like to know?',
      timestamp: new Date(),
    }
  }

  const handleActionClick = (action: string) => {
    // Simulate action execution
    const actionMessage: Message = {
      id: Date.now().toString(),
      type: "assistant",
      content: `✅ Action completed! I've ${action.replace("_", " ")} successfully. You should see the changes reflected in your dashboard within a few minutes.`,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, actionMessage])
  }

  return (
    <>
      {/* AI Insights Panel - Always visible */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">AI Insights</h3>
            </div>
            <Badge variant="secondary" className="text-xs">
              {mockInsights.length} active
            </Badge>
          </div>

          <div className="space-y-3">
            {mockInsights.slice(0, 2).map((insight) => (
              <div key={insight.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 mt-0.5">
                  {insight.type === "optimization" && <TrendingUp className="h-4 w-4 text-green-600" />}
                  {insight.type === "alert" && <Zap className="h-4 w-4 text-amber-600" />}
                  {insight.type === "suggestion" && <Users className="h-4 w-4 text-blue-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm">{insight.title}</p>
                    <Badge variant={insight.impact === "high" ? "default" : "secondary"} className="text-xs">
                      {insight.impact} impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                  {insight.campaign && (
                    <p className="text-xs text-muted-foreground mb-2">Campaign: {insight.campaign}</p>
                  )}
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    Apply Suggestion
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">
            View All Insights ({mockInsights.length})
          </Button>
        </CardContent>
      </Card>

      {/* AI Assistant Chat */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50">
            <Bot className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-600" />
              AI Assistant
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full mt-4">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === "user" ? "bg-blue-600 text-white" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      {message.actions && (
                        <div className="flex gap-2 mt-3">
                          {message.actions.map((action, index) => (
                            <Button
                              key={index}
                              size="sm"
                              variant={action.variant || "default"}
                              className="text-xs h-7"
                              onClick={() => handleActionClick(action.action)}
                            >
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      )}
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <Separator className="my-4" />

            <div className="flex gap-2">
              <Input
                placeholder="Ask me about your campaigns..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
