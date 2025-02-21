import React from 'react'
import { useNavigate } from 'react-router-dom'
import Quiz from '../../assets/Quiz.jpg'
import Work from './Work'
import { clearQuizAttempts } from '../../utils/indexDB'
import { motion } from 'framer-motion'
import { FaBrain, FaCheckCircle, FaClock, FaChartLine, FaRedo } from 'react-icons/fa'
import Footer from '../../components/Footer'

const Home = () => {
    const navigate = useNavigate()
    // Array of feature objects for the quiz application
    // Each feature has a title and an icon component with styling
    const features = [
        {
            title: 'Engaging Questions',
            icon: <FaBrain className="text-3xl text-purple-500" />
        },
        {
            title: 'Instant Feedback',
            icon: <FaCheckCircle className="text-3xl text-green-500" />
        },
        {
            title: 'Time-Limited Fun',
            icon: <FaClock className="text-3xl text-blue-500" />
        },
        {
            title: 'Track Your Progress',
            icon: <FaChartLine className="text-3xl text-pink-500" />
        },
        {
            title: 'Multiple Attempts',
            icon: <FaRedo className="text-3xl text-indigo-500" />
        },
    ]

    // Clears previous quiz attempts from IndexDB and navigates to quiz page
    const handleStartQuiz = () => {
        clearQuizAttempts().then(() => {
            navigate('/quiz')
        })
    }

    // Navigates to the history page to view past quiz attempts
    const handleViewHistory = () => {
        navigate('/history')
    }
    
    return (
        <>
            {/* Main container with gradient background */}
            <div className='w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 p-4 md:p-8 lg:p-10'>
                {/* Two-column grid layout for desktop */}
                <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                    {/* Left column: Features section with animated entrance */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='w-full space-y-6 md:space-y-8'
                    >
                        <p className='text-lg md:text-xl text-gray-600'>
                            Test your knowledge with our <span className='text-purple-500 font-bold'>quizzes</span>
                        </p>
                        <div className='space-y-4'>
                            <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent 
                                bg-clip-text transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer inline-block'>
                                Why take our quizzes?
                            </h2>
                            {/* Features grid with animated cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {features.map((feature, index) => (
                                    // Each feature card with hover effects and animations
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        key={index} 
                                        className='flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-lg 
                                            transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-102 
                                            border border-transparent hover:border-purple-500'
                                    >
                                        <div className='flex-shrink-0 bg-gray-50 p-3 rounded-lg'>
                                            {feature.icon}
                                        </div>
                                        <div className='text-xl font-semibold text-gray-800'>
                                            {feature.title}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column: Image and action buttons with animated entrance */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='w-full relative'
                    >
                        {/* Decorative blur effects */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full filter blur-xl opacity-70"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 rounded-full filter blur-xl opacity-70"></div>
                        
                        {/* Quiz image with hover effects */}
                        <img 
                            src={Quiz} 
                            alt='Quiz' 
                            className='w-full h-auto object-cover rounded-3xl shadow-2xl hover:shadow-3xl 
                                transition-all duration-300 ease-in-out transform hover:scale-102 hover:cursor-pointer
                                relative mt-10' 
                        />
                        
                        {/* Action buttons container */}
                        <div className='flex justify-between mt-6 gap-4'>
                            {/* Primary action button - Start Quiz */}
                            <button onClick={handleStartQuiz} className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600 
                                text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all 
                                duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-lg font-semibold'>
                                Start Quiz Now
                            </button>
                            
                            {/* Secondary action button - View History */}
                            <button onClick={handleViewHistory} className='flex-1 bg-white border-2 border-purple-600 
                                text-purple-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all 
                                duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-lg font-semibold'>
                                View History
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Additional components */}
            <Work />
            <Footer />
        </>
    )
}

export default Home