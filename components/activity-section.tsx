"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, MessageCircle, Heart } from "lucide-react"

interface ActivityItem {
  id: number
  type: "post" | "like" | "comment"
  content: string
  timestamp: string
}

interface ActivitySectionProps {
  activities: ActivityItem[]
}

export function ActivitySection({ activities }: ActivitySectionProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "post":
        return <Activity className="h-4 w-4" />
      case "like":
        return <Heart className="h-4 w-4" />
      case "comment":
        return <MessageCircle className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "post":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "like":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "comment":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className={`${getActivityColor(activity.type)} flex items-center gap-1`}>
                {getActivityIcon(activity.type)}
                {activity.type}
              </Badge>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{activity.content}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{activity.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
