import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {

  const {wait,load,questions,index,correct}= useGlobalContext()
  return <h2>quiz starter</h2>
}

export default App
