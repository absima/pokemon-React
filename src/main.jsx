import './index.css'

import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CtxtProvider from './setContext';

import App from "./App";
import Help from "./routes/help";
import Pokemons from "./routes/pokemons";
import Pokemon from "./routes/pokemon";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <CtxtProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="help" element={<Help />} />
          {/* <Route path="invoices" element={<Pokemons />} /> */}
          <Route path="pokemon" element={<Pokemons />}>
            <Route index element={ 
              <main style={{ padding: "1rem" }}>
                <p>Select a pokemon character</p>
              </main>}/>
            <Route path=":pokemonID" element={<Pokemon />} />
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
    </CtxtProvider>
  </BrowserRouter>
  // rootElement
);

