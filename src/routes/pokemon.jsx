import { useParams } from "react-router-dom";
// // import pokedata from "../data/pokedex"// assert {type: 'json'};
// import { getPokemons } from "../data/pokedex";

import { useContext } from "react";
import { ProjContext } from "../setContext";
import typeColors from "../colorData/typeColors";

const clrs = typeColors();
console.log(clrs)
// let pokedata = getPokemons();

export default function Pokemon() {
  
  const { pokedata } = useContext(ProjContext);
  // console.log(pokedata);
  let params = useParams();
  // console.log(typeof params.pokemonID)
  if (pokedata.length>0){
    let pkmn = pokedata.find(item => item.id.toString() === params.pokemonID)
    // console.log('colors', clrs)
    // console.log(pkmn);
    return (
      <main style={{ padding: "1rem" }}>
        <div className="pokepardiv">
          {/* <div className="pokedetails">
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
          </div> */}
          <div className="pokemon-card-container"
            style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 90%, 50%)`}}
          >
            <div className="top-details">
              <table className= "top">
                <tr> 
                  <td className = "basic">{pkmn.name.chinese} (CH)</td>
                  <td className = "basic">{pkmn.name.japanese} (JP)</td>
                  <td className = "basic">{pkmn.name.french} (FR) </td>            
                </tr>
              </table>
              <table className = "nameheaders">
                <tr>
                  <td className = "nameofanimal">{pkmn.name.english}</td>
                  <td className = "hp">{pkmn.base.HP} HP</td>
                  <td className = "typesign"> 
                    <img src={`/src/typeLogos/${pkmn.type[0]}.png`} alt="" width="25" height="25"/>
                  </td>
                </tr>
              </table>
            </div>
            <div className="pokemon-card">
              <div className="background" 
              style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)`}}
              >
                <img className = 'card_image'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmn.id}.svg`} 
                  alt="Pikachu" />
              </div>
              <div className="content"
                style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 100%, 80%)`}}
              >
                <ul className="pokemon-type"
                  style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)`}}
                >
                  <li> {pkmn.type[0]} </li>
                </ul>
                <h2 className="pokemon-speed"> speed: {pkmn.base.Speed}</h2> 

                <div className="pokemon-stats">
                  <table className = "table-stat">
                    <tr>
                      <td className = "td-stat" >Attack:</td>
                      <td className = "td-num" >{pkmn.base.Attack}</td>
                      <td className = "td-sstat" >Sp. Attack:</td>
                      <td className = "td-num1" >{pkmn.base["Sp. Attack"]}</td>
                    </tr>
                    <tr>
                      <td className = "td-stat">Defense:</td>
                      <td className = "td-num">{pkmn.base.Defense}</td>
                      <td className = "td-sstat">Sp. Defense:</td>
                      <td className = "td-num1">{pkmn.base["Sp. Defense"]}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <h1 className="pokemon-logo"> {pkmn.name.english} </h1>
          </div>
        </div> 
      </main>
    );
  } 
}