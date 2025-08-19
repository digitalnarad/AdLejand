import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Zap, Target, BarChart3, Brain, CheckCircle, Star, Users, TrendingUp, Shield } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              href="#about"
              className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            >
              About
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
              <a href="/onboarding">Get Started</a>
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
          AI-Powered Automation
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent hover:from-primary hover:to-primary/60 transition-all duration-500">
          Set It and Forget It
          <br />
          <span className="text-primary">Ad Automation</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
          Connect your ad accounts, describe your business, and let our AI create high-performing campaigns that
          maximize ROI while you focus on what matters most.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Users className="w-4 h-4 text-primary" />
            <span>10,000+ businesses trust us</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <TrendingUp className="w-4 h-4 text-success" />
            <span>Average 340% ROAS increase</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Shield className="w-4 h-4 text-primary" />
            <span>Enterprise-grade security</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
            asChild
          >
            <a href="/onboarding">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Growing Businesses</h2>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-muted-foreground">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "AdLejand increased our ROAS by 280% in just 3 months. The AI optimization is incredible - it's like
                having a team of experts working 24/7."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/professional-woman-diverse.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Finally, advertising that actually works! We went from losing money on ads to our most profitable
                marketing channel in 6 weeks."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/professional-man.png" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Mike Johnson</p>
                  <p className="text-sm text-muted-foreground">Founder, EcoStore</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The time savings alone are worth it. What used to take our team 20 hours per week now runs
                automatically with better results."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/professional-woman-marketing.png" />
                  <AvatarFallback>LC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm text-muted-foreground">Marketing Director, GrowthCo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AdLejand?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-first approach makes complex advertising simple, effective, and profitable for businesses of all
            sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Target className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors duration-300">
                Smart Campaign Builder
              </CardTitle>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                Describe your business and goals. Our AI creates optimized campaigns across Meta, Google, and LinkedIn.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-success/40 hover:shadow-xl hover:shadow-success/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="w-6 h-6 text-success group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="group-hover:text-success transition-colors duration-300">
                Real-Time Optimization
              </CardTitle>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                Continuous AI monitoring adjusts bids, audiences, and creative elements to maximize your return on ad
                spend.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-warning/40 hover:shadow-xl hover:shadow-warning/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-warning group-hover:scale-110 transition-all duration-300">
                <Brain className="w-6 h-6 text-warning group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="group-hover:text-warning transition-colors duration-300">
                Cross-Platform Management
              </CardTitle>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                Unified dashboard to manage all your advertising platforms with consistent reporting and insights.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">
                Perfect for Growing Businesses
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-primary">340%</div>
                  <div className="text-sm text-muted-foreground">Avg ROAS Increase</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-success">85%</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-warning">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Optimization</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg hover:bg-background hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 hover:bg-background/50 p-3 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      SMBs & Entrepreneurs
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Get professional-grade advertising without the complexity or high costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-background/50 p-3 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      Marketing Agencies
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Manage multiple client accounts efficiently with automated optimization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-background/50 p-3 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      E-commerce Stores
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Scale your online presence with data-driven advertising strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 group">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-base group-hover:text-foreground transition-colors duration-300">
                  Join 10,000+ businesses using AI to automate their advertising and boost ROI.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Button
                  size="lg"
                  className="w-full mb-4 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group/btn"
                  asChild
                >
                  <a href="/onboarding">
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                AdLejand
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary hover:scale-105 transition-all duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary hover:scale-105 transition-all duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary hover:scale-105 transition-all duration-200">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            © 2024 AdLejand. All rights reserved. Built with AI-first automation.
          </div>
        </div>
      </footer>
    </div>
  )
}
