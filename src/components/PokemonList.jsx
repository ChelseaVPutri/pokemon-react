import { useState } from 'react';
import pokemonJSON from '../data/pokemon.json';

function PokemonList() {
    const [pokemons] = useState(pokemonJSON);

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-7.5 mx-auto my-25'>
                {pokemons.map((item) => (
                    <h1>{item.name}</h1>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;