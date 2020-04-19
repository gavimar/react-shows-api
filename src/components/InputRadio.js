import React from 'react';

const InputRadio = (props) => {

  const handleInputValue = (event) => {
    let target = event.currentTarget.value;
    props.handleInputValue(target)
   
  }

  const handleInputFetch = () =>{
    props.fetchInputShows();
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={props.id}>{props.labelName}</label>
      <input name={props.name}
             type={props.type}
             checked = {props.checked}
             onClick = {props.handleRadioButton}
             
             
      />
     
    </div>
  )
}

export default InputRadio;