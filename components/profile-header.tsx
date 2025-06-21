"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Camera, Mail } from "lucide-react"
import { EditableField } from "@/components/editable-field"
import Image from "next/image"

interface ProfileHeaderProps {
  userData: {
    name: string
    title: string
    location: string
    connections: number
    profileImage: string
    coverImage: string
  }
  onUpdate: (field: string, value: any) => void
}

export function ProfileHeader({ userData, onUpdate }: ProfileHeaderProps) {
  return (
    <Card className="overflow-hidden shadow-lg border-0 bg-white dark:bg-gray-800">
      {/* Enhanced Cover Image with Gradient Overlay */}
      <div className="relative h-52 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        {/* Subtle dotted pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
        >
          <Camera className="h-4 w-4" />
        </Button>

        {/* Professional Pattern Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <CardContent className="relative px-6 pb-6">
        {/* Enhanced Profile Image */}
        <div className="relative -mt-20 mb-6">
          <div className="relative w-36 h-36 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-1">
                <Image
                  src={userData.profileImage || "/placeholder.svg"}
                  alt={userData.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Camera className="h-4 w-4 text-blue-600" />
            </Button>

            {/* Online Status Indicator */}
            <div className="absolute bottom-4 right-12 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Profile Info */}
        <div className="text-center lg:text-left space-y-4">
          <div className="space-y-2">
            <EditableField
              value={userData.name}
              onSave={(value) => onUpdate("name", value)}
              className="text-3xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              placeholder="Your name"
            />

            <EditableField
              value={userData.title}
              onSave={(value) => onUpdate("title", value)}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
              placeholder="Your professional title"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <EditableField
                value={userData.location}
                onSave={(value) => onUpdate("location", value)}
                className="text-sm font-medium"
                placeholder="Your location"
              />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{userData.connections}+ connections</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="font-medium">Contact info</span>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              Connect
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-6 py-2 rounded-full"
            >
              Message
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold px-6 py-2 rounded-full"
            >
              More
            </Button>
          </div>

          {/* Professional Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4">
            <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
              Open to work
            </div>
            <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
              Available for freelance
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileHeader
