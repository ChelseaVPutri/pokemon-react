import { colours } from "../data/colours";

function PokemonItem({ pokemon }) {
    return (
        <div
            className="group relative w-75 rounded-[10px] text-center p-5 border-2 border-black shadow-[5px_5px_black] overflow-hidden"
            style={{backgroundColor: `${pokemon.color}`}}
        >
            <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
            <h1>{pokemon.name}</h1>

            {/* Types Container */}
            <div className="flex justify-center gap-7.5 mt-5">
                {pokemon.types.map((item, index) => (
                    <span
                        key={index}
                        className="w-25 p-1 rounded-md text-white border-2 border-black"
                        style={{backgroundColor: colours[item.toLowerCase()],}}
                    >
                        {item}
                    </span>
                ))}
            </div>
            
            {/* Description */}
            <p className="text-left p-5 text-[1.3rem] absolute bottom-0 left-0 w-full bg-white transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                {pokemon.description}
            </p>
        </div>
    );
}

export default PokemonItem;