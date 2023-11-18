import React from 'react';
import './Card.css'
import fotoproduto from './imagens greentech/imagens/placa.jpg'


const Card = () => {
  return (
    <section className='cardArea'>  
        <img src = {fotoproduto} className='fotoProduto'/>    
      <div className='descricaoProduto'>Descrição Produto</div>
    </section>
  );
};

export default Card;