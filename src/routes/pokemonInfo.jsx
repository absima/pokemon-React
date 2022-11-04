import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import typeColors from "../colorData/typeColors";

const clrs = typeColors();
console.log(clrs)

export default function PokemonInfo() {
  
  const { pokedata } = useContext(ProjContext);
  let params = useParams();
  if (pokedata.length>0){
    let pkmn = pokedata.find(item => item.id.toString() === params.pokemonID)
    return (
      <main 
        style={{ padding: "1rem" }}
      >
        <div className="pokepardiv">
          <div className="pokedetails">
            <h2>{pkmn.id}. {pkmn.name.english}</h2>
            <h3>Translated Names</h3>
            <ul>
              <li>{pkmn.name.chinese}</li>
              <li>{pkmn.name.japanese}</li>
              <li>{pkmn.name.french}</li>
            </ul>
            <h3>Type</h3>
            <ul>
              <li>{pkmn.type[0]}</li>
            </ul>
      
            <h3>Base</h3>
            <ul>
              <li>{pkmn.base["HP"]}</li>
              <li>{pkmn.base["Speed"]}</li>
              <li>{pkmn.base["Attack"]}</li>
              <li>{pkmn.base["Sp. Attack"]}</li>
              <li>{pkmn.base["Defense"]}</li>
              <li>{pkmn.base["Sp. Defense"]}</li>
            </ul>
          </div>
        </div> 
      </main>
    );
  } 
}