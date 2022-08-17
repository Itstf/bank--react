import React, { Component } from 'react';
import '../about.css';

function About() {
    return (  
        <>
            <div className='about'>
                <div className='divv'></div>
                <div className='all'>
                    <div className='photo1'>
                        <div className='filter'>
                            <h1>Mais experiência</h1>
                        </div>
                    </div>
                    <div className='photo2'>
                        <div className='filter'>
                            <h1>Mais alegria</h1>
                        </div>
                    </div>
                    <div className='photo3'>
                        <div className='filter'>
                            <h1>Mais investimentos</h1>
                        </div>
                    </div>
                    <div className='photo4'>
                        <div className='filter'>
                            <h1>IA</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;