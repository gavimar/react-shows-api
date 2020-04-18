import React from 'react';

const Input = (props) => {

  const handleInputValue = (event) => {
    let target = event.currentTarget.value;
    props.handleInputValue(target)
   
  }

  const handleInputFetch = () =>{
    props.fetchInputShows();
  }

  return (
    <div className="input-wrapper">
      
      <input name={props.name}
             type={props.type}
             onChange = {handleInputValue}
             
             
      />
      <button type="button" onClick={handleInputFetch}>Submit</button>
    </div>
  )
}

export default Input;