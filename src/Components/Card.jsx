import React, { Component } from 'react';
import '../card.css';

function Card(props) {
    return ( 
        <div className='card' style={{display: props.exibir ?'flex' : 'none'}}>
            {props.children}
        </div>

     );
}

export default Card;