import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 border-8 border-gray-200 rounded-full animate-spin border-t-blue-500 border-r-indigo-500 border-b-purple-500 border-l-pink-500"></div>
    </div>
  )
}

export default Loader