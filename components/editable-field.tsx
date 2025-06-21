"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Edit, Save, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface EditableFieldProps {
  value: string
  onSave: (value: string) => void
  className?: string
  placeholder?: string
  multiline?: boolean
}

export function EditableField({ value, onSave, className, placeholder, multiline = false }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)

  const handleSave = () => {
    onSave(editValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(value)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
          onKeyPress={(e) => {
            if (e.key === "Enter" && !multiline) {
              handleSave()
            }
          }}
          autoFocus
        />
        <Button size="sm" onClick={handleSave}>
          <Save className="h-3 w-3" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleCancel}>
          <X className="h-3 w-3" />
        </Button>
      </div>
    )
  }

  return (
    <div className="group flex items-center gap-2">
      <span className={cn("flex-1", className)}>{value || placeholder}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit className="h-3 w-3" />
      </Button>
    </div>
  )
}
