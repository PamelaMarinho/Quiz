import { useContext } from 'react';
import { QuizContent } from '../context/quiz';
import Quiz from '../image/quiz.svg';

import './Welcome.css';

export const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContent)

  return (
    <div id='welcome'>
        <h1>WELCOME</h1>
        <p>Click button below to start:</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Start</button>
        <img src={Quiz} alt='start quiz'></img>
    </div>
  )
}
