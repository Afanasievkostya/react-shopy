import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
         className="form-control"
         type={inputType}
         id={htmlFor}
         value={props.value}
         onChange={props.onChange}
         required
         />
      {
        isInvalid(props)
        ?
        <div className={classes.isvalid}><span>{props.errorMessage || 'Введите верное значение'}</span></div>
        : null
      }
    </div>
  )
}
export default Input
