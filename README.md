# NAIROBI Social Media Web App

## 🌍 Overview
A complete mobile-first social media platform with integrated outdoor adventure booking system, built with React, Vite, Tailwind CSS, and Framer Motion animations.

## ✨ Features

### Core Social Features
- **Splash Screen** - Animated welcome screen with emerald branding
- **Onboarding Walkthrough** - 4-slide introduction flow
- **Full Authentication** - Sign in & Sign up with validation
- **Home Feed** - Posts with likes, comments, shares
- **Stories** - Story carousel with status indicators
- **Explore** - Trending tags and photo discovery grid
- **Direct Messages** - Real-time messaging with online status
- **Notifications** - Activity feed with action buttons
- **User Profile** - Profile editing, stats, settings

### 🏔️ Hiky Outdoor Adventures
Dedicated button on home screen (top-left) for outdoor activities:

**Activity Types:**
- **Hiking** - Mount Kenya, Hell's Gate, and more
- **Climbing** - Kilimanjaro, Mawenzi technical climbs
- **Camping** - Amboseli Safari, Glamping experiences

**Features:**
- Activity cards with images, ratings, reviews
- Difficulty levels, elevation, duration
- Detailed place information & maps
- Group booking with date selection
- Participant count selector with dynamic pricing
- Booking confirmation flow
- Success modal with reference number

## 🎨 Design System

### Colors
- **Primary Emerald:** #16a34a - Brand color throughout
- **Gradients:** Emerald gradients for headers and backgrounds
- **Neutrals:** Gray palette for typography

### Components
- Smooth Framer Motion animations
- Responsive mobile-first design
- Bottom navigation bar
- Modal dialogs and overlays
- Animated transitions between screens

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Zustand** - State management
- **React Icons** - Icon library

## 📱 Project Structure

```
nairobi-app/
├── src/
│   ├── components/screens/
│   │   ├── HomeScreen.jsx
│   │   ├── ExploreScreen.jsx
│   │   ├── MessagesScreen.jsx
│   │   ├── NotificationsScreen.jsx
│   │   ├── ProfileScreen.jsx
│   │   └── HikyScreen.jsx
│   ├── screens/
│   │   ├── SplashScreen.jsx
│   │   ├── OnboardingScreen.jsx
│   │   ├── AuthScreen.jsx
│   │   └── MainApp.jsx
│   ├── store/appStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Demo Credentials
- **Email:** demo@nairobi.app
- **Password:** Any password works (demo mode)

## 🎯 User Flows

### Authentication Flow
1. Splash Screen (3s animation)
2. Onboarding (4 slides, skippable)
3. Auth Screen (Login/Signup)
4. Main App (Authenticated)

### Booking Flow (Hiky)
1. Click "Hiky" button on home screen
2. Browse activities (filtered by type)
3. Select activity for details
4. Choose departure date
5. Select number of participants
6. Enter contact information
7. Confirm booking
8. Success modal with reference number

### Social Interaction
1. **Feed** - View, like, comment, share posts
2. **Stories** - View user stories
3. **Explore** - Discover trending content
4. **Messages** - Direct messaging
5. **Notifications** - Activity notifications
6. **Profile** - Manage user information

## 📊 Responsive Design

- Mobile-first approach (320px+)
- Optimized for touch interactions
- Bottom navigation on all screens
- Full-width responsive layouts
- Safe area padding

## 🎬 Animations

- **Page Transitions** - Smooth opacity and scale
- **Button Interactions** - Hover and tap effects
- **List Items** - Staggered entrance animations
- **Modals** - Slide-up from bottom
- **Success States** - Celebratory animations

## 📊 Demo Data

All screens include mock data:
- **Feed Posts** - Sample posts with images
- **Stories** - Multiple user stories
- **Messages** - Pre-populated conversations
- **Notifications** - Activity notifications
- **Activities** - 6 outdoor packages

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)

---

**NAIROBI - Connect. Share. Explore. Adventure.** 🌍✨
