import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaHistory, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { clearQuizAttempts } from '../utils/indexDB';

// Main navigation component with mobile responsiveness
const Navbar = () => {
    // State to control mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Fixed navigation bar with blur effect and shadow
        <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to='/' className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                            QuizOn
                        </Link>
                    </div>
                    
                    {/* Desktop Menu - Hidden on mobile screens */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink title="Home" icon={<FaHome />} />  
                        <NavLink title="Take Quiz" icon={<FaQuestionCircle />} />
                        <NavLink title="History" icon={<FaHistory />} />
                    </div>

                    {/* Mobile Menu Button - Visible only on mobile screens */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Animated Mobile Menu Dropdown */}
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
                            <MobileNavLink title="Home" icon={<FaHome />} />
                            <MobileNavLink title="Take Quiz" icon={<FaQuestionCircle />} />
                            <MobileNavLink title="History" icon={<FaHistory />} />

                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

// Desktop navigation link component with hover effects
const NavLink = ({ title, icon }) => (
    <Link to={title === 'Take Quiz' ? '/quiz' : title === 'History' ? '/history' : '/'} className="flex items-center font-semibold space-x-1 text-violet-600 hover:text-purple-800 transition-colors duration-200 hover:cursor-pointer"
    onClick={() => {
        if(title === 'Take Quiz'){
            clearQuizAttempts()
        }
    }}
    >
        {icon}
        <span>{title}</span>
    </Link>
);

// Mobile-specific navigation link component with different styling
const MobileNavLink = ({ title, icon }) => (
    <Link to={title === 'Take Quiz' ? '/quiz' : title === 'History' ? '/history' : '/'} className="flex items-center space-x-2 font-semibold px-3 py-2 rounded-md text-violet-600 hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
    onClick={() => {
        if(title === 'Take Quiz'){
            clearQuizAttempts()
        }
    }}
    >
        {icon}
        <span>{title}</span>
    </Link>
);

export default Navbar; 