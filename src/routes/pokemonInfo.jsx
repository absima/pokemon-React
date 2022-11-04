import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import typeColors from "../colorData/typeColors";

const clrs = typeColors();
console.log(clrs)

export default function PokemonInfo() {
  let params = useParams();
  const [pinfo, setPinfo] = useState(0);
  const [perror, setPerror] = useState('');
  const [items, setItems] = useState('');
  useEffect(() => {
    fetch(`https://pokemon-dss-api.herokuapp.com/pokedex/${params.pokemonID}/${params.info}`)
      .then((response) => response.json())
      .then((output) => setPinfo(output))
      .catch(() => {
        setPerror("Error: Fetching Failed");
      })
  }, [])

  console.log('pinfo', pinfo)
  if (pinfo !== 0) {
    let items
    const title = params.info;
    const titmod = title.charAt(0).toUpperCase()+title.slice(1);
    if (title === 'name') {
      const kys = Object.keys(pinfo)
      items = ['EN','JA','CH','FR'].map((item, i)=><li>{pinfo[kys[i]]} ({item})</li>)
    }
    else if (title === 'type') {
      items = pinfo.map(element => <li>{element}</li>);
    }
    else if (title === 'base'){
      const kys = Object.keys(pinfo)
      items = kys.map(item=><li>{pinfo[item]}: {item}</li>)
    }

    return (
      <main
        style={{ padding: "1rem" }}
      >
        <div 
          style={{lineHeight: "25px", textAlign: "left"}}
        >
          
          <h3> {titmod} </h3>
          <ul> {items} </ul>
        </div>
      </main>

    )
  }
}