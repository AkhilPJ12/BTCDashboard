"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, Copy, Heart, Zap, TrendingUp, Users } from "lucide-react"

export function SupportDonation() {
  const [copied, setCopied] = useState(false)
  const walletAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const features = [
    {
      icon: Zap,
      title: "Real-time Data",
      description: "Lightning-fast Bitcoin price updates and market data",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive on-chain metrics and technical indicators",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by Bitcoin enthusiasts, for Bitcoin enthusiasts",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Support Our Bitcoin Dashboard</h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Help us continue building the most comprehensive Bitcoin analytics platform. Your donations enable us to
            provide real-time data, advanced features, and maintain this free service for the Bitcoin community.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Bitcoin className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Powered by Bitcoin, Built for Bitcoiners</span>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Donation Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bitcoin className="h-6 w-6 text-orange-600" />
            Bitcoin Donation Address
          </CardTitle>
          <CardDescription>
            Send any amount of Bitcoin to support our development efforts. Every satoshi counts!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">BTC Address</Label>
              <Badge variant="secondary">SegWit</Badge>
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm bg-background p-2 rounded border font-mono break-all">
                {walletAddress}
              </code>
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="shrink-0 bg-transparent">
                {copied ? (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-orange-600">₿0.001</p>
              <p className="text-sm text-muted-foreground">Small Donation</p>
              <p className="text-xs text-muted-foreground mt-1">~$43</p>
            </div>
            <div className="text-center p-4 border rounded-lg bg-orange-50 border-orange-200">
              <p className="text-2xl font-bold text-orange-600">₿0.005</p>
              <p className="text-sm text-muted-foreground">Medium Donation</p>
              <p className="text-xs text-muted-foreground mt-1">~$216</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-orange-600">₿0.01</p>
              <p className="text-sm text-muted-foreground">Large Donation</p>
              <p className="text-xs text-muted-foreground mt-1">~$432</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">How Your Donations Help</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Maintain real-time data feeds and API subscriptions</li>
              <li>• Develop new features and analytical tools</li>
              <li>• Cover hosting and infrastructure costs</li>
              <li>• Support open-source development</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">Thank you for supporting the Bitcoin community! 🧡</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>
}
