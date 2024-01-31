import React from 'react';
import './PokemonStyle.css' 
export default function Pokemonbox({ name, url,img,id, weight, height, onReadmore}) {
    

  return (
    <div className='cardContainer'>
       
      <div className='card'>
       <header>#{id}</header>
      <img src={img}/>
        <h2>
          <div className='name-type'>
           {name}
          <br/>
          
          </div>
        </h2>
        <button className="readMore" onClick={()=>onReadmore()}>Read more</button>
      </div>
    </div>
  );
}