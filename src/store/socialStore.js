import { create } from 'zustand'
import { DEMO_POSTS, DEMO_STORIES, DEMO_NOTIFICATIONS, DEMO_MESSAGES } from '../data/demoData'

export const useSocialStore = create((set) => ({
  posts: DEMO_POSTS,
  stories: DEMO_STORIES,
  notifications: DEMO_NOTIFICATIONS,
  unreadNotifications: 2,
  messages: DEMO_MESSAGES,
  unreadMessages: 1,
  likedPosts: [],

  likePost: (postId) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
      ),
      likedPosts: state.likedPosts.includes(postId)
        ? state.likedPosts.filter((id) => id !== postId)
        : [...state.likedPosts, postId],
    }))
  },

  markNotificationsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((notif) => ({ ...notif, read: true })),
      unreadNotifications: 0,
    }))
  },

  markMessagesRead: () => {
    set({ unreadMessages: 0 })
  },

  addPost: (post) => {
    set((state) => ({
      posts: [post, ...state.posts],
    }))
  },

  addStory: (story) => {
    set((state) => ({
      stories: [story, ...state.stories],
    }))
  },
}))
