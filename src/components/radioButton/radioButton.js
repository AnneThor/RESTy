import React from 'react';
import './radioButton.scss';

function RadioButton(props) {
  return (
    <>
      <div className="radio-button">
        <input type="radio" id={props.method} name="method" value={props.method} onClick={props.click} />
        <label htmlFor={props.method}>{props.method.toUpperCase()}</label>
      </div>
    </>
  )
}

export default RadioButton;
