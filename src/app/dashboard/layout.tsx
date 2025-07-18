"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    BarChart3,
    Calculator,
    MessageSquare,
    FileText,
    Settings,
    Menu,
    X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: BarChart3, label: "Financial tools", href: "/dashboard/tools" },
    { icon: Calculator, label: "Financial planner", href: "/dashboard/planner" },
    { icon: MessageSquare, label: "AI assistant", href: "/dashboard/ai" },
    { icon: FileText, label: "Reports", href: "/dashboard/reports" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Mobile header */}
            <div className="lg:hidden bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-gray-900 text-xs font-bold">🌱</span>
                    </div>
                    <span className="font-semibold">PlanWise</span>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside className={cn(
                    "w-64 bg-gray-900 border-r border-gray-800 min-h-screen transition-transform duration-300 ease-in-out",
                    "lg:translate-x-0 fixed lg:relative z-50",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}>
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-800 hidden lg:block">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-gray-900 text-sm font-bold">🌱</span>
                            </div>
                            <span className="text-xl font-semibold">PlanWise</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-2">
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== "/dashboard" && pathname.startsWith(item.href))

                            return (
                                <Link key={item.href} href={item.href}>
                                    <div className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                                        isActive
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                                    )}>
                                        <item.icon size={20} />
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </nav>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main content */}
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
