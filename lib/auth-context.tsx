"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export interface StudentProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  studentType?: string
  major?: string
  career?: string
  housing?: string
  support?: string[]
  interests?: string[]
  onboardingCompleted: boolean
  journeyProgress: Record<string, TaskProgress>
  checklistProgress: Record<string, boolean>
  createdAt: string
}

export interface TaskProgress {
  [taskLabel: string]: boolean
}

interface AuthContextType {
  user: StudentProfile | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (data: { email: string; password: string; firstName: string; lastName: string }) => Promise<{ success: boolean; error?: string }>
  signOut: () => void
  updateProfile: (updates: Partial<StudentProfile>) => void
  completeOnboarding: (answers: Record<string, string | string[]>) => void
  toggleTask: (stageId: string, taskLabel: string) => void
  toggleChecklist: (taskName: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = "miles-auth-session"
const USERS_KEY = "miles-users-db"

function getStoredUsers(): Record<string, StudentProfile & { password: string }> {
  if (typeof window === "undefined") return {}
  try {
    const stored = localStorage.getItem(USERS_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function saveUsers(users: Record<string, StudentProfile & { password: string }>) {
  if (typeof window === "undefined") return
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function getStoredSession(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(STORAGE_KEY)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StudentProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Restore session on mount
  useEffect(() => {
    const sessionEmail = getStoredSession()
    if (sessionEmail) {
      const users = getStoredUsers()
      const stored = users[sessionEmail]
      if (stored) {
        const { password: _, ...profile } = stored
        setUser(profile)
      }
    }
    setIsLoading(false)
  }, [])

  const persistUser = useCallback((profile: StudentProfile) => {
    const users = getStoredUsers()
    const existing = users[profile.email]
    users[profile.email] = { ...existing, ...profile, password: existing?.password || "" }
    saveUsers(users)
    setUser(profile)
  }, [])

  const signIn = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const users = getStoredUsers()
    const stored = users[email.toLowerCase()]

    if (!stored) {
      return { success: false, error: "No account found with this email. Please sign up first." }
    }

    if (stored.password !== password) {
      return { success: false, error: "Incorrect password. Please try again." }
    }

    const { password: _, ...profile } = stored
    setUser(profile)
    localStorage.setItem(STORAGE_KEY, email.toLowerCase())
    return { success: true }
  }, [])

  const signUp = useCallback(async (data: { email: string; password: string; firstName: string; lastName: string }): Promise<{ success: boolean; error?: string }> => {
    const users = getStoredUsers()
    const emailKey = data.email.toLowerCase()

    if (users[emailKey]) {
      return { success: false, error: "An account with this email already exists." }
    }

    const newProfile: StudentProfile & { password: string } = {
      id: crypto.randomUUID(),
      email: emailKey,
      firstName: data.firstName,
      lastName: data.lastName,
      onboardingCompleted: false,
      journeyProgress: {},
      checklistProgress: {},
      createdAt: new Date().toISOString(),
      password: data.password,
    }

    users[emailKey] = newProfile
    saveUsers(users)

    const { password: _, ...profile } = newProfile
    setUser(profile)
    localStorage.setItem(STORAGE_KEY, emailKey)
    return { success: true }
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const updateProfile = useCallback((updates: Partial<StudentProfile>) => {
    setUser((prev) => {
      if (!prev) return prev
      const updated = { ...prev, ...updates }
      const users = getStoredUsers()
      const existing = users[prev.email]
      if (existing) {
        users[prev.email] = { ...existing, ...updated }
        saveUsers(users)
      }
      return updated
    })
  }, [])

  const completeOnboarding = useCallback((answers: Record<string, string | string[]>) => {
    setUser((prev) => {
      if (!prev) return prev
      const updated: StudentProfile = {
        ...prev,
        studentType: answers["student-type"] as string,
        major: answers["major"] as string,
        career: answers["career"] as string,
        housing: answers["housing"] as string,
        support: answers["support"] as string[],
        interests: answers["interests"] as string[],
        onboardingCompleted: true,
        // After onboarding, mark "Discover Miles" stage as completed
        journeyProgress: {
          ...prev.journeyProgress,
          discover: {
            "Explore academic programs": true,
            "Learn about campus life": true,
            "Complete onboarding questionnaire": true,
          },
        },
      }
      const users = getStoredUsers()
      const existing = users[prev.email]
      if (existing) {
        users[prev.email] = { ...existing, ...updated }
        saveUsers(users)
      }
      return updated
    })
  }, [])

  const toggleTask = useCallback((stageId: string, taskLabel: string) => {
    setUser((prev) => {
      if (!prev) return prev
      const stageProgress = prev.journeyProgress[stageId] || {}
      const updated: StudentProfile = {
        ...prev,
        journeyProgress: {
          ...prev.journeyProgress,
          [stageId]: {
            ...stageProgress,
            [taskLabel]: !stageProgress[taskLabel],
          },
        },
      }
      const users = getStoredUsers()
      const existing = users[prev.email]
      if (existing) {
        users[prev.email] = { ...existing, ...updated }
        saveUsers(users)
      }
      return updated
    })
  }, [])

  const toggleChecklist = useCallback((taskName: string) => {
    setUser((prev) => {
      if (!prev) return prev
      const updated: StudentProfile = {
        ...prev,
        checklistProgress: {
          ...prev.checklistProgress,
          [taskName]: !prev.checklistProgress[taskName],
        },
      }
      const users = getStoredUsers()
      const existing = users[prev.email]
      if (existing) {
        users[prev.email] = { ...existing, ...updated }
        saveUsers(users)
      }
      return updated
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateProfile,
        completeOnboarding,
        toggleTask,
        toggleChecklist,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
