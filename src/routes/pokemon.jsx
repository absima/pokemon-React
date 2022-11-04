import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import typeColors from "../colorData/typeColors";

const clrs = typeColors();
console.log(clrs)

export default function Pokemon() {
  let params = useParams();
  const [pkmn, setPkmn] = useState([]);
  const [ oerror, setOerror] = useState('');
  useEffect(() => {
    fetch(`https://pokemon-dss-api.herokuapp.com/pokedex/${params.pokemonID}`)
    .then((response) => response.json())
    .then((output)=> setPkmn(output))
    .catch(() => {
      setOerror("Error: Fetching Failed");
    })
  }, [])


  if (pkmn["id"]){
    return (
      <main style={{ padding: "1rem" }}>
        <div className="pokepardiv">
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
                  alt={`${pkmn.name.english}`} />
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