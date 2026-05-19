import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import { HIKY_ACTIVITIES } from '../data/demoData'
import ActivityCard from './ActivityCard'
import ActivityDetailModal from './ActivityDetailModal'
import BookingConfirmation from './BookingConfirmation'

const HikySection = ({ onClose }) => {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [showBooking, setShowBooking] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredActivities = selectedDifficulty === 'all'
    ? HIKY_ACTIVITIES
    : HIKY_ACTIVITIES.filter((a) => a.difficulty === selectedDifficulty)

  const difficulties = ['all', 'Easy', 'Medium', 'Hard']

  const handleSelectActivity = (activity) => {
    setSelectedActivity(activity)
  }

  const handleBook = (activity) => {
    setShowBooking(true)
  }

  const handleBookingComplete = () => {
    setShowBooking(false)
    setSelectedActivity(null)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 flex items-center justify-between sticky top-0 z-20">
            <div>
              <h1 className="text-4xl font-black mb-2">🥾 Hiky Adventures</h1>
              <p className="text-emerald-100">Explore Kenya's most thrilling outdoor experiences</p>
            </div>
            <motion.button
              onClick={onClose}
              className="p-3 hover:bg-white/20 rounded-lg transition-all"
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Difficulty Filter */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-700 mb-4">Filter by Difficulty</h3>
              <div className="flex gap-3 flex-wrap">
                {difficulties.map((difficulty) => (
                  <motion.button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-5 py-2 rounded-full font-semibold capitalize transition-all ${
                      selectedDifficulty === difficulty
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {difficulty}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity, idx) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleSelectActivity(activity)}
                >
                  <ActivityCard activity={activity} onClick={() => handleSelectActivity(activity)} />
                </motion.div>
              ))}
            </div>

            {filteredActivities.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-2xl text-gray-600">No activities found</p>
                <p className="text-gray-500 mt-2">Try selecting a different difficulty level</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Activity Detail Modal */}
        <AnimatePresence>
          {selectedActivity && !showBooking && (
            <ActivityDetailModal
              activity={selectedActivity}
              onClose={() => setSelectedActivity(null)}
              onBook={handleBook}
            />
          )}
        </AnimatePresence>

        {/* Booking Confirmation Modal */}
        <AnimatePresence>
          {showBooking && selectedActivity && (
            <BookingConfirmation
              activity={selectedActivity}
              onClose={() => {
                setShowBooking(false)
                setSelectedActivity(null)
              }}
              onConfirm={handleBookingComplete}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default HikySection
