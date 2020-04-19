import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';




const ShowList = (props) => {

    const {data,checked} = props
    
       
        return (
            
            <ul>
                {data
          .filter(showItem => !checked || (checked && showItem.show.status !== "Ended"))
            .map((showItem) =>
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