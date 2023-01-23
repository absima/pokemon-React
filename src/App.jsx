import { Routes, Route } from 'react-router-dom';
import Pokemons from './routes/pokemons';
import Pokemon from './routes/pokemon';
import PokemonInfo from './routes/pokemonInfo';
// import Searchbar from "./routes/searchbar";
import Welcome from './routes/welcome';
import Games from './routes/games/games';
import Memory from './routes/games/memory/memory';
import Memo from './routes/games/memory/memoryapp';
import Pokefight from './routes/games/pokefight/pokefight';
import About from './routes/about';
import MemoryRules from './routes/games/memory/rules';

import Entry from './routes/entry';
export default function App() {
  // const {Outline,Pokemons,Pokemon,PokemonInfo,Help} = useContext(ProjContext);
  return (
    <Routes>
      <Route path="/" element={<Entry />}>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/help" element={<Help />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemon/:pokemonID" element={<Pokemon />} />
        <Route path="/pokemon/:pokemonID/:info" element={<PokemonInfo />} />

        <Route path="/games" element={<Games />} />
        <Route path="/games/memory" element={<Memory />} />
        <Route path="/games/memory/:levelID" element={<Memo />} />
        <Route path="/games/memory/rules" element = {<MemoryRules/>}/>
        {/* <Route path="/games//memory/:id/:info" element={<GameSima />} /> */}

        <Route path="/games/contest" element={<Pokefight />} />
        

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>...under development. Sorry!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
