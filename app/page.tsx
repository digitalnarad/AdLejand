import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  Brain,
  Users,
  TrendingUp,
  Play,
  Star,
  DollarSign,
  Globe,
  Link,
  Settings,
  X,
  Check,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header - Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">AdLejand</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Resources
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
              asChild
            >
              <a href="/dashboard">Sign In</a>
            </Button>
            <Button className="hover:scale-105 hover:shadow-lg transition-all duration-300" asChild>
              <a href="/onboarding">Start Free Trial</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge
          variant="secondary"
          className="mb-4 hover:scale-105 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
        >
          <Brain className="w-4 h-4 mr-1" />
          AI-Powered Ad Automation That Actually Works
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent hover:from-primary hover:to-primary/60 transition-all duration-500">
          AI-Powered Ad Automation
          <br />
          <span className="text-primary">That Actually Works</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
          Stop wasting money on underperforming ads. Connect your accounts, describe your business, and watch our AI
          create high-converting campaigns across Meta, Google, and LinkedIn.
        </p>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
            <Target className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-semibold">Smart Campaign Creation</h3>
              <p className="text-sm text-muted-foreground">
                AI analyzes your business and creates optimized campaigns in minutes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
            <BarChart3 className="w-6 h-6 text-success flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-semibold">Unified Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Monitor all platforms in one place with real-time performance insights
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
            <TrendingUp className="w-6 h-6 text-warning flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-semibold">Continuous Optimization</h3>
              <p className="text-sm text-muted-foreground">
                AI automatically adjusts budgets, targeting, and creatives for maximum ROI
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="text-lg px-8 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
            asChild
          >
            <a href="/onboarding">
              Start Your Free 14-Day Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch 2-Minute Demo
          </Button>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl p-8 border-2 border-primary/20">
            <div className="text-center text-muted-foreground">
              <BarChart3 className="w-24 h-24 mx-auto mb-4 text-primary" />
              <p className="text-lg font-semibold">Dashboard Preview</p>
              <p className="text-sm">Real-time campaign performance across all platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Losing Money Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-destructive">Stop Losing Money on These Common Ad Mistakes</h2>
            <p className="text-lg text-muted-foreground">Check all that apply to your current advertising situation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Manually adjusting budgets daily without data insights",
              "Running ads on multiple platforms with no unified strategy",
              "Spending hours creating campaigns that underperform",
              "Missing optimization opportunities while you sleep",
              "Guessing which audiences will convert best",
              "Wasting budget on poorly performing ad creatives",
              "Unable to track true ROI across all platforms",
              "Constantly switching between different dashboards",
            ].map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20"
              >
                <input
                  type="checkbox"
                  id={`problem-${index}`}
                  className="mt-1 w-4 h-4 text-destructive bg-background border-destructive/30 rounded focus:ring-destructive"
                />
                <label htmlFor={`problem-${index}`} className="text-sm cursor-pointer">
                  {problem}
                </label>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold mb-4">
              If you checked even one box, AdLejand can save you thousands in wasted ad spend.
            </p>
            <Button size="lg" className="bg-destructive hover:bg-destructive/90" asChild>
              <a href="/onboarding">Stop the Money Drain - Start Free Trial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted by 2,500+ Growing Businesses</h2>

          {/* Company Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12 opacity-60">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-background/50 rounded-lg p-4">
                <div className="w-16 h-8 bg-muted rounded mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">450M+</div>
              <div className="text-muted-foreground">Ad Impressions Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">3.4x</div>
              <div className="text-muted-foreground">Average ROAS Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">89%</div>
              <div className="text-muted-foreground">Reduction in Campaign Setup Time</div>
            </div>
          </div>

          {/* Featured Testimonial */}
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                "AdLejand increased our ROAS by 280% while cutting our ad management time in half. It's like having an
                expert media buyer working 24/7."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Marketing Director, TechFlow Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Setup to Success in 3 Simple Steps</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with AI-powered advertising in minutes, not hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="relative">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              1
            </div>
            <CardContent className="p-8 pt-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Link className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Connect Your Ad Accounts</h3>
              <p className="text-muted-foreground">
                Securely link your Meta, Google, and LinkedIn ad accounts in just a few clicks. We handle all the
                technical setup.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="relative">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <CardContent className="p-8 pt-12">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-4">Describe Your Business</h3>
              <p className="text-muted-foreground">
                Tell our AI about your products, target audience, and goals. Our machine learning does the rest - no
                complex configurations needed.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="relative">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-warning rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <CardContent className="p-8 pt-12">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-bold mb-4">Launch & Optimize Automatically</h3>
              <p className="text-muted-foreground">
                Watch as AI creates, launches, and continuously optimizes your campaigns for maximum performance across
                all platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Dominate Digital Advertising</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered tools designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Smart Campaign Builder</h3>
                <p className="text-muted-foreground text-sm">
                  AI analyzes your business description and automatically creates high-performing campaigns with optimal
                  targeting, budgets, and creatives.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-bold mb-2">Unified Analytics Dashboard</h3>
                <p className="text-muted-foreground text-sm">
                  Track performance across Meta, Google, and LinkedIn in one beautiful dashboard. See exactly which
                  campaigns drive the best ROI.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-lg font-bold mb-2">Automatic Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI continuously monitors and adjusts your campaigns - pausing underperformers, scaling winners,
                  and optimizing for your goals.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cross-Platform Management</h3>
                <p className="text-muted-foreground text-sm">
                  Manage campaigns across all major advertising platforms from one central location. No more switching
                  between multiple dashboards.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Real-Time Insights</h3>
                <p className="text-muted-foreground text-sm">
                  Get instant alerts about campaign performance, optimization opportunities, and market changes that
                  affect your ads.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">ROI Tracking</h3>
                <p className="text-muted-foreground text-sm">
                  Clear, accurate tracking of your return on ad spend with attribution across platforms and customer
                  touchpoints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Losing Money on Manual Ad Management</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how AI automation solves the biggest challenges in digital advertising
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-destructive mb-6">The Old Way (Problems)</h3>
            {[
              "Spending hours setting up campaigns manually",
              "Constantly monitoring and adjusting budgets",
              "Juggling multiple platform dashboards",
              "Guessing which audiences will convert",
              "Missing optimization opportunities",
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{problem}</span>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-success mb-6">The AdLejand Way (Solutions)</h3>
            {[
              "AI creates optimized campaigns in minutes",
              "Automatic budget allocation and adjustment",
              "One unified dashboard for all platforms",
              "Machine learning finds your best audiences",
              "24/7 AI monitoring and optimization",
            ].map((solution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg">
                <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{solution}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="/onboarding">See the Difference AI Makes</a>
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Growth Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing that scales with your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-4xl font-bold text-primary">
                  $49<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Up to $2,000 ad spend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">2 connected ad accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Basic automation rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Email support</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-4xl font-bold text-primary">
                  $149<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Up to $10,000 ad spend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Unlimited ad accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Advanced AI optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Priority support + phone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Custom reporting</span>
                  </div>
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-primary">Custom</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Unlimited ad spend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">Custom integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">White-label options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">SLA guarantee</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* All Plans Include */}
          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-4">All plans include:</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>24/7 AI optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to know about AdLejand</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "How does the AI optimization work?",
              answer:
                "Our machine learning algorithms analyze millions of data points including audience behavior, creative performance, and market trends to automatically optimize your campaigns for maximum ROI.",
            },
            {
              question: "Which advertising platforms do you support?",
              answer:
                "We currently support Meta Ads (Facebook & Instagram), Google Ads, and LinkedIn Ads, with more platforms coming soon.",
            },
            {
              question: "How long does setup take?",
              answer:
                "Most customers are up and running with their first optimized campaigns within 15 minutes of connecting their accounts.",
            },
            {
              question: "Do you require long-term contracts?",
              answer: "No contracts required. You can upgrade, downgrade, or cancel your subscription at any time.",
            },
            {
              question: "Is my advertising data secure?",
              answer:
                "Yes, we use enterprise-grade encryption and never access your ad accounts without permission. We're SOC 2 compliant and follow strict data privacy protocols.",
            },
          ].map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Advertising Results?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses using AI to maximize their ad performance
          </p>

          <div className="bg-background/10 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Start your 14-day free trial</h3>
            <p className="text-lg opacity-90 mb-6">No credit card required</p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-background text-primary hover:bg-background/90 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/onboarding">Start Free Trial Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">AdLejand</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered advertising automation that helps businesses maximize their ROI across all platforms.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="/connections" className="block text-muted-foreground hover:text-primary transition-colors">
                  Integrations
                </a>
                <a href="/analytics" className="block text-muted-foreground hover:text-primary transition-colors">
                  Analytics
                </a>
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  API Docs
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-muted-foreground mb-4 md:mb-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 AdLejand. All rights reserved. Built with AI-first automation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
