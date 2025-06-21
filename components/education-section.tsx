"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Plus } from "lucide-react"

interface Education {
  id: number
  school: string
  degree: string
  duration: string
}

interface EducationSectionProps {
  education: Education[]
  onUpdate: (value: Education[]) => void
}

export function EducationSection({ education, onUpdate }: EducationSectionProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education
        </CardTitle>
        <Button variant="ghost" size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-6 last:pb-0">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{edu.school}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.duration}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
