
import './css/cardGame3.css'

export default function PokeCard({ pkmn, deNames, clrs }) {
    let url
    pkmn.id < 650 ?
        url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmn.id}.svg` :
        url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pkmn.id}.png`;

    return (
        <div className="parcardiv">
            <div className="">
                <div className="avatar-game-3"
                    style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)` }}
                >
                    { }
                    <img className="image-game-3"
                        src={url}
                        alt={`${pkmn.name.english}`}
                    />
                </div>
                <div className="speed"> Speed: {pkmn.base.Speed}</div>
            </div>
        </div>
    );
}
