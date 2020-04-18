import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';




const ShowList = (props) => {

    
    
       
        return (
            
            <ul>
            {props.data.map((showItem, index) =>
            
                <Show
                key = {index}
                title = {showItem.show.name}
                photo = {showItem.show.image.medium}
                rating = {showItem.show.rating.average}
                status ={showItem.show.status}
                id = {showItem.show.id}
                handleShowInfo = {props.handleShowInfo}
                
                /> 
                )}
                </ul>
                );
            }

        
        export default ShowList;