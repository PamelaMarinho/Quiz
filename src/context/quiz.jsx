import { createContext } from "react";

export const QuizContent = createContext()

export const QuizProvider = ({children}) => {

    const value = {name: 'Quiz'}

    return (
        <QuizContent.Provider value={value}>
            {children}
        </QuizContent.Provider>
    )
}