import React from 'react';
import imagemlogo from './imagens greentech/imagens/1x/1x/greentech.png'
import './Header.css'
import {FaSearch, fasearch} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      
      <div className="search-bar">
        <input type="text" placeholder="Digite sua pesquisa..." />
        <FaSearch className='iconeSearch'/>
        <button type="submit">Pesquisar</button>
      </div>

      <div className="logo">
        <img className="imgBanner" src={imagemlogo} alt="Logo do Site" />
      </div>
    </header>
  );
};

export default Header;