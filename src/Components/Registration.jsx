import React, { Component } from 'react';
import '../registration.css';
import Card from './Card';

function Registration() {
    var passo1 = true;
    var passo2 = true;
    var passo3 = true;

    const avancarP2 = () => {
        console.log("funcionou")
        passo1 = false;
        passo2 = true;
        passo3 = false;
    }
    const avancarP3 = () => {
        console.log("funcionou2")
        passo1 = false;
        passo2 = false;
        passo3 = true;
    }

    return (  
        <>
            <div className='container'>
                <div className='group'>
                    <Card exibir={passo1}>      
                        <h1>Make your registration.</h1>
                        <input type="text" placeholder='CPF' />
                        <span class="bar"></span>
                        <img src="memoji-1.png" alt="" className='memoji1'/>
                        <button onClick={avancarP2}>Advance</button>
                    </Card>
                    <Card exibir={passo2} >
                        <input type="text" placeholder='Full Name' className='input02'/>
                        <input type="text" placeholder='Cell' className='input2'/>
                        <input type="text" placeholder='Email' className='input2'/>
                        <input type="text" placeholder='Email confirmation' className='input2'/>
                        <button onClick={avancarP3} className='button-input2'>Enviar</button>
                    </Card>
                    <Card exibir={passo3} >
                        <h2>Registration sent for approval!</h2>
                        <h2>We will get back to your email.</h2>
                    </Card>
                </div>
                
            </div>
        </>
    );
}

export default Registration;