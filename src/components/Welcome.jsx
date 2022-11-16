import Quiz from '../image/quiz.svg';

import './Welcome.css';

export const Welcome = () => {
  return (
    <div id='welcome'>
        <h1>WELCOME</h1>
        <p>Click button below to start:</p>
        <button>Start</button>
        <img src={Quiz} alt='start quiz'></img>
    </div>
  )
}
