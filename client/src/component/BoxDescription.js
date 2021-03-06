import React from 'react';

const BoxDescription = (props) => {
    return(
        <div className='descriptionLine'>
            <img className='descriptionIcon' src={props.icon}/>
            <div className = "descriptionTitle">{props.title}</div>
            <div className = "descriptionContent">{props.content}</div>
    </div>   
    );
}

export default BoxDescription;