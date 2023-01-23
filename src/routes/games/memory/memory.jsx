import { NavLink, Outlet } from 'react-router-dom';

export default function Memory() {
  return (
    <main>
      <div>
        <div
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-around',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <NavLink to={`/games`} key={'back'}>
            <div>&#8678; back</div>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                // display: "inline-block",
                // margin: "1rem 0",
                color: isActive ? 'green' : '',
              };
            }}
            to={`/games/memory`}
            key="pokesima"
          >
            <div
            // className="spandiv"
            >
              <span
              // className="span"
              >
                Memory
                {/* |{" "} */}
              </span>
            </div>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                // display: "inline-block",
                // margin: "1rem 0",
                color: isActive ? 'green' : '',
              };
            }}
            to={`/games/memory/rules`}
            key="rules2"
          >
            <div
            // className="spandiv"
            >
              <span
              // className="span"
              >
                rules
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      <div
      // className="gamezone"
      >
        <h2>Let's play memory ...</h2>

        {/* <Game2app /> */}
        <div className="levelpar">
          <div className="levels">
            <ul>
              <h3> Please choose level to play</h3>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'green' : '',
                    };
                  }}
                  to={`/games/memory/level${item}`}
                  key={item}
                >
                  <div className="leveldiv">
                    <li className="span">
                      Level {item} ({(item + 1) * 2} pairs of cards)
                      {/* |{" "} */}
                    </li>
                  </div>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </main>
  );
}
