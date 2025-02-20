import React ,{useState,useEffect}from 'react'
import { getQuizAttempts } from '../../utils/indexDB'
import Loader from '../../components/Loader'
const History = () => {
    const [quizAttempts, setQuizAttempts] = useState([]);
    const [index, setIndex] = useState(21);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getQuizAttempts().then((data) => {
            setQuizAttempts(data);
            console.log(data)
            setIsLoading(false);
        })
    }, []);
    if(isLoading){
        return (
            <div className='min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 flex justify-center items-center p-4 md:p-8'>
                <Loader />
            </div>
        )
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 flex justify-center items-center p-4 md:p-8'>
        <div className='container max-w-3xl mx-auto'>
            <div className='bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20'>
                <div className='space-y-6'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>Quiz History</h1>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Next</button>
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-xl md:text-2xl font-medium text-gray-600'>Question {index%5 + 1} of 5</h2>
                        <p className='text-xl md:text-2xl text-gray-800 font-medium'>{quizAttempts[index].question}</p>
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {quizAttempts[index].type === 'Multiple Choice' && quizAttempts[index].options.map((option, index) => (
                            <button key={index} className='bg-white border-2 border-purple-500 text-purple-700 hover:bg-purple-50'>{option}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History