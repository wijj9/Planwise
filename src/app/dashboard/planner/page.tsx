"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Plus, Trash2, X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

// Mock forecast data
const forecastData = [
    { year: 2024, income: 88200, expenses: 74445, netWorth: 94808 },
    { year: 2025, income: 90846, expenses: 125934, netWorth: 72150 },
    { year: 2026, income: 93571, expenses: 77452, netWorth: 101755 },
    { year: 2027, income: 96379, expenses: 79001, netWorth: 133789 },
    { year: 2028, income: 99270, expenses: 80581, netWorth: 168429 },
    { year: 2029, income: 102248, expenses: 82193, netWorth: 205863 },
    { year: 2030, income: 105315, expenses: 83837, netWorth: 246095 },
    { year: 2031, income: 108475, expenses: 85514, netWorth: 289316 },
    { year: 2032, income: 111729, expenses: 87224, netWorth: 335437 },
    { year: 2033, income: 115081, expenses: 88968, netWorth: 384727 }
]

export default function FinancialPlannerPage() {
    const [showSaveDialog, setShowSaveDialog] = useState(false)
    const [planName, setPlanName] = useState("")
    const [forecastYears, setForecastYears] = useState([10])
    const [futureEvents, setFutureEvents] = useState([
        { name: "New car", cost: "50000", year: "2025", recurring: false }
    ])

    const [currentStatus, setCurrentStatus] = useState({
        annualIncome: "88200",
        currentAssets: "134808",
        currentLiabilities: "40000",
        annualExpenses: "74445"
    })

    const [forecastParams, setForecastParams] = useState({
        incomeGrowth: "3",
        assetGrowth: "5",
        expenseGrowth: "2"
    })

    const addFutureEvent = () => {
        setFutureEvents([...futureEvents, { name: "", cost: "", year: "", recurring: false }])
    }

    const removeFutureEvent = (index: number) => {
        setFutureEvents(futureEvents.filter((_, i) => i !== index))
    }

    const updateFutureEvent = (index: number, field: string, value: string | boolean) => {
        const updated = [...futureEvents]
        updated[index] = { ...updated[index], [field]: value }
        setFutureEvents(updated)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Financial planner</h1>
                <Button
                    className="bg-gray-600 text-white hover:bg-gray-700"
                    onClick={() => setShowSaveDialog(true)}
                >
                    Save plan
                </Button>
            </div>

            {/* Current Financial Status */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Current financial status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="annual-income" className="text-gray-400">Annual net income</Label>
                            <Input
                                id="annual-income"
                                value={currentStatus.annualIncome}
                                onChange={(e) => setCurrentStatus({...currentStatus, annualIncome: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="current-assets" className="text-gray-400">Current assets</Label>
                            <Input
                                id="current-assets"
                                value={currentStatus.currentAssets}
                                onChange={(e) => setCurrentStatus({...currentStatus, currentAssets: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="current-liabilities" className="text-gray-400">Current liabilities</Label>
                            <Input
                                id="current-liabilities"
                                value={currentStatus.currentLiabilities}
                                onChange={(e) => setCurrentStatus({...currentStatus, currentLiabilities: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="annual-expenses" className="text-gray-400">Annual expenses</Label>
                            <Input
                                id="annual-expenses"
                                value={currentStatus.annualExpenses}
                                onChange={(e) => setCurrentStatus({...currentStatus, annualExpenses: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Forecast Parameters */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Forecast parameters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="income-growth" className="text-gray-400">Income growth rate (%)</Label>
                            <Input
                                id="income-growth"
                                value={forecastParams.incomeGrowth}
                                onChange={(e) => setForecastParams({...forecastParams, incomeGrowth: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="asset-growth" className="text-gray-400">Asset growth rate (%)</Label>
                            <Input
                                id="asset-growth"
                                value={forecastParams.assetGrowth}
                                onChange={(e) => setForecastParams({...forecastParams, assetGrowth: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="expense-growth" className="text-gray-400">Expense growth rate (%)</Label>
                            <Input
                                id="expense-growth"
                                value={forecastParams.expenseGrowth}
                                onChange={(e) => setForecastParams({...forecastParams, expenseGrowth: e.target.value})}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-400">Forecast years: {forecastYears[0]}</Label>
                            <Slider
                                value={forecastYears}
                                onValueChange={setForecastYears}
                                max={30}
                                min={1}
                                step={1}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Future Events */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Future events</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-gray-800 hover:bg-transparent">
                                <TableHead className="text-gray-400">Event name</TableHead>
                                <TableHead className="text-gray-400">Cost</TableHead>
                                <TableHead className="text-gray-400">Year</TableHead>
                                <TableHead className="text-gray-400">Recurring yearly</TableHead>
                                <TableHead className="text-gray-400 w-12"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {futureEvents.map((event, index) => (
                                <TableRow key={index} className="border-gray-800">
                                    <TableCell>
                                        <Input
                                            value={event.name}
                                            onChange={(e) => updateFutureEvent(index, "name", e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="Event name"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            value={event.cost}
                                            onChange={(e) => updateFutureEvent(index, "cost", e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="Cost"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            value={event.year}
                                            onChange={(e) => updateFutureEvent(index, "year", e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="Year"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox
                                            checked={event.recurring}
                                            onCheckedChange={(checked) => updateFutureEvent(index, "recurring", checked)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeFutureEvent(index)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <Button
                        variant="outline"
                        onClick={addFutureEvent}
                        className="mt-4 border-gray-700 text-gray-400 hover:text-white"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add event
                    </Button>
                </CardContent>
            </Card>

            {/* Forecast Results */}
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Forecast Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 mb-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={forecastData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="year" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#1f2937",
                                        border: "1px solid #374151",
                                        borderRadius: "8px"
                                    }}
                                />
                                <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="expenses" stroke="#10b981" strokeWidth={2} />
                                <Line type="monotone" dataKey="netWorth" stroke="#f59e0b" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex gap-6 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500"></div>
                            <span className="text-gray-400">Income</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500"></div>
                            <span className="text-gray-400">Expenses</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500"></div>
                            <span className="text-gray-400">Net Worth</span>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="border-gray-800 hover:bg-transparent">
                                <TableHead className="text-gray-400">Year</TableHead>
                                <TableHead className="text-gray-400">Income</TableHead>
                                <TableHead className="text-gray-400">Expenses</TableHead>
                                <TableHead className="text-gray-400">Net worth</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {forecastData.slice(0, 5).map((data, index) => (
                                <TableRow key={index} className="border-gray-800">
                                    <TableCell className="text-white">{data.year}</TableCell>
                                    <TableCell className="text-white">€{data.income.toLocaleString()}</TableCell>
                                    <TableCell className="text-white">€{data.expenses.toLocaleString()}</TableCell>
                                    <TableCell className="text-white">€{data.netWorth.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Save Plan Dialog */}
            <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Save Financial Plan</DialogTitle>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-4 top-4 text-gray-400 hover:text-white"
                            onClick={() => setShowSaveDialog(false)}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="plan-name" className="text-gray-400">Plan name</Label>
                            <Input
                                id="plan-name"
                                value={planName}
                                onChange={(e) => setPlanName(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white mt-1"
                                placeholder="Enter plan name"
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setShowSaveDialog(false)}
                                className="border-gray-700 text-gray-400 hover:text-white"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    setShowSaveDialog(false)
                                    setPlanName("")
                                }}
                                className="bg-white text-black hover:bg-gray-100"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
