import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, SkipForward } from 'lucide-react'
import { useState } from 'react'
import { ONBOARDING_SLIDES } from '../data/demoData'

const OnboardingScreen = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = ONBOARDING_SLIDES[currentSlide]

  return (
    <motion.div
      className="w-full h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Skip button */}
      <motion.button
        onClick={onComplete}
        className="absolute top-6 right-6 text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 z-20 md:top-8 md:right-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SkipForward size={16} />
        Skip
      </motion.button>

      {/* Decorative background */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full opacity-40 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          {/* Icon */}
          <motion.div
            className="text-8xl mb-8"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {slide.icon}
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-black text-emerald-900 mb-4 leading-tight">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-emerald-600 font-bold mb-4">
            {slide.subtitle}
          </p>

          {/* Description */}
          <p className="text-base text-gray-600 leading-relaxed">
            {slide.description}
          </p>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <motion.div className="flex justify-center gap-2 mb-12 px-6">
        {ONBOARDING_SLIDES.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-emerald-600 w-8' : 'bg-emerald-200 w-2'
            }`}
            layoutId={`indicator-${idx}`}
          />
        ))}
      </motion.div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center px-6 pb-8 relative z-10">
        <motion.button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full transition-all ${
            currentSlide === 0
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
              : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
          }`}
          whileHover={currentSlide !== 0 ? { scale: 1.1 } : {}}
          whileTap={currentSlide !== 0 ? { scale: 0.95 } : {}}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentSlide === ONBOARDING_SLIDES.length - 1 ? 'Get Started' : 'Next'}
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="p-3 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default OnboardingScreen
