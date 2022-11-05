import { createContext, useState, useEffect } from "react";
// import Outline from "./routes/outline";
// import Pokemons from "./routes/pokemons";
// import Pokemon from "./routes/pokemon";
// import PokemonInfo from "./routes/pokemonInfo";
// import Help from "./routes/help";

const CtxtProvider = (props) => {
  const [pokedata, setPokedata] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch(`https://pokemon-dss-api.herokuapp.com/pokedex`)
      .then((response) => response.json())
      .then((output) => setPokedata(output))
      .catch(() => {
        setError("Error: Fetching Failed");
      })
  }, [])
  return (
    <ProjContext.Provider value={{pokedata, error}}> 
      {props.children}
    </ProjContext.Provider>
  )
}

export const ProjContext = createContext()
export default CtxtProvider;


              // pokedata, 
              // setPokedata,
              // pkmn, 
              // setPkmn,
              // pinfo, 
              // setPinfo,
              // pkmn_param,
              // pinfo_params,