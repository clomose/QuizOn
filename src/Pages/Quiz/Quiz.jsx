import React, { useState , useEffect} from 'react'
import { MultipleChoiceQuestions, IntegerTypeQuestions } from '../../utils/Questions'

const Quiz = () => {
  const [questions, setQuestions] = useState(MultipleChoiceQuestions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [time, setTime] = useState(30)
  const [userAnswer, setUserAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          handleNextQuestion()
          return 30
        }
        return prevTime - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setUserAnswer('')
      setIsAnswered(false)
      setIsSubmitted(false)
      setTime(30)
    }else if(questions===MultipleChoiceQuestions){
      setQuestions(IntegerTypeQuestions);
      setCurrentQuestion(0);
      setUserAnswer('')
      setIsAnswered(false)
      setIsSubmitted(false)
      setTime(30)
    }else{
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handleAnswer = (option) => {
    if (!isAnswered) {
      setUserAnswer(option)
      if(option===questions[currentQuestion].answer){
        setScore(prevScore => prevScore + 1)
      }
      setIsAnswered(true)
      setTimeout(handleNextQuestion, 1500)
    }
  }

  const handleSubmitAnswer = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      handleNextQuestion()
    }, 1500)
  }

  if (currentQuestion >= questions.length) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 flex justify-center items-center p-4 '>
        <div className='bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center space-y-4'>
          <h2 className='text-3xl font-bold text-gray-800'>Quiz Completed! 🎉</h2>
          <p className='text-gray-600'>Thank you for participating!</p>
          <p className='text-purple-600 text-xl font-semibold '>Your score is {score} out of {MultipleChoiceQuestions.length+IntegerTypeQuestions.length}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 flex justify-center items-center p-4 md:p-8'>
      <div className='container max-w-3xl mx-auto'>
        <div className='bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20'>
          <div className='space-y-6'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text'>
                {questions === MultipleChoiceQuestions ? 'Multiple Choice' : 'Integer Type'}
              </h1>
              <div className={`text-xl font-semibold rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-300
                ${time <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-100 text-blue-600'}`}>
                {time}
              </div>
            </div>

            <div className='space-y-4'>
              <h2 className='text-lg md:text-xl font-medium text-gray-600'>Question {currentQuestion + 1} of {questions.length}</h2>
              <p className='text-xl md:text-2xl text-gray-800 font-medium'>{questions[currentQuestion].question}</p>
            </div>

            {questions === MultipleChoiceQuestions ? (
              <div className='grid gap-3 mt-6'>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 text-lg font-medium
                      ${!isAnswered 
                        ? 'bg-white border-2 border-purple-500 text-purple-700 hover:bg-purple-50' 
                        : (index + 1) === questions[currentQuestion].answer 
                          ? 'bg-green-500 text-white transform scale-102'
                          : (index + 1) === userAnswer 
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-gray-500'}`}
                    onClick={() => handleAnswer(index + 1)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmitAnswer} className='space-y-6 mt-6'>
                <div className='space-y-3'>
                  <label htmlFor='answer' className='block text-lg font-medium text-gray-700'>
                    Your Answer
                  </label>
                  <input 
                    type='text' 
                    id='answer' 
                    value={userAnswer}
                    onChange={(e) => {
                      setUserAnswer(e.target.value);
                      if(e.target.value===questions[currentQuestion].answer.toString()){
                        setScore(prevScore => prevScore + 1)
                      }
                    }}
                    className='w-full border-2 border-purple-500 rounded-xl p-4 text-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300'
                    disabled={isAnswered}
                    placeholder='Enter your answer...'
                  />
                </div>
                {!isAnswered && (
                  <button 
                    type='submit'
                    className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl text-lg font-semibold
                      hover:shadow-lg transform hover:scale-102 transition-all duration-300'
                  >
                    Submit Answer
                  </button>
                )}
                {isSubmitted && (
                  <div className='bg-green-50 border border-green-200 rounded-xl p-4'>
                    <p className='text-lg text-green-700 font-medium text-center'>
                      Correct answer is {questions[currentQuestion].answer}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz