"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Briefcase, BookOpen } from "lucide-react"

export function SidebarWidget() {
  const suggestions = [
    {
      title: "Complete your profile",
      description: "Add 2 more experiences to get noticed by recruiters",
      icon: <Users className="h-4 w-4" />,
      progress: 80,
    },
    {
      title: "Follow industry leaders",
      description: "Stay updated with the latest trends",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Join professional groups",
      description: "Connect with like-minded professionals",
      icon: <Briefcase className="h-4 w-4" />,
    },
  ]

  const trendingTopics = ["#ReactJS", "#TypeScript", "#WebDevelopment", "#AI", "#RemoteWork"]

  return (
    <div className="space-y-6">
      {/* Profile Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Suggestions for you</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">{suggestion.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-gray-900 dark:text-white">{suggestion.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{suggestion.description}</p>
                  {suggestion.progress && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full"
                          style={{ width: `${suggestion.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{suggestion.progress}% complete</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900">
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Learning
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-gray-900 dark:text-white">Recommended courses</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Advanced React Patterns</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">System Design Fundamentals</p>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View all courses
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
