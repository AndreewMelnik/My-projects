import React from 'react'
import './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  let cls = 'Input'
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls += ' invalid'}

  return (
    <div className={cls}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Please enter a valid value'}</span>
          : null
      }
    </div>
  )
}

export default Input