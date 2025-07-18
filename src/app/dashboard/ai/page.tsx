"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

interface ChatMessage {
    id: string
    text: string
    isUser: boolean
    timestamp: Date
}

export default function AIAssistantPage() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "1",
            text: "how much did I earn this month including salary and other income sources",
            isUser: true,
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const sendMessage = async () => {
        if (!inputMessage.trim()) return

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text: inputMessage,
            isUser: true,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInputMessage("")
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: "Based on your financial data, your total earnings this month including your salary of €3,000 and other income sources amounts to €3,428.50. This includes your monthly salary plus €428.50 from various other income streams such as investments and side income.",
                isUser: false,
                timestamp: new Date()
            }
            setMessages(prev => [...prev, aiResponse])
            setIsTyping(false)
        }, 2000)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className="h-[calc(100vh-12rem)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">AI assistant</h1>
                <div className="text-sm text-gray-400">
                    10 AI requests remaining
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-2xl px-4 py-3 rounded-lg ${
                                message.isUser
                                    ? "bg-white text-black ml-12"
                                    : "bg-gray-800 text-white mr-12"
                            }`}
                        >
                            {!message.isUser && (
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                        <span className="text-xs">AI</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                                    </div>
                                </div>
                            )}
                            <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-gray-800 text-white max-w-2xl px-4 py-3 rounded-lg mr-12">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-xs">AI</span>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400">AI is thinking...</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="relative">
                <div className="flex gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus-visible:ring-0"
                    />
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white"
                        >
                            🎯
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white"
                        >
                            🗂️
                        </Button>
                        <Button
                            onClick={sendMessage}
                            disabled={!inputMessage.trim() || isTyping}
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">
                    This product is in alpha and may not work as expected.
                </div>
            </div>
        </div>
    )
}
