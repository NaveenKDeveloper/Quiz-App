import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const temp= 'https://opentdb.com/api.php?amount=15&category=27&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [wait,setWait]=useState(true)
  const [load,setLoad]=useState(false)
  const [questions,setQuestions]=useState([])
  const [index,setIndex]=useState(0)
  const [correct,setCorrect]=useState(0)
  const [error,setError]=useState(0)
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
