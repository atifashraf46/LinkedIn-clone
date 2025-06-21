"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Plus, Save, X, Briefcase, Building, MapPin, Calendar } from "lucide-react"

interface Experience {
  id: number
  title: string
  company: string
  duration: string
  location: string
  description: string
}

interface ExperienceSectionProps {
  experience: Experience[]
  onUpdate: (value: Experience[]) => void
}

export function ExperienceSection({ experience, onUpdate }: ExperienceSectionProps) {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Experience>>({})

  const handleEdit = (exp: Experience) => {
    setEditingId(exp.id)
    setEditForm(exp)
  }

  const handleSave = () => {
    if (editingId) {
      const updated = experience.map((exp) => (exp.id === editingId ? { ...exp, ...editForm } : exp))
      onUpdate(updated)
    }
    setEditingId(null)
    setEditForm({})
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditForm({})
  }

  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <Briefcase className="h-5 w-5 text-blue-600" />
          Experience
        </CardTitle>
        <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
          <Plus className="h-4 w-4 text-blue-600" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className={`${index !== experience.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-6" : ""}`}
          >
            {editingId === exp.id ? (
              <div className="space-y-4">
                <Input
                  value={editForm.title || ""}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  placeholder="Job title"
                  className="border-2 border-blue-200 focus:border-blue-500"
                />
                <Input
                  value={editForm.company || ""}
                  onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                  placeholder="Company"
                  className="border-2 border-blue-200 focus:border-blue-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={editForm.duration || ""}
                    onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                    placeholder="Duration"
                    className="border-2 border-blue-200 focus:border-blue-500"
                  />
                  <Input
                    value={editForm.location || ""}
                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    placeholder="Location"
                    className="border-2 border-blue-200 focus:border-blue-500"
                  />
                </div>
                <Textarea
                  value={editForm.description || ""}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  placeholder="Description"
                  rows={3}
                  className="border-2 border-blue-200 focus:border-blue-500"
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleSave}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  >
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
              <div className="flex gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 font-semibold flex items-center gap-2">
                        <Building className="h-4 w-4 text-blue-600" />
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(exp)}
                      className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Edit className="h-4 w-4 text-blue-600" />
                    </Button>
                  </div>
                  <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
