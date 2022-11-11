// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import { ProjContext } from './setContext';
import Outline from "./routes/outline";
import Help from "./routes/help";
import Collection from "./routes/collection";
import Pokemons from "./routes/pokemons";
import Pokemon from "./routes/pokemon";
import PokemonInfo from "./routes/pokemonInfo";
// import Searchbar from "./routes/searchbar";
import Welcome from "./routes/welcome";
import Games from "./routes/games/games";
import GameDavid from "./routes/games/game1/game1";
import GameSima from "./routes/games/game2/game2";
import GameSivak from "./routes/games/game3/game3";
import Game2app from "./routes/games/game2/game2app";

export default function App() {
  // const {Outline,Pokemons,Pokemon,PokemonInfo,Help} = useContext(ProjContext);
  return (
    <Routes>
      <Route path="/" element={<Outline />} >
        <Route path="/" element={<Welcome />} />
        <Route path="help" element={<Help />} />
        <Route path="collection" element={<Collection />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemon/:pokemonID" element={<Pokemon />} />
        <Route path="/pokemon/:pokemonID/:info" element={<PokemonInfo />} />
        
        <Route path="/games" element={<Games />} />
        <Route path="/games/game1" element={<GameDavid />} />
        {/* <Route path="/games//game1/:id" element={<GameDavid />} />
        <Route path="/games//game1/:id/:info" element={<GameDavid />} /> */}

        <Route path="/games/game2" element={<GameSima />} />
        <Route path="/games/game2/:levelID" element={<Game2app />} />
        {/* <Route path="/games//game2/:id/:info" element={<GameSima />} /> */}

        <Route path="/games/game3" element={<GameSivak />} />
        {/* <Route path="/games//game3/:id" element={<GameSivak />} />
        <Route path="/games//game3/:id/:info" element={<GameSivak />} /> */}

        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>

          </main>} />
      </Route>
    </Routes>
  );
}
