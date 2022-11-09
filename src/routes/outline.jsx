import { Outlet, Link } from "react-router-dom";
import Welcome from "./welcome";
export default function Outline() {
  return (
    <div>
      <h1>Pokefight</h1>
      <nav
        style={{
          // borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/pokemon">Pokémon</Link> |{" "}
        <Link to="/collection">Collection</Link> |{" "}
        <Link to="/games">Games</Link> |{" "}
        <Link to="/help">Help</Link> 


      </nav>
      <Outlet />
      {/* <Searchbar /> */}
      {/* <Pokemons /> */}
    </div>
  );
}