import { useState } from 'react';
import pokemonJSON from '../data/pokemon.json';
import PokemonItem from './PokemonItem';

function PokemonList() {
    const [pokemons] = useState(pokemonJSON);
    const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

    const handleSearch = (e) => {
        let search = pokemons.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value);
        });

        setFilterPokemons(search);
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Cari Pokemon...'
                className='block w-[70vh] p-3.75 mx-auto my-12.5 text-base shadow-[3px_5px] rounded-[5px] border-2 border-black'
                onChange={handleSearch}
            />

            <div className='flex flex-wrap justify-center gap-7.5 my-25 mx-auto'>
                {filterPokemons.length == 0 ? (
                    <div>Data Tidak Ditemukan</div>
                ) : (
                        filterPokemons.map((item) => (
                            <PokemonItem
                                key={item.id}
                                pokemon={item}
                            />
                        ))
                )}
            </div>
        </div>
    );
}

export default PokemonList;