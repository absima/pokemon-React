import { NavLink, Outlet } from "react-router-dom";

export default function GameSima() {
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
          to={`/games/game2`}
          key="pokesima"
        >
          <div className="spandiv">
            <span className="span">
              PokéGame2
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

      <div
      className="gamezone"
      >

        <h2
        >Welcome to PokéGame - 2</h2>

        {/* <Game2app /> */}
        <div className="levelpar">
          <div className="levels">
            <ul>
              <h3> Please choose level to play</h3>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                    to={`/games/game2/level${item}`}
                    key={item}
                  >
                    <div className="leveldiv">

                      <li className="span">
                        Level {item} ({(item + 1) * 2} pairs of cards)
                        {/* |{" "} */}
                      </li>
                    </div>
                  </NavLink>
                ))
              }
            </ul>
          </div>
        </div>

      </div>

      <Outlet />
    </main>
  );
}