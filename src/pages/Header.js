import React from 'react';
import './Header.css';
import Headerimg from '../pages/imagens greentech/imagens/1x/1x/greentech.png';


function Header()
{
    return (
       <header className='logoArea'>
        
        <div className='navArea'>
            <div>
                
                <input type ="text" placeholder = "Digite a sua pesquisa..."></input>
                <button type = "submit" >Pesquisar</button>
            </div>
            <div>
        
                <img src ={Headerimg}/>
            </div>    
            
        </div>
        
       </header>
    )
}

export default Header