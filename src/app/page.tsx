import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    Home,
    BarChart3,
    Calculator,
    TrendingUp,
    DollarSign,
    Shield,
    PieChart,
    Target,
    Banknote,
    LineChart
} from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">🌱</span>
                        </div>
                        <span className="text-xl font-semibold">PlanWise</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/auth/signin">
                            <Button variant="ghost">Sign In</Button>
                        </Link>
                        <Link href="/auth/signup">
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <Badge variant="secondary" className="mb-4">
                        🌱 Introducing PlanWise
                    </Badge>

                    <h1 className="text-6xl font-bold mb-6 leading-tight">
                        Take Control<br />
                        of Your<br />
                        Finances
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Plan, track, and achieve your financial goals with ease.
                    </p>

                    <Link href="/dashboard">
                        <Button size="lg" className="text-lg px-8 py-6">
                            Get Started for free →
                        </Button>
                    </Link>
                </div>

                {/* Dashboard Preview */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="bg-gray-900 rounded-lg p-6 text-left">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-12 gap-4 text-white">
                            <div className="col-span-2 space-y-4">
                                <div className="text-sm">🏠 Dashboard</div>
                                <div className="text-sm text-gray-400">📊 Financial tools</div>
                                <div className="text-sm text-gray-400">💡 AI assistant</div>
                                <div className="text-sm text-gray-400">📈 Reports</div>
                            </div>

                            <div className="col-span-10">
                                <h2 className="text-xl font-semibold mb-4">Financial dashboard</h2>

                                <div className="mb-4">
                                    <div className="text-sm text-gray-400">Total wealth</div>
                                    <div className="text-2xl font-bold text-green-400">€263,449,466 +€62,091,885 this week</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium mb-2">Assets overview</h3>
                                        <div className="bg-gray-800 rounded p-4 h-32 flex items-center justify-center">
                                            <div className="w-20 h-20 border-4 border-yellow-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium mb-2">Budget overview</h3>
                                        <div className="bg-gray-800 rounded p-4 h-32 flex items-end justify-center gap-1">
                                            <div className="w-4 bg-blue-500 h-8"></div>
                                            <div className="w-4 bg-green-500 h-12"></div>
                                            <div className="w-4 bg-yellow-500 h-6"></div>
                                            <div className="w-4 bg-orange-500 h-16"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Privacy friendly, compliant, and<br />
                        hosted in EU
                    </h2>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Simple pricing for<br />
                        everyone.
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span>Monthly</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <span>Annual</span>
                        <Badge variant="secondary">Save up to 37% annually</Badge>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Free</h3>
                            <p className="text-gray-600 mb-4">Essential banking tools to get started.</p>
                            <div className="text-3xl font-bold mb-6">€0 <span className="text-sm font-normal text-gray-600">/ year</span></div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Manual transaction import
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Manual transaction categorization
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Asset monitoring with price updates
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Multi-currency support
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Financial event planner
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Basic portfolio tracking
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Basic Plan */}
                    <Card className="border-2 border-blue-500">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Basic</h3>
                            <p className="text-gray-600 mb-4">Smart features for better financial management.</p>
                            <div className="text-3xl font-bold mb-6">€60 <span className="text-sm font-normal text-gray-600">/ year</span></div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    All Free plan features
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Unlimited bank integrations
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    AI-powered transaction categorization
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Financial health metrics
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Email support
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Premium Plan */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Premium</h3>
                            <p className="text-gray-600 mb-4">Advanced AI features for financial mastery.</p>
                            <div className="text-3xl font-bold mb-6">€90 <span className="text-sm font-normal text-gray-600">/ year</span></div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    All Basic plan features
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    AI financial chat assistant
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    AI reporting companion
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Priority customer support
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    Early access to new features
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Take back control of your finances.
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Completely free, forever. No payment card required.
                    </p>
                    <Link href="/dashboard">
                        <Button size="lg">Get Started</Button>
                    </Link>
                </div>
            </section>

            {/* Financial Tools Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Explore our financial tools
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { icon: Target, title: "Net worth calculator", desc: "Set your wealth goals and see what it takes to achieve them" },
                        { icon: Shield, title: "Emergency fund calculator", desc: "Calculate how much you need to save for unexpected expenses" },
                        { icon: Calculator, title: "Event planner", desc: "Model different financial scenarios and visualize your wealth journey" },
                        { icon: BarChart3, title: "Health metrics", desc: "Get a comprehensive view of your financial health with key metrics" },
                        { icon: TrendingUp, title: "Retirement score", desc: "Evaluate your retirement readiness and track your progress" },
                        { icon: Banknote, title: "Debt payoff planner", desc: "Create a strategic plan to become debt-free faster" },
                        { icon: LineChart, title: "Financial independence", desc: "Calculate your path to financial freedom and early retirement" },
                        { icon: Home, title: "Mortgage affordability", desc: "Calculate how much house you can afford based on your income and expenses" },
                        { icon: DollarSign, title: "Compound interest", desc: "Visualize the power of compound interest and long-term investing" },
                        { icon: PieChart, title: "Portfolio analysis", desc: "Analyze your investment portfolio's allocation, risk, and expected returns" }
                    ].map((tool, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="p-6">
                                <tool.icon className="w-8 h-8 mb-4 text-blue-600" />
                                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                                <p className="text-gray-600 text-sm">{tool.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">🌱</span>
                                </div>
                                <span className="text-xl font-semibold">PlanWise</span>
                            </div>
                            <p className="text-gray-600">Personal finance management for the modern age.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Community</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Twitter</li>
                                <li>Email</li>
                                <li>Affiliate program</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Financial tools</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Net worth calculator</li>
                                <li>Emergency fund calculator</li>
                                <li>Financial planner</li>
                                <li>Health metrics</li>
                                <li>Retirement score</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t mt-8 pt-8 text-center text-gray-600">
                        Copyright © 2025 PlanWise. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}
