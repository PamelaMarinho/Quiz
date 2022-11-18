import { createContext, useReducer } from "react";
import  question from "../data/question"

const level = ['Start', 'Playing', 'End']

const initialState = {
    stage: level[0],
    question
}

const reducer = (state, action) => {
    console.log(state, action)

    switch(action.type){
        case 'CHANGE_STATE':
            console.log('caiu')
            return state;
        
        default: 
            return state;
    }
}

export const QuizContent = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(reducer, initialState)

    return (
        <QuizContent.Provider value={value}>
            {children}
        </QuizContent.Provider>
    )
}