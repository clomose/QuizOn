import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaHistory, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                            QuizOn
                        </h1>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink title="Take Quiz" icon={<FaQuestionCircle />} />
                        <NavLink title="History" icon={<FaHistory />} />
                        <NavLink title="Profile" icon={<FaUser />} />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
                            <MobileNavLink title="Take Quiz" icon={<FaQuestionCircle />} />
                            <MobileNavLink title="History" icon={<FaHistory />} />
                            <MobileNavLink title="Profile" icon={<FaUser />} />
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

const NavLink = ({ title, icon }) => (
    <a href="#" className="flex items-center font-semibold space-x-1 text-violet-600 hover:text-purple-800 transition-colors duration-200 hover:cursor-pointer">
        {icon}
        <span>{title}</span>
    </a>
);

const MobileNavLink = ({ title, icon }) => (
    <a href="#" className="flex items-center space-x-2 font-semibold px-3 py-2 rounded-md text-violet-600 hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200">
        {icon}
        <span>{title}</span>
    </a>
);

export default Navbar; 