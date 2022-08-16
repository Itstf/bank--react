import React, { Component } from 'react';
import '../navbar.css';
import Slider from './Slider/Slider';

function Navbar() {
    return (  
        <>
            <div className='navbar'>
                <div className='flex'>
                    <div>
                        <a href='#' className='logo'>
                            <img src="logo_white.png" alt="" className='img-logo'/>
                        </a>
                    </div>
                    <div>
                        <button  className='button-login'> Login </button>
                    </div>
                </div>
                <div>
                    <Slider/>
                </div>
            </div>
        </>
    );
}

export default Navbar;