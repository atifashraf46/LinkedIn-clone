"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, MessageCircle } from "lucide-react"
import Image from "next/image"

interface ConnectionsSectionProps {
  connections: number
}

export function ConnectionsSection({ connections }: ConnectionsSectionProps) {
  const recentConnections = [
    {
      name: "Ahmed Ali",
      title: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      mutualConnections: 12,
    },
    {
      name: "Fatima Khan",
      title: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      mutualConnections: 8,
    },
    {
      name: "Hassan Sheikh",
      title: "Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      mutualConnections: 15,
    },
    {
      name: "Ayesha Malik",
      title: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      mutualConnections: 6,
    },
  ]

  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-gray-800">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
          <Users className="h-5 w-5 text-blue-600" />
          Connections
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{connections}+</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">connections</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Recent connections</h4>
          {recentConnections.map((connection, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="relative">
                <Image
                  src={connection.image || "/placeholder.svg"}
                  alt={connection.name}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-200"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{connection.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{connection.title}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  {connection.mutualConnections} mutual connections
                </p>
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <MessageCircle className="h-4 w-4 text-blue-600" />
              </Button>
            </div>
          ))}
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full"
          variant="outline"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          View all connections
        </Button>
      </CardContent>
    </Card>
  )
}
