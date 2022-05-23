import React from 'react'
import './AnswerItem.css';
const AnswerItem = props => {

  let classNames = 'AnswerItem';

  if (props.state) {
            classNames +=[props.state];
        }
  
  return (
    <li
      className={classNames}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
}

export default AnswerItem