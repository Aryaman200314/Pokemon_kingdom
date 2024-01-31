import React, { useEffect, useState } from 'react';
import Pokemonbox from './Pokemonbox';
import './PokemonStyle.css'
import PokemoModel from './PokemoModel';

export default function Pokemon() {
  const [data, setData] = useState([]);
  const [slectedPokemon, setSelectdPokemon] = useState(null);
 
 
  const allPokemon = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12`);
    const res = await data.json();

    async function propertiesPokemon(x) {
      x.forEach(async (item) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
        const result = await response.json();
        setData((prev) => [...prev, result]);
      });
    }

    propertiesPokemon(res.results);
  };

  useEffect(() => {

    
    allPokemon();
    
  }, []);

  const closeModal=()=>
  {

    setSelectdPokemon(null);
  }
  const openModal=(pokemon)=>
  {

     setSelectdPokemon(pokemon);
  }

  const handleLoad=()=>
  {
    console.log("load")
    
    allPokemon();
    
  }

  return (
    <>
       <style>
       @import url('https://fonts.googleapis.com/css2?family=Barrio&display=swap'); 
       @import url('https://fonts.googleapis.com/css2?family=Single+Day&display=swap');
       </style>
       <div className='app'>

       <div className='main-heading'>Pokemon Kingdom</div>

<div className='main'>
  {data.map((item, index) => (
    <Pokemonbox key={index}
      name={item.name} 
      url={item.abilities[0]?.ability?.name}
           img={item.sprites.other.dream_world.front_default}
      weight={item.weight} 
      height={item.height}
      id = {item.id}
      onReadmore={() => openModal(item)}
    />
  ))}
 
  {slectedPokemon && (
      <PokemoModel onClose={closeModal} pokemon={slectedPokemon} />
    )}
 
   
     
</div>
      
       </div>
       <div className='class-loadmore'>
       <button onClick={handleLoad}className='loadmore'>Load More</button>  
       <h2 className='mySelf'> <span style={{ fontSize: '400%', color: 'red' }}>&hearts;</span>made by Aryaman</h2> <br/>
       <a className="links" href="https://github.com/Aryaman200314" target="_blank">Github</a><br/>
       <a className="links" href="https://www.linkedin.com/in/aryaman-sharma-07a233233/" target="_blank">linkedin</a>
       </div>
       
     
        
    </>
  );
}



