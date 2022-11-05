import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import { NavLink, Outlet } from "react-router-dom";

// import typeColors from "../colorData/typeColors";
// const clrs = typeColors();

export default function PokemonInfo() {
  const { pokedata } = useContext(ProjContext);
  const params = useParams();
  let title = params.info;
  title = title.charAt(0).toLowerCase()+title.slice(1);
  // console.log(params)
  // console.log(pokedata);
  if (pokedata.length > 0) {
    const pkmn = pokedata.find(item => item.id.toString() === params.pokemonID);
    const pinfo = pkmn[title];
   
    let items
    const titmod = title.charAt(0).toUpperCase()+title.slice(1);
    if (title === 'id') {
      items = [pinfo].map(element => <li>{element}</li>);
    }
    else if (title === 'name') {
      const kys = Object.keys(pinfo)
      items = ['EN','JA','CH','FR'].map((item, i)=>
        <li key={i}>{pinfo[kys[i]]} ({item})</li>)
    }
    else if (title === 'type') {
      items = pinfo.map(element => <li>{element}</li>);
    }
    else if (title === 'base'){
      const kys = Object.keys(pinfo)
      items = kys.map((item, i)=>
      <li key={i}>{pinfo[item]}: {item}</li>)
    }

    return (
      <main style={{ padding: "1rem" }} >
        <div>
          <nav>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "gray" : "",
                };
              }}
              to={`/pokemon/${pkmn.id}`}
              key={"back"}
            >
              <div className="backdiv">
              &#8678; back
              </div>
            </NavLink> 
          </nav>
          <div style={{lineHeight: "25px", textAlign: "left"}}>  
            <h3> {titmod} </h3>
            <ul> {items} </ul>
          </div>
          <Outlet />
        </div>
        
      </main>

    )
  }
}


// export default function PokemonInfo() {
//   let params = useParams();
//   const [pinfo, setPinfo] = useState(0);
//   const [perror, setPerror] = useState('');
//   const [items, setItems] = useState('');
//   useEffect(() => {
//     fetch(`https://pokemon-dss-api.herokuapp.com/pokedex/${params.pokemonID}/${params.info}`)
//       .then((response) => response.json())
//       .then((output) => setPinfo(output))
//       .catch(() => {
//         setPerror("Error: Fetching Failed");
//       })
//   }, [])

//   console.log('pinfo', pinfo)
//   if (pinfo !== 0) {
//     let items
//     const title = params.info;
//     const titmod = title.charAt(0).toUpperCase()+title.slice(1);
//     if (title === 'name') {
//       const kys = Object.keys(pinfo)
//       items = ['EN','JA','CH','FR'].map((item, i)=><li>{pinfo[kys[i]]} ({item})</li>)
//     }
//     else if (title === 'type') {
//       items = pinfo.map(element => <li>{element}</li>);
//     }
//     else if (title === 'base'){
//       const kys = Object.keys(pinfo)
//       items = kys.map(item=><li>{pinfo[item]}: {item}</li>)
//     }

//     return (
//       <main
//         style={{ padding: "1rem" }}
//       >
//         <div 
//           style={{lineHeight: "25px", textAlign: "left"}}
//         >
          
//           <h3> {titmod} </h3>
//           <ul> {items} </ul>
//         </div>
//       </main>

//     )
//   }
// }