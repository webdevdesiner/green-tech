import React from 'react';
import '../pages/Footer.css';
import zapzap from '../pages/imagens greentech/icones/zapzap.png';
import email from '../pages/imagens greentech/icones/emailverde.png';
import insta from '../pages/imagens greentech/icones/instagraverde.png';
import face from '../pages/imagens greentech/icones/faceverde.png';

function Footer()
{
    return (
       <footer className='FooterArea'>
        
        <div className='redeSociais'>
            
                <img src ={zapzap}/>
                <img src = {email}/>
                <img src = {insta}/>
                <img src = {face}/>
            
            
        </div>
       </footer>
    )
}

export default Footer;