import { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// import Outline from "./routes/outline";
// import Pokemons from "./routes/pokemons";
// import Pokemon from "./routes/pokemon";
// import PokemonInfo from "./routes/pokemonInfo";
// import Help from "./routes/help";

const CtxtProvider = (props) => {
  // const api = 'http://localhost:5000'
 console.log(import.meta.env.VITE_API_URL + `pokemons`)
  const [pokedata, setPokedata] = useState([]);
  const [error, setError] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // fetch(`https://pokemon-dss-api.herokuapp.com/pokedex`)
    fetch(import.meta.env.VITE_API_URL + `pokemons`)
      .then((response) => response.json())
      .then((output) => setPokedata(output))
      .catch(() => {
        setError("Error: Fetching Failed");
      })
  }, [])
  return (
    <ProjContext.Provider value={{pokedata, error, searchParams, setPokedata, setSearchParams}}> 
      {props.children}
    </ProjContext.Provider>
  )
}

export const ProjContext = createContext()
export default CtxtProvider;





