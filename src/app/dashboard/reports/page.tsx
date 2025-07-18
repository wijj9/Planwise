"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Calendar, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for monthly expenses
const monthlyExpensesData = [
    {
        period: "11/18/2024",
        totalExpenses: "€10,978.99",
        vsLastMonth: 41.8,
        topCategory: "Groceries",
        savingsRate: "20.4%"
    }
]

// Mock data for investment portfolio
const portfolioData = [
    { name: "Safe Assets", value: 77637.5, color: "#3b82f6", percentage: 57.6, target: 61.2 },
    { name: "Growth Assets", value: 35800.0, color: "#10b981", percentage: 26.6, target: 34.4 },
    { name: "Speculative Assets", value: 21370.0, color: "#f59e0b", percentage: 15.9, target: 5.0 }
]

// Mock data for expense categories
const expenseCategories = [
    { category: "Groceries", amount: 2395.20, percentage: 100 },
    { category: "Minimum Debt Payments", amount: 1500.00, percentage: 60 },
    { category: "Dining Out", amount: 1279.46, percentage: 50 },
    { category: "Housing", amount: 1200.00, percentage: 48 },
    { category: "Transportation", amount: 1065.55, percentage: 42 },
    { category: "Investments", amount: 1000.00, percentage: 40 },
    { category: "Shopping", amount: 705.71, percentage: 28 }
]

export default function ReportsPage() {
    const [showExpenseReport, setShowExpenseReport] = useState(false)
    const [showInvestmentReport, setShowInvestmentReport] = useState(false)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Financial reports</h1>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="monthly-expenses" className="space-y-6">
                <TabsList className="bg-gray-800 border-gray-700">
                    <TabsTrigger value="monthly-expenses" className="text-white data-[state=active]:bg-gray-900">
                        Monthly expenses
                    </TabsTrigger>
                    <TabsTrigger value="investment-portfolio" className="text-white data-[state=active]:bg-gray-900">
                        Investment portfolio
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly-expenses" className="space-y-6">
                    {/* Next Report Notice */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">
                12 days until your next monthly report
              </span>
                        </div>
                    </div>

                    {/* Monthly Expenses Table */}
                    <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-gray-800 hover:bg-transparent">
                                        <TableHead className="text-gray-400 font-medium">Period</TableHead>
                                        <TableHead className="text-gray-400 font-medium">Total Expenses</TableHead>
                                        <TableHead className="text-gray-400 font-medium">vs Last Month</TableHead>
                                        <TableHead className="text-gray-400 font-medium">Top Category</TableHead>
                                        <TableHead className="text-gray-400 font-medium">Savings Rate</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {monthlyExpensesData.map((data, index) => (
                                        <TableRow
                                            key={index}
                                            className="border-gray-800 hover:bg-gray-800 cursor-pointer"
                                            onClick={() => setShowExpenseReport(true)}
                                        >
                                            <TableCell className="text-white font-medium">{data.period}</TableCell>
                                            <TableCell className="text-white">{data.totalExpenses}</TableCell>
                                            <TableCell className="text-red-500 flex items-center gap-1">
                                                <TrendingUp className="w-4 h-4" />
                                                {data.vsLastMonth}%
                                            </TableCell>
                                            <TableCell className="text-white">{data.topCategory}</TableCell>
                                            <TableCell className="text-white">{data.savingsRate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="investment-portfolio" className="space-y-6">
                    {/* Investment Portfolio Overview */}
                    <Card className="bg-gray-900 border-gray-800" onClick={() => setShowInvestmentReport(true)}>
                        <CardHeader>
                            <CardTitle className="text-white">Portfolio Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Total Value</div>
                                    <div className="text-2xl font-bold text-white">€134,807.50</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Monthly Change</div>
                                    <div className="text-xl font-bold text-green-500">+176.0%</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Portfolio Fit</div>
                                    <div className="text-xl font-bold text-white">68.1/100</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={portfolioData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                dataKey="value"
                                            >
                                                {portfolioData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="space-y-4">
                                    {portfolioData.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-400">{item.name}</span>
                                                <span className="text-white">{item.percentage}% vs {item.target}%</span>
                                            </div>
                                            <Progress
                                                value={item.percentage}
                                                className="h-2"
                                                style={{
                                                    backgroundColor: "#374151"
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-6">
                                {portfolioData.map((item, index) => (
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
                </TabsContent>
            </Tabs>

            {/* Financial Report Dialog */}
            <Dialog open={showExpenseReport} onOpenChange={setShowExpenseReport}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle>Financial Report - 11/18/2024</DialogTitle>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowExpenseReport(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </DialogHeader>
                    <div className="space-y-6">
                        {/* Summary */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Summary</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Income</div>
                                    <div className="text-xl font-bold">€13,800.00</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Expenses</div>
                                    <div className="text-xl font-bold">€10,978.99</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Net Savings</div>
                                    <div className="text-xl font-bold text-green-500">€2,821.01</div>
                                </div>
                            </div>
                        </div>

                        {/* Expense Categories */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
                            <div className="space-y-3">
                                {expenseCategories.map((category, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">{category.category}</span>
                                            <span className="text-white">€{category.amount.toFixed(2)}</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-white h-2 rounded-full"
                                                style={{ width: `${category.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Investment Report Dialog */}
            <Dialog open={showInvestmentReport} onOpenChange={setShowInvestmentReport}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle>Investment Report - 11/18/2024</DialogTitle>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowInvestmentReport(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </DialogHeader>
                    <div className="space-y-6">
                        {/* Portfolio Overview */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Portfolio Overview</h3>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Total Value</div>
                                    <div className="text-xl font-bold">€134,807.50</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Monthly Change</div>
                                    <div className="text-xl font-bold text-green-500">+176.0%</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Portfolio Fit</div>
                                    <div className="text-xl font-bold">68.1/100</div>
                                </div>
                            </div>
                        </div>

                        {/* Asset Allocation */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
                            <div className="flex justify-center mb-6">
                                <div className="w-48 h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={portfolioData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                dataKey="value"
                                            >
                                                {portfolioData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {portfolioData.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="w-3 h-3 rounded-sm"
                                                    style={{ backgroundColor: item.color }}
                                                ></div>
                                                <span className="text-gray-400">{item.name}</span>
                                            </div>
                                            <span className="text-white">{item.percentage}% vs {item.target}%</span>
                                        </div>
                                        <Progress value={item.percentage} className="h-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
