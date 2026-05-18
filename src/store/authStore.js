import { create } from 'zustand'
import { CURRENT_USER, DEMO_USERS } from '../data/demoData'

export const useAuthStore = create((set) => ({
  user: CURRENT_USER,
  isAuthenticated: true,
  isLoading: false,
  error: null,
  allUsers: DEMO_USERS,

  login: async (email, password) => {
    set({ isLoading: true })
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const user = DEMO_USERS.find((u) => u.email === email)
      if (!user) throw new Error('User not found')
      set({ user, isAuthenticated: true, isLoading: false, error: null })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  signup: async (userData) => {
    set({ isLoading: true })
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const newUser = {
        ...userData,
        id: Math.random().toString(36).substr(2, 9),
        verified: false,
        followers: [],
        following: [],
      }
      set({ user: newUser, isAuthenticated: true, isLoading: false, error: null })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false })
  },

  updateProfile: (profileData) => {
    set((state) => ({
      user: { ...state.user, ...profileData },
    }))
  },

  followUser: (userId) => {
    set((state) => ({
      user: {
        ...state.user,
        following: state.user.following.includes(userId)
          ? state.user.following.filter((id) => id !== userId)
          : [...state.user.following, userId],
      },
    }))
  },
}))
