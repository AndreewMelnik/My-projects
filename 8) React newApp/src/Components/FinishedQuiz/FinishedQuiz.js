import React from 'react'
import './FinishedQuiz.css'
import Button from '../Button/Button'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === '__success') {
      total++
    }

    return total
  }, 0)


  return (
    <div className={'FinishedQuiz'}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          let cls = 'fa';
          if (props.results[quizItem.id]=== '__error') {
            cls +=' fa-times __error';
        }

        else  {
          cls +=' fa-check __success';
        }

          return (
            <li
              key={index}
            >
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls} />
            </li>
          )

        })}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        {/* <button onClick={props.onRetry}>Повторить</button> */}
        <Button onClick={props.onRetry} type="primary">Retry</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz