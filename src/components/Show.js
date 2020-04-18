import React from 'react';


const User = (props) => {
    const handleShowInfo = (event) =>{
        
        let target = event.target
        props.handleShowInfo(target)
    console.log(event.target)
    }
    
    return (
        <div>
        <li className="show" id={props.id} onClick={handleShowInfo} >
            <img src={props.photo} alt={props.name} />
            <div className ="details">
                <h2>{props.name}</h2>
    <p>{props.rating}</p>
    <p>{props.status}</p>
            </div>
        </li>
        </div>
        );
}

        
        
        export default User;