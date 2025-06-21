"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, X, Save, Edit, Code, Star } from "lucide-react"

interface SkillsSectionProps {
  skills: string[]
  onUpdate: (value: string[]) => void
}

export function SkillsSection({ skills, onUpdate }: SkillsSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newSkill, setNewSkill] = useState("")
  const [editSkills, setEditSkills] = useState(skills)

  const handleAddSkill = () => {
    if (newSkill.trim() && !editSkills.includes(newSkill.trim())) {
      setEditSkills([...editSkills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setEditSkills(editSkills.filter((skill) => skill !== skillToRemove))
  }

  const handleSave = () => {
    onUpdate(editSkills)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditSkills(skills)
    setNewSkill("")
    setIsEditing(false)
  }

  const getSkillColor = (skill: string) => {
    const colors = [
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    ]
    return colors[skill.length % colors.length]
  }

  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <Code className="h-5 w-5 text-blue-600" />
          Skills
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
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a skill"
                onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                className="border-2 border-blue-200 focus:border-blue-500"
              />
              <Button onClick={handleAddSkill} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {editSkills.map((skill) => (
                <Badge
                  key={skill}
                  className={`${getSkillColor(skill)} flex items-center gap-1 px-3 py-1 text-sm font-medium`}
                >
                  {skill}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>

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
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                className={`${getSkillColor(skill)} px-3 py-2 text-sm font-medium hover:shadow-md transition-shadow cursor-pointer`}
              >
                <Star className="h-3 w-3 mr-1" />
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
