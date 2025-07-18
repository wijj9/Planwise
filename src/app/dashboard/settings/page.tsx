"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Shield, CreditCard } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-gray-400 mt-2">Manage your account preferences and privacy settings</p>
            </div>

            <div className="grid gap-6">
                {/* Profile Settings */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2">
                        <User className="w-5 h-5 text-gray-400" />
                        <CardTitle className="text-white">Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="first-name" className="text-gray-400">First name</Label>
                                <Input
                                    id="first-name"
                                    defaultValue="John"
                                    className="bg-gray-800 border-gray-700 text-white mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="last-name" className="text-gray-400">Last name</Label>
                                <Input
                                    id="last-name"
                                    defaultValue="Doe"
                                    className="bg-gray-800 border-gray-700 text-white mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-gray-400">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue="john.doe@example.com"
                                    className="bg-gray-800 border-gray-700 text-white mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="currency" className="text-gray-400">Currency</Label>
                                <Input
                                    id="currency"
                                    defaultValue="EUR (€)"
                                    className="bg-gray-800 border-gray-700 text-white mt-1"
                                />
                            </div>
                        </div>
                        <Button className="bg-white text-black hover:bg-gray-100">
                            Save Changes
                        </Button>
                    </CardContent>
                </Card>

                {/* Notifications */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2">
                        <Bell className="w-5 h-5 text-gray-400" />
                        <CardTitle className="text-white">Notifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-medium">Email notifications</div>
                                <div className="text-sm text-gray-400">Receive email updates about your financial health</div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-medium">Monthly reports</div>
                                <div className="text-sm text-gray-400">Get monthly financial summary reports</div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-medium">Budget alerts</div>
                                <div className="text-sm text-gray-400">Alerts when you exceed budget categories</div>
                            </div>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>

                {/* Privacy & Security */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2">
                        <Shield className="w-5 h-5 text-gray-400" />
                        <CardTitle className="text-white">Privacy & Security</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-medium">Data encryption</div>
                                <div className="text-sm text-gray-400">End-to-end encryption for all financial data</div>
                            </div>
                            <Switch defaultChecked disabled />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-medium">Two-factor authentication</div>
                                <div className="text-sm text-gray-400">Add an extra layer of security to your account</div>
                            </div>
                            <Switch />
                        </div>
                        <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white">
                            Change Password
                        </Button>
                    </CardContent>
                </Card>

                {/* Subscription */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <CardTitle className="text-white">Subscription</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-medium">Current Plan</div>
                                <div className="text-sm text-gray-400">Free - 14 days remaining in trial</div>
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                Upgrade Plan
                            </Button>
                        </div>
                        <div className="text-sm text-gray-400">
                            Your trial expires in 14 days. Upgrade to continue accessing all features.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
