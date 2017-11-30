import React from 'react'

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="field-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
