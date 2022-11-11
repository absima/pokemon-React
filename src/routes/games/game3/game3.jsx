import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import './style.css'
import pika from '../../images/pika.gif';
import PokemonsGame3 from "../../pokemonGame3";

export default function GameSivak() {
  const [animate, setAnimate] = useState(false)

  const handleJump = (e) => {
    e.preventDefault();
    setAnimate(!animate)
  }

  return (
    <main>
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
      <div>
        <PokemonsGame3 />
      </div>
      <div className="gamezone">
        <div className="game">
          <div className={animate ? "animate" : ""} id="character"><img src={pika} alt="555" /></div>
          <div id="block"></div>
        </div>
        <p>Score: <span id="scoreSpan"></span></p>
        <button onClick={handleJump}>Jump</button>
      </div>
      <Outlet />
    </main>
  );
}

