import { Outlet, Link } from "react-router-dom";
import Searchbar from "./searchbar";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import Pokemons from "./pokemons";

export default function Outline() {
  const {pokedata, error, searchParams, setSearchParams} = useContext(ProjContext);
  return (
    <div>
      <h1>Pokefight</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/pokemon">Pokemon</Link> |{" "}
        <Link to="/help">Help</Link>
        
      </nav>
      <Outlet />
      {/* <Searchbar /> */}
      {/* <Pokemons /> */}
    </div>
  );
}