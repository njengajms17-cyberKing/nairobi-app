import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiMapPin, FiUsers, FiCalendar, FiDollarSign, FiCheck, FiX, FiChevronRight, FiStar, FiPhone } from 'react-icons/fi'

const hikyActivities = [
  {
    id: 1,
    type: 'Hiking',
    name: 'Mount Kenya Summit Trek',
    location: 'Nyeri County',
    difficulty: 'Expert',
    elevation: '5,199m',
    duration: '3 days',
    participants: 12,
    price: 450,
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Challenging ascent to Point Lenana with experienced guides. Includes accommodation and meals.',
    highlights: ['Professional Guides', 'Small Groups', 'Full Equipment', 'Insurance Included'],
    mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    type: 'Hiking',
    name: 'Hell\'s Gate National Park',
    location: 'Naivasha',
    difficulty: 'Moderate',
    elevation: '1,900m',
    duration: '1 day',
    participants: 8,
    price: 75,
    rating: 4.6,
    reviews: 218,
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=400&fit=crop',
    description: 'Spectacular gorge hike with geothermal features. Walking between hot springs and cliffs.',
    highlights: ['Geothermal Features', 'Wildlife Viewing', 'Photography', 'Picnic Lunch'],
    mapImage: 'https://images.unsplash.com/photo-1488066073353-c2c4e48f4c4b?w=500&h=300&fit=crop'
  },
  {
    id: 3,
    type: 'Climbing',
    name: 'Mount Kilimanjaro Expedition',
    location: 'Tanzania Border',
    difficulty: 'Expert',
    elevation: '5,895m',
    duration: '5 days',
    participants: 15,
    price: 750,
    rating: 4.9,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Africa\'s highest peak. Fully guided expedition with porter support and high success rate.',
    highlights: ['Expert Guides', 'Porter Support', 'Altitude Acclimatization', 'Summit Celebration'],
    mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=300&fit=crop'
  },
  {
    id: 4,
    type: 'Camping',
    name: 'Amboseli Camping Safari',
    location: 'Amboseli National Park',
    difficulty: 'Easy',
    elevation: '1,300m',
    duration: '2 days',
    participants: 20,
    price: 180,
    rating: 4.7,
    reviews: 389,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
    description: 'Experience wildlife camping with comfortable tents. Best views of Mount Kilimanjaro from Kenya side.',
    highlights: ['Game Drives', 'Expert Naturalist', 'Camping Meals', 'Wildlife Photography'],
    mapImage: 'https://images.unsplash.com/photo-1488066073353-c2c4e48f4c4b?w=500&h=300&fit=crop'
  },
  {
    id: 5,
    type: 'Climbing',
    name: 'Mount Mawenzi Challenge',
    location: 'Nyeri Region',
    difficulty: 'Hard',
    elevation: '4,800m',
    duration: '2 days',
    participants: 10,
    price: 320,
    rating: 4.5,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=500&h=400&fit=crop',
    description: 'Technical rock climbing experience with professional instructors. Suitable for intermediate climbers.',
    highlights: ['Rock Climbing', 'Safety Equipment', 'Certified Instructors', 'Scenic Rappelling'],
    mapImage: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=300&fit=crop'
  },
  {
    id: 6,
    type: 'Camping',
    name: 'Rift Valley Glamping',
    location: 'Lake Naivasha',
    difficulty: 'Easy',
    elevation: '1,890m',
    duration: '3 days',
    participants: 25,
    price: 420,
    rating: 4.8,
    reviews: 521,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=400&fit=crop',
    description: 'Luxury camping experience with all amenities. Stunning lake views and wildlife encounters.',
    highlights: ['Luxury Tents', 'Lake Activities', 'Gourmet Meals', 'Wellness Spa'],
    mapImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=300&fit=crop'
  },
]

export default function HikyScreen({ onBack }) {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingData, setBookingData] = useState({})
  const [filterType, setFilterType] = useState('All')

  const filteredActivities = filterType === 'All' 
    ? hikyActivities 
    : hikyActivities.filter(a => a.type === filterType)

  const handleSelectActivity = (activity) => {
    setSelectedActivity(activity)
    setBookingStep(1)
  }

  const handleConfirmBooking = () => {
    setBookingStep(1)
    setSelectedActivity(null)
    setBookingData({})
  }

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Back to Main */}
        {!selectedActivity ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full overflow-y-auto pb-6"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-0 bg-gradient-to-b from-emerald-600 to-emerald-500 text-white p-4 z-10"
            >
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-white/20 rounded-lg transition"
                >
                  <FiArrowLeft size={24} />
                </button>
                <h1 className="text-2xl font-bold flex-1 text-center">Hiky Adventures</h1>
                <div className="w-10" />
              </div>

              {/* Filters */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {['All', 'Hiking', 'Climbing', 'Camping'].map(type => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                      filterType === type
                        ? 'bg-white text-emerald-600'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Activities List */}
            <div className="px-4 pt-6 space-y-4">
              {filteredActivities.map((activity, idx) => (
                <motion.button
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleSelectActivity(activity)}
                  className="w-full text-left"
                >
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                    {/* Image */}
                    <div className="relative h-48">
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {activity.type}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                        <FiStar size={16} className="text-yellow-500" fill="currentColor" />
                        <span className="text-sm font-semibold">{activity.rating}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.name}</h3>
                      
                      {/* Meta Info */}
                      <div className="space-y-2 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FiMapPin size={16} className="text-emerald-600" />
                          {activity.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar size={16} className="text-emerald-600" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiUsers size={16} className="text-emerald-600" />
                          {activity.participants} participants
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-emerald-600">${activity.price}</div>
                        <button className="p-2 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
                          <FiChevronRight className="text-emerald-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Activity Details & Booking */
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="h-full overflow-y-auto pb-32"
          >
            {/* Back Button */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center gap-3 z-10">
              <button
                onClick={() => setSelectedActivity(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <FiArrowLeft size={24} />
              </button>
              <h2 className="text-xl font-bold text-gray-900 flex-1">{selectedActivity.name}</h2>
            </div>

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-4 pt-6 pb-4">
              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <FiStar size={20} className="text-yellow-500" fill="currentColor" />
                  <span className="text-lg font-bold">{selectedActivity.rating}</span>
                </div>
                <button className="text-emerald-600 font-semibold">
                  {selectedActivity.reviews} reviews
                </button>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">Group: {selectedActivity.participants}</span>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-emerald-700 font-semibold mb-1">DIFFICULTY</p>
                  <p className="text-lg font-bold text-emerald-900">{selectedActivity.difficulty}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-emerald-700 font-semibold mb-1">ELEVATION</p>
                  <p className="text-lg font-bold text-emerald-900">{selectedActivity.elevation}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-emerald-700 font-semibold mb-1">DURATION</p>
                  <p className="text-lg font-bold text-emerald-900">{selectedActivity.duration}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-emerald-700 font-semibold mb-1">PRICE</p>
                  <p className="text-lg font-bold text-emerald-900">${selectedActivity.price}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600 leading-relaxed">{selectedActivity.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included</h3>
                <div className="space-y-2">
                  {selectedActivity.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Route Map</h3>
                <img
                  src={selectedActivity.mapImage}
                  alt="Map"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              {/* Group Booking Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Select Departure Date</h3>
                <div className="space-y-2">
                  {['May 25 - 27', 'June 1 - 3', 'June 8 - 10'].map((date, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setSelectedGroup(idx)
                        setBookingData({ ...bookingData, date })
                      }}
                      className={`w-full p-3 rounded-lg border-2 transition ${
                        selectedGroup === idx
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">{date}</span>
                        <span className="text-sm text-gray-600">5 slots available</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Number of Participants */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Number of People</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setBookingData({ ...bookingData, people: Math.max(1, (bookingData.people || 1) - 1) })}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold w-8 text-center">{bookingData.people || 1}</span>
                  <button
                    onClick={() => setBookingData({ ...bookingData, people: (bookingData.people || 1) + 1 })}
                    className="w-10 h-10 flex items-center justify-center bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    +
                  </button>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">
                      Total: ${(bookingData.people || 1) * selectedActivity.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setBookingStep(2)}
                disabled={!selectedGroup}
                className="w-full py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition disabled:bg-gray-300 flex items-center justify-center gap-2 mb-3"
              >
                <FiCheck size={20} />
                Proceed to Booking
              </motion.button>

              {/* Contact Support */}
              <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-bold hover:bg-emerald-50 transition flex items-center justify-center gap-2">
                <FiPhone size={20} />
                Contact Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Confirmation Modal */}
      {bookingStep === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-end z-50"
        >
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            className="bg-white w-full rounded-t-3xl p-6 max-h-96 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Confirm Booking</h2>
              <button
                onClick={() => setBookingStep(1)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Booking Summary */}
            <div className="bg-emerald-50 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-gray-900 mb-3">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Activity:</span>
                  <span className="font-semibold text-gray-900">{selectedActivity.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-900">{bookingData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Participants:</span>
                  <span className="font-semibold text-gray-900">{bookingData.people || 1} people</span>
                </div>
                <div className="border-t border-emerald-200 my-2" />
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="font-bold text-emerald-600">${(bookingData.people || 1) * selectedActivity.price}</span>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
              <input
                type="tel"
                placeholder="+254 712 345 678"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Confirm Button */}
            <div className="flex gap-3">
              <button
                onClick={() => setBookingStep(1)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold"
              >
                Back
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setBookingStep(3)
                }}
                className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold flex items-center justify-center gap-2"
              >
                <FiCheck size={20} />
                Complete Booking
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success Modal */}
      {bookingStep === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-sm text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6, repeat: 1 }}
              className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FiCheck className="text-emerald-600" size={32} />
            </motion.div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your adventure awaits! Check your email for confirmation details.</p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm">
              <p className="text-gray-600 mb-1">Booking Reference</p>
              <p className="font-mono font-bold text-gray-900">HIK-{Math.random().toString().slice(2, 10).toUpperCase()}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleConfirmBooking}
              className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition"
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
