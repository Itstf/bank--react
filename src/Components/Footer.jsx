import React, { Component } from 'react';
import '../footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'

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
                    <ul class="wrapper">
                        <li class="icon facebook">
                            <span class="tooltip">Whatsapp</span>
                            <span><a href=""><FontAwesomeIcon icon={ faWhatsapp }  /></a></span>
                        </li>
                        <li class="icon instagram">
                            <span class="tooltip">Instagram</span>
                            <span><a href=""><FontAwesomeIcon icon={ faInstagram } /></a></span>
                        </li>
                        <li class="icon github">
                            <span class="tooltip">Github</span>
                            <span><a href="https://github.com/Itstf"><FontAwesomeIcon icon={ faGithub } /></a></span>
                        </li>
                        <li class="icon youtube">
                            <span class="tooltip">Linkedin</span>
                            <span><a href="https://www.linkedin.com/in/thaiza-favarelli-da-silva-082978220/"><FontAwesomeIcon icon={ faLinkedin } /></a></span>
                        </li>
                    </ul>
                </div>
            </div>
            <footer>
                <p class="copyright">&copy; Copyright <strong>Itstf Bankman</strong></p>
            </footer>
        </>
    );
}

export default Footer;