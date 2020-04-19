import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';




const ShowList = (props) => {

    
    
       
        return (
            
            <ul>
            {props.data.map((showItem) =>
                <Link to={`/Show/${showItem.show.id}`}>
                <Show
                key = {showItem.show.id}
                title = {showItem.show.name}
                photo = {showItem.show.image.medium}
                rating = {showItem.show.rating.average}
                status ={showItem.show.status}
                handleShowInfo = {props.handleShowInfo}
                id = {showItem.show.id}
               
                
                /> 
                </Link>
                )}
                </ul>
                );
            }

        
        export default ShowList;