import { useParams } from "react-router-dom";
import typeColors from "../colorData/typeColors";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import { NavLink, Outlet } from "react-router-dom";

const clrs = typeColors();

export default function Pokemon() {
  const { pokedata } = useContext(ProjContext);
  let params = useParams();
  // console.log(params)
  if (pokedata.length > 0) {
    const pkmn = pokedata.find(item => item.id.toString() === params.pokemonID)
    // console.log(pkmn);
    return (
      <main style={{ padding: "1rem" }}>
        <div className="pokepardiv">
          <nav>
            {
              Object.keys(pkmn).map((item) => (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      // display: "inline-block",
                      // margin: "1rem 0",
                      color: isActive ? "green" : "",
                    };
                  }}
                  to={`/pokemon/${pkmn.id}/${item}`}
                  // to={`#`}
                  key={item}
                >
                  <span className="span">
                    {item}
                  </span>

                </NavLink>
              ))
            }
          </nav>

          <div className="pokemon-card-container"
            style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 90%, 50%)` }}
          >
            <div className="top-details">
              <table className="top">
                <thead>
                  <tr>
                    <td className="basic">{pkmn.name.chinese} (CH)</td>
                    <td className="basic">{pkmn.name.japanese} (JP)</td>
                    <td className="basic">{pkmn.name.french} (FR) </td>
                  </tr>
                </thead>

              </table>
              <table className="nameheaders">
                <thead>
                  <tr>
                    <td className="nameofanimal">{pkmn.name.english}</td>
                    <td className="hp">{pkmn.base.HP} HP</td>
                    <td className="typesign">
                      <img src={`/src/typeLogos/${pkmn.type[0]}.png`} alt="" width="25" height="25" />
                    </td>
                  </tr>
                </thead>

              </table>
            </div>
            <div className="pokemon-card">
              <div className="background"
                style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)` }}
              >
                <img className='card_image'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmn.id}.svg`}
                  alt="Pikachu" />
              </div>
              <div className="content"
                style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 100%, 80%)` }}
              >
                <ul className="pokemon-type"
                  style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)` }}
                >
                  <li> {pkmn.type[0]} </li>
                </ul>
                <h2 className="pokemon-speed"> speed: {pkmn.base.Speed}</h2>

                <div className="pokemon-stats">
                  <table className="table-stat">
                    <tbody>
                      <tr>
                        <td className="td-stat" >Attack:</td>
                        <td className="td-num" >{pkmn.base.Attack}</td>
                        <td className="td-sstat" >Sp. Attack:</td>
                        <td className="td-num1" >{pkmn.base["Sp. Attack"]}</td>
                      </tr>
                      <tr>
                        <td className="td-stat">Defense:</td>
                        <td className="td-num">{pkmn.base.Defense}</td>
                        <td className="td-sstat">Sp. Defense:</td>
                        <td className="td-num1">{pkmn.base["Sp. Defense"]}</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
            <h1 className="pokemon-logo"> {pkmn.id} </h1>            
          </div>
          <Outlet />
        </div>
      </main>
    );
  }
}







// // other fetch
// export default function Pokemon() {
//   let pkmn_param = useParams();
//   const [pkmn, setPkmn] = useState([]);
//   const [ oerror, setOerror] = useState('');
//   useEffect(() => {
//     fetch(`https://pokemon-dss-api.herokuapp.com/pokedex/${pkmn_param.pokemonID}`)
//     .then((response) => response.json())
//     .then((output)=> setPkmn(output))
//     .catch(() => {
//       setOerror("Error: Fetching Failed");
//     })
//   }, [])


//   if (pkmn["id"]){
//     return (
//       <main style={{ padding: "1rem" }}>
//         <div className="pokepardiv">
//           <div className="pokemon-card-container"
//             style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 90%, 50%)`}}
//           >
//             <div className="top-details">
//               <table className= "top">
//                 <tr> 
//                   <td className = "basic">{pkmn.name.chinese} (CH)</td>
//                   <td className = "basic">{pkmn.name.japanese} (JP)</td>
//                   <td className = "basic">{pkmn.name.french} (FR) </td>            
//                 </tr>
//               </table>
//               <table className = "nameheaders">
//                 <tr>
//                   <td className = "nameofanimal">{pkmn.name.english}</td>
//                   <td className = "hp">{pkmn.base.HP} HP</td>
//                   <td className = "typesign"> 
//                     <img src={`/src/typeLogos/${pkmn.type[0]}.png`} alt="" width="25" height="25"/>
//                   </td>
//                 </tr>
//               </table>
//             </div>
//             <div className="pokemon-card">
//               <div className="background" 
//               style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)`}}
//               >
//                 <img className = 'card_image'
//                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmn.id}.svg`} 
//                   alt={`${pkmn.name.english}`} />
//               </div>
//               <div className="content"
//                 style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 100%, 80%)`}}
//               >
//                 <ul className="pokemon-type"
//                   style={{backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)`}}
//                 >
//                   <li> {pkmn.type[0]} </li>
//                 </ul>
//                 <h2 className="pokemon-speed"> speed: {pkmn.base.Speed}</h2> 

//                 <div className="pokemon-stats">
//                   <table className = "table-stat">
//                     <tr>
//                       <td className = "td-stat" >Attack:</td>
//                       <td className = "td-num" >{pkmn.base.Attack}</td>
//                       <td className = "td-sstat" >Sp. Attack:</td>
//                       <td className = "td-num1" >{pkmn.base["Sp. Attack"]}</td>
//                     </tr>
//                     <tr>
//                       <td className = "td-stat">Defense:</td>
//                       <td className = "td-num">{pkmn.base.Defense}</td>
//                       <td className = "td-sstat">Sp. Defense:</td>
//                       <td className = "td-num1">{pkmn.base["Sp. Defense"]}</td>
//                     </tr>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <h1 className="pokemon-logo"> {pkmn.name.english} </h1>
//           </div>
//         </div> 
//       </main>
//     );
//   } 
// }