import './index.css'

import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Help from "./routes/help";
import Pokemons from "./routes/pokemons";
import Pokemon from "./routes/pokemon";
import PokemonInfo from "./routes/pokemonInfo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="help" element={<Help />} />
          <Route path="pokemon" element={<Pokemons />}>
            <Route index element={ 
              <main style={{ padding: "1rem" }}>
                <p>Select a pokemon character</p>
              </main>}/>
            <Route path=":pokemonID" element={<Pokemon />} />
            <Route path=":pokemonID/:info" element={<PokemonInfo />}/>
          </Route>
          <Route
            path="*"
            element={
              <main 
                style={{ padding: "1rem" }}
              >
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
  </BrowserRouter>
);

