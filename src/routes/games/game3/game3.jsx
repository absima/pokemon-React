import { NavLink, Outlet } from "react-router-dom";
import './script.jsx'
import './style.css'

export default function GameSivak() {
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
          to={`/games/game2/pokesivak`}
          key="pokesivak"
        >
          <div className="spandiv">
            <span className="span">
              <h2>Welcome to Pokésivak</h2>
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

      <div className="gamezone">
        <div className="game">
          <div id="character"></div>
          <div id="block"></div>
        </div>
        <p>Score: <span id="scoreSpan"></span></p>
      </div>
      <Outlet />
    </main>
  );
}