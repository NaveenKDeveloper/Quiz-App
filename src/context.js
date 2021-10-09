import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const temp =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [wait, setWait] = useState(true);
  const [load, setLoad] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchQuestions= async (url)=>{
    setLoad(true)
    setWait(false)
    const response =await axios(url).catch((err) => console.log(err)
    )
    if(response){
      const data = response.data.results
      if(data.length > 0){
        setQuestions(data)
        setLoad(false)
        setWait(false)
        setError(false)
      }
      else{
        setWait(true)
        setError(true)
      }
    }
    else{ setWait(true)}
    
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      } else {
        return index
      }
    })
  }
  useEffect(()=>{
    fetchQuestions(temp)
  },[])
  return (
    <AppContext.Provider
      value={{ wait, load, questions, nextQuestion,index, correct, error, isModalOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};
 
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
