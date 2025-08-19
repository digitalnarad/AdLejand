"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Settings, Zap, TrendingDown, TrendingUp, Pause, AlertTriangle } from "lucide-react"

interface AutomationRule {
  id: string
  name: string
  type: "budget" | "pause" | "alert"
  condition: string
  action: string
  enabled: boolean
  lastTriggered?: Date
}

const mockRules: AutomationRule[] = [
  {
    id: "1",
    name: "Auto-pause low performers",
    type: "pause",
    condition: "CTR < 1% for 3 days",
    action: "Pause campaign",
    enabled: true,
    lastTriggered: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: "2",
    name: "Increase budget for winners",
    type: "budget",
    condition: "ROAS > 4x for 2 days",
    action: "Increase budget by 20%",
    enabled: true,
  },
  {
    id: "3",
    name: "High spend alert",
    type: "alert",
    condition: "Daily spend > $500",
    action: "Send notification",
    enabled: false,
  },
]

export function AutomationSettings() {
  const [rules, setRules] = useState<AutomationRule[]>(mockRules)
  const [showNewRule, setShowNewRule] = useState(false)

  const toggleRule = (ruleId: string) => {
    setRules((prev) => prev.map((rule) => (rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule)))
  }

  const getRuleIcon = (type: string) => {
    switch (type) {
      case "budget":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "pause":
        return <Pause className="h-4 w-4 text-red-600" />
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-amber-600" />
      default:
        return <Zap className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Automation Rules
              </CardTitle>
              <CardDescription>Set up automated actions to optimize your campaigns 24/7</CardDescription>
            </div>
            <Button onClick={() => setShowNewRule(!showNewRule)}>{showNewRule ? "Cancel" : "Add Rule"}</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {showNewRule && (
            <Card className="border-dashed">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="rule-name">Rule Name</Label>
                    <Input id="rule-name" placeholder="e.g., Auto-pause underperformers" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="rule-type">Action Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select action" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Adjust Budget</SelectItem>
                          <SelectItem value="pause">Pause Campaign</SelectItem>
                          <SelectItem value="alert">Send Alert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="rule-metric">Trigger Metric</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select metric" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ctr">Click-through Rate</SelectItem>
                          <SelectItem value="roas">Return on Ad Spend</SelectItem>
                          <SelectItem value="cpc">Cost per Click</SelectItem>
                          <SelectItem value="spend">Daily Spend</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">Save Rule</Button>
                    <Button size="sm" variant="outline" onClick={() => setShowNewRule(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3">
            {rules.map((rule) => (
              <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  {getRuleIcon(rule.type)}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{rule.name}</h4>
                      <Badge variant={rule.enabled ? "default" : "secondary"} className="text-xs">
                        {rule.enabled ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-medium">When:</span> {rule.condition}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Then:</span> {rule.action}
                    </p>
                    {rule.lastTriggered && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Last triggered: {rule.lastTriggered.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                <Switch checked={rule.enabled} onCheckedChange={() => toggleRule(rule.id)} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Automation Performance</CardTitle>
          <CardDescription>See how automation has impacted your campaigns this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">+$2,340</p>
              <p className="text-sm text-muted-foreground">Revenue from auto-optimizations</p>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">47</p>
              <p className="text-sm text-muted-foreground">Automated actions taken</p>
            </div>

            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <TrendingDown className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-600">-$890</p>
              <p className="text-sm text-muted-foreground">Wasted spend prevented</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
