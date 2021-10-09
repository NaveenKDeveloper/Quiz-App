import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {

  const {wait,load,questions,index,correct}= useGlobalContext()
  if(wait){
    return <SetupForm />
  }

  if(load){
    return <Loading />
  }

  return <main>
    Quiz data
  </main>

}

export default App
