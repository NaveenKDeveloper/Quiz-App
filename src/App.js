import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {

  const {wait,load,questions,index,correct,nextQuestion}= useGlobalContext()
  if(wait){
    return <SetupForm />
  }

  if(load){
    return <Loading />
  }
  const {question,incorrect_answer,correct_answer}=questions[index]
  const answers = [...incorrect_answer,correct_answer]
  return (<main>
    <Modal />
    <section className='quiz'>
      <p className='correct-answers'>
       Correct Answer : {correct}/{index}
      </p>
      <article className='container'>
        <h2 dangerouslySetInnerHTML={{__html: question}}/>
        <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
      </article>
      <button className='next-question' onClick={nextQuestion}>
          Next Question
        </button>
      
    </section>
  </main> )

}

export default App
