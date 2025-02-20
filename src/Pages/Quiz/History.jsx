import React ,{useState,useEffect}from 'react'
import { getQuizAttempts } from '../../utils/indexDB'
import Loader from '../../components/Loader'
const History = () => {
    const [quizAttempts, setQuizAttempts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getQuizAttempts().then((data) => {
            setQuizAttempts(data);
            setIsLoading(false);
        })
    }, []);

    const handleNextQuestion = () => {
        if (currentIndex < quizAttempts.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    const handlePreviousQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

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
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
                                {quizAttempts[currentIndex].type}
                            </h1>
                            <div className='flex gap-4'>
                                <button 
                                    onClick={handlePreviousQuestion}
                                    className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity'
                                    disabled={currentIndex <= 0}
                                >
                                    Previous
                                </button>

                                <button 
                                    onClick={handleNextQuestion}
                                    className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity'
                                    disabled={currentIndex >= quizAttempts.length - 1}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-xl md:text-2xl font-medium text-gray-600'>Question {currentIndex + 1} of {quizAttempts.length}</h2>
                            <p className='text-xl md:text-2xl text-gray-800 font-medium'>{quizAttempts[currentIndex].question}</p>
                        </div>
                        <div className='grid gap-3 mt-6'>
                            {quizAttempts[currentIndex].type === 'Multiple Choice' ? (
                                quizAttempts[currentIndex].options.map((option, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-xl text-lg font-medium
                                            ${idx + 1 === quizAttempts[currentIndex].correctAnswer
                                                ? 'bg-green-500 text-white'
                                                : idx + 1 === quizAttempts[currentIndex].answer
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-gray-100 text-gray-500'}`}
                                    >
                                        {option}
                                    </div>
                                ))
                            ) : (
                                <div className='space-y-4'>
                                    <div className='p-4 rounded-xl text-lg font-medium bg-gray-100'>
                                        Your answer: {quizAttempts[currentIndex].answer}
                                    </div>
                                    <div className='p-4 rounded-xl text-lg font-medium bg-green-100 text-green-700'>
                                        Correct answer: {quizAttempts[currentIndex].correctAnswer}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='mt-4 text-center'>
                            <p className='text-lg font-medium'>
                                Result: {quizAttempts[currentIndex].isCorrect ? (
                                    <span className='text-green-600'>Correct</span>
                                ) : (
                                    <span className='text-red-600'>Incorrect</span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History