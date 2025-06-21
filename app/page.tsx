"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import ProfileHeader from "@/components/profile-header"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ConnectionsSection } from "@/components/connections-section"
import { ActivitySection } from "@/components/activity-section"
import { SidebarWidget } from "@/components/sidebar-widget"
import { ThemeToggle } from "@/components/theme-toggle"

// Mock user data
const initialUserData = {
  name: "Mohammad Atif Hussain",
  title: "Full Stack Developer | MERN Stack | React.js | Node.js | MongoDB | Express.js",
  location: "Karachi, Sindh, Pakistan",
  connections: 500,
  profileImage: "/placeholder.svg?height=200&width=200",
  coverImage: "/placeholder.svg?height=300&width=800",
  about:
    "Passionate Full Stack Developer with expertise in MERN stack development. Experienced in building scalable web applications using React.js, Node.js, MongoDB, and Express.js. Strong problem-solving skills and a keen eye for creating user-friendly interfaces. Always eager to learn new technologies and contribute to innovative projects.",
  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Freelance",
      duration: "2022 - Present",
      location: "Remote",
      description:
        "Developing full-stack web applications using MERN stack. Building responsive user interfaces with React.js and creating robust backend APIs with Node.js and Express.js. Working with MongoDB for database management and implementing modern development practices.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Tech Solutions",
      duration: "2021 - 2022",
      location: "Karachi, Pakistan",
      description:
        "Developed responsive web applications using React.js and modern JavaScript. Collaborated with design teams to implement pixel-perfect UI components and ensured cross-browser compatibility.",
    },
  ],
  education: [
    {
      id: 1,
      school: "University of Karachi",
      degree: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
    },
  ],
  skills: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Git",
    "RESTful APIs",
    "GraphQL",
    "Next.js",
  ],
  activities: [
    {
      id: 1,
      type: "post",
      content:
        "Just completed a new MERN stack project with real-time chat functionality! Excited to share the learning experience. 🚀",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "like",
      content: "Liked a post about the latest React 18 features and concurrent rendering",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      type: "comment",
      content: "Commented on a discussion about best practices in Node.js development",
      timestamp: "3 days ago",
    },
  ],
}

export default function LinkedInProfile() {
  const [userData, setUserData] = useState(initialUserData)

  const updateUserData = (field: string, value: any) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Header with theme toggle */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">LinkedIn Profile</h1>
            <ThemeToggle />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <ProfileHeader userData={userData} onUpdate={updateUserData} />

              <AboutSection about={userData.about} onUpdate={(value) => updateUserData("about", value)} />

              <ExperienceSection
                experience={userData.experience}
                onUpdate={(value) => updateUserData("experience", value)}
              />

              <EducationSection
                education={userData.education}
                onUpdate={(value) => updateUserData("education", value)}
              />

              <SkillsSection skills={userData.skills} onUpdate={(value) => updateUserData("skills", value)} />

              <ActivitySection activities={userData.activities} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <ConnectionsSection connections={userData.connections} />
              <SidebarWidget />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
