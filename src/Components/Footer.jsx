import React, { Component } from 'react';
import '../footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (  
        <>
            <div className='container-footer'>
                <div className='info'>
                    <a href=""> <li> Sobre nós </li> </a>
                    <a href=""> <li> Contatos </li> </a>
                    <a href=""> <li> Perguntas frequentes </li> </a>
                </div>
                <div className='icons'>
                    <a href=""> <li><FontAwesomeIcon icon={ faWhatsapp }  /> </li></a>
                    <a href=""> <li><FontAwesomeIcon icon={ faInstagram } /> </li></a>
                    <a href=""> <li><FontAwesomeIcon icon={ faLinkedin } /> </li></a>
                </div>

                
            </div>
            <footer>
                <p class="copyright">&copy; Copyright <strong>Itstf Bankman</strong></p>
            </footer>
        </>
    );
}

export default Footer;