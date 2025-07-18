"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus } from "lucide-react"

export default function FinancialToolsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Financial tools</h1>
                <Button className="bg-white text-black hover:bg-gray-100">
                    <Plus className="w-4 h-4 mr-2" />
                    Create new plan
                </Button>
            </div>

            {/* Tools Table */}
            <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-gray-800 hover:bg-transparent">
                                <TableHead className="text-gray-400 font-medium">Name</TableHead>
                                <TableHead className="text-gray-400 font-medium">Tool type</TableHead>
                                <TableHead className="text-gray-400 font-medium text-right">Created</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Empty state - no tools created yet */}
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-16 text-gray-400">
                                    <div className="space-y-4">
                                        <div className="text-lg">No financial tools created yet</div>
                                        <div className="text-sm">
                                            Create your first financial planning tool to get started
                                        </div>
                                        <Button className="bg-white text-black hover:bg-gray-100 mt-4">
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create your first plan
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
