import { createContext, useState, useEffect } from "react";

const CtxtProvider = (props) => {
  const clrs = {}
  const [pokedata, setPokedata] = useState([]);
  const [ error, setError] = useState('');
  useEffect(() => {
    // fetch(`https://pokedex-dss-api.herokuapp.com/pokedex`)
    fetch(`https://pokemon-dss-api.herokuapp.com/pokedex`)
    .then((response) => response.json())
    .then((output)=> setPokedata(output))
    .catch(() => {
      setError("Error: Fetching Failed");
    })
  }, [])


  // console.log(data)

  // console.log(pokedata)

  return (
    <ProjContext.Provider
      value={{pokedata, setPokedata}}>
      {props.children}
    </ProjContext.Provider>
  )
}

export const ProjContext = createContext()
export default CtxtProvider;