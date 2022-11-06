import { Outlet, Link } from "react-router-dom";

export default function Outline() {
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