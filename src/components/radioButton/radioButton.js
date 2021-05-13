import React from 'react';

function RadioButton(props) {
  return (
    <>
      <input type="radio" id={props.method} name="method" value={props.method} onClick={props.click} />
      <label htmlFor={props.method}>{props.method.toUpperCase()}</label>
    </>
  )
}

export default RadioButton;
