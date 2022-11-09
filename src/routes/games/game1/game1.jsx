import { NavLink, Outlet } from "react-router-dom";

export default function GameDavid() {
  return (
    <main >
      <div className="pagehead">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "gray" : "",
            };
          }}
          to={`/games`}
          key={"back"}
        >
          <div className="backtxt">
            &#8678; back
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              // display: "inline-block",
              // margin: "1rem 0",
              color: isActive ? "green" : "",
            };
          }}
          to={`/games/game2/pokedave`}
          key="pokedave"
        >
          <div className="spandiv">
            <span className="span">
              Pokédave
              {/* |{" "} */}
            </span>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              // display: "inline-block",
              // margin: "1rem 0",
              color: isActive ? "green" : "",
            };
          }}
          to={`/games/game2/rules`}
          key='rules2'
        >
          <div className="spandiv">
            <span className="span">
              rules
            </span>
          </div>
        </NavLink>
      </div>

      <h2
      // className="gamezone"
      >Welcome to Pokédave</h2>
      <Outlet />
    </main>
  );
}