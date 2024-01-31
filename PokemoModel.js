import React from 'react'

export default function PokemoModel({onClose, pokemon}) {
    return (
        <div className='modalOverlay'>
            <div className='moredetails'>
                 <p>pokemon weight: {pokemon.weight}</p>  
                 <p>Pokemon height: {pokemon.height}</p>   
                 <p>Abilities: {pokemon.abilities ? pokemon.abilities.map((ability) => ability.ability.name).join(', stat1:') : 'N/A'}</p>
                 
                 <button onClick={onClose}>X</button>
            </div>
        </div>
    );
}
