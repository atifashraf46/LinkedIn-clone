"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Save, X, User } from "lucide-react"

interface AboutSectionProps {
  about: string
  onUpdate: (value: string) => void
}

export function AboutSection({ about, onUpdate }: AboutSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(about)

  const handleSave = () => {
    onUpdate(editValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(about)
    setIsEditing(false)
  }

  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <User className="h-5 w-5 text-blue-600" />
          About
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          <Edit className="h-4 w-4 text-blue-600" />
        </Button>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              rows={6}
              placeholder="Write about yourself..."
              className="border-2 border-blue-200 focus:border-blue-500 rounded-lg"
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancel} className="rounded-full">
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">{about}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
