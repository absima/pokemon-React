// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import { ProjContext } from './setContext';
import Outline from "./routes/outline";
import Help from "./routes/help";
import Pokemons from "./routes/pokemons";
import Pokemon from "./routes/pokemon";
import PokemonInfo from "./routes/pokemonInfo";
import Searchbar from "./routes/searchbar";
export default function App() {
  // const {Outline,Pokemons,Pokemon,PokemonInfo,Help} = useContext(ProjContext);
  return (
    <Routes>
      <Route path="/" element={<Outline />} >
        <Route path="help" element={<Help />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemon/:pokemonID" element={<Pokemon />} />
        <Route path="/pokemon/:pokemonID/:info" element={<PokemonInfo />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>}/>
      </Route>
    </Routes>
  );
}
