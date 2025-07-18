"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip
} from "recharts"
import {
    TrendingUp,
    TrendingDown,
    Plus,
    MoreHorizontal,
    Eye,
    BarChart3,
    List
} from "lucide-react"

// Mock data matching the screenshots
const assetsData = [
    { name: "ETF", value: 45, color: "#f59e0b" },
    { name: "Cash", value: 25, color: "#8b5cf6" },
    { name: "Stock", value: 15, color: "#3b82f6" },
    { name: "Cryptocurrency", value: 10, color: "#10b981" },
    { name: "Bond", value: 5, color: "#ef4444" }
]

const liabilitiesData = [
    { name: "Home Mortgage", value: 50, color: "#ef4444" },
    { name: "Car Loan", value: 30, color: "#f59e0b" },
    { name: "Student Loan", value: 20, color: "#10b981" }
]

const budgetData = [
    { month: "Aug", needs: 2500, wants: 800, savings: 500, leftover: 200 },
    { month: "Sep", needs: 4500, wants: 1200, savings: 800, leftover: 500 },
    { month: "Oct", needs: 4200, wants: 1000, savings: 1200, leftover: 600 },
    { month: "Nov", needs: 5500, wants: 1500, savings: 1700, leftover: 6194 }
]

const netWorthData = [
    { date: "14/10", value: -5000 },
    { date: "21/10", value: 8000 },
    { date: "28/10", value: -13050 },
    { date: "04/11", value: 15000 },
    { date: "11/11", value: 25000 },
    { date: "18/11", value: 27577 }
]

const transactions = [
    { date: "18/11/2024", description: "Groceries - November", category: "Groceries", amount: -196.97 },
    { date: "17/11/2024", description: "Groceries - November", category: "Groceries", amount: -219.93 },
    { date: "17/11/2024", description: "Monthly Salary", category: "Salary", amount: 3000.00 },
    { date: "17/11/2024", description: "Monthly Mortgage Payment", category: "Minimum Debt Payments", amount: -500.00 },
    { date: "17/11/2024", description: "Lunch with colleagues", category: "Dining Out", amount: -28.50 }
]

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Header with trial notice */}
            <div className="text-center">
                <div className="bg-gray-800 rounded-lg px-4 py-2 inline-block">
          <span className="text-sm text-gray-300">
            14 days left in your free trial ·
            <button className="text-white ml-1 underline">Upgrade now</button>
          </span>
                </div>
            </div>

            {/* Page Title */}
            <div>
                <h1 className="text-3xl font-bold mb-2">Financial dashboard</h1>
            </div>

            {/* Net Worth Alert */}
            <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">
            Your net worth has increased by
            <span className="text-green-500 font-semibold ml-1">1.55% (€421.34)</span>
            over the past week.
          </span>
                </div>
            </div>

            {/* Health Metrics */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Health metrics</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Savings Rate */}
                        <div className="text-center">
                            <div className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-1">
                                Savings rate
                                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">i</span>
                                </div>
                            </div>
                            <div className="relative w-20 h-20 mx-auto mb-2">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent"
                                         style={{ transform: "rotate(-90deg)" }}>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">3.1%</span>
                                </div>
                            </div>
                            <div className="text-sm text-red-500">Needs improvement</div>
                        </div>

                        {/* Debt-to-income */}
                        <div className="text-center">
                            <div className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-1">
                                Debt-to-income
                                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">i</span>
                                </div>
                            </div>
                            <div className="relative w-20 h-20 mx-auto mb-2">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-green-500 border-r-transparent border-b-transparent"
                                         style={{ transform: "rotate(-90deg)" }}>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">9.2%</span>
                                </div>
                            </div>
                            <div className="text-sm text-green-500">Excellent</div>
                        </div>

                        {/* Emergency fund */}
                        <div className="text-center">
                            <div className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-1">
                                Emergency fund
                                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">i</span>
                                </div>
                            </div>
                            <div className="relative w-20 h-20 mx-auto mb-2">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-green-500 border-r-transparent border-b-transparent"
                                         style={{ transform: "rotate(-90deg)" }}>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">7.0m</span>
                                </div>
                            </div>
                            <div className="text-sm text-green-500">Excellent</div>
                        </div>

                        {/* Net worth */}
                        <div className="text-center">
                            <div className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-1">
                                Net worth
                                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">i</span>
                                </div>
                            </div>
                            <div className="relative w-20 h-20 mx-auto mb-2">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-r-transparent border-b-transparent border-l-transparent"
                                         style={{ transform: "rotate(-90deg)" }}>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">61.7%</span>
                                </div>
                            </div>
                            <div className="text-sm text-yellow-500">Below target</div>
                        </div>

                        {/* Portfolio fit */}
                        <div className="text-center">
                            <div className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-1">
                                Portfolio fit
                                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">i</span>
                                </div>
                            </div>
                            <div className="relative w-20 h-20 mx-auto mb-2">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-gray-500 border-r-transparent border-b-transparent"
                                         style={{ transform: "rotate(-90deg)" }}>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">68.1%</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">Increase risk</div>
                        </div>

                        {/* Financial independence */}
                        <div className="text-center">
                            <div className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-1">
                                Financial independence
                                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">i</span>
                                </div>
                            </div>
                            <div className="relative w-20 h-20 mx-auto mb-2">
                                <div className="w-20 h-20 rounded-full border-4 border-gray-700 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-green-500 border-r-transparent border-b-transparent border-l-transparent"
                                         style={{ transform: "rotate(-90deg)" }}>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">4.4%</span>
                                </div>
                            </div>
                            <div className="text-sm text-green-500">Building wealth</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Net Worth Chart */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white">Net Worth</CardTitle>
                    <Eye className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-white mb-4">€27,577.38</div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={netWorthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="date" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#1f2937",
                                        border: "1px solid #374151",
                                        borderRadius: "8px"
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    fill="#10b981"
                                    fillOpacity={0.3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4 inline mr-1 text-green-500" />
                        Your net worth has increased by <span className="text-green-500">1.55% (€421.34)</span> over the past week.
                    </div>
                </CardContent>
            </Card>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Assets Overview */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-white">Assets overview</CardTitle>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <Plus className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={assetsData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        dataKey="value"
                                    >
                                        {assetsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {assetsData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-400">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Liabilities Overview */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-white">Liabilities overview</CardTitle>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <Plus className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={liabilitiesData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        dataKey="value"
                                    >
                                        {liabilitiesData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {liabilitiesData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-400">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Row */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Budget Overview */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-white">Budget overview</CardTitle>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <BarChart3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <List className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={budgetData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="month" stroke="#9ca3af" />
                                    <YAxis stroke="#9ca3af" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1f2937",
                                            border: "1px solid #374151",
                                            borderRadius: "8px"
                                        }}
                                    />
                                    <Bar dataKey="needs" stackId="a" fill="#8b5cf6" />
                                    <Bar dataKey="wants" stackId="a" fill="#10b981" />
                                    <Bar dataKey="savings" stackId="a" fill="#f59e0b" />
                                    <Bar dataKey="leftover" stackId="a" fill="#ef4444" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-purple-500"></div>
                                <span className="text-sm text-gray-400">Needs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                                <span className="text-sm text-gray-400">Wants</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                                <span className="text-sm text-gray-400">Savings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-red-500"></div>
                                <span className="text-sm text-gray-400">Leftover</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Transactions */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-white">Recent transactions</CardTitle>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <Plus className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="grid grid-cols-4 text-sm text-gray-400 font-medium border-b border-gray-800 pb-2">
                                <div>Date</div>
                                <div>Description</div>
                                <div>Category</div>
                                <div className="text-right">Amount</div>
                            </div>
                            {transactions.map((transaction, index) => (
                                <div key={index} className="grid grid-cols-4 text-sm py-2">
                                    <div className="text-gray-400">{transaction.date}</div>
                                    <div className="text-white">{transaction.description}</div>
                                    <div className="text-gray-400">{transaction.category}</div>
                                    <div className={`text-right font-medium ${
                                        transaction.amount > 0 ? "text-green-500" : "text-red-500"
                                    }`}>
                                        €{Math.abs(transaction.amount).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
