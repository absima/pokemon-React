import { NavLink, Outlet } from 'react-router-dom';

export default function Pokefight() {
  return (
    <main>
      <div className="pagehead">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'gray' : '',
            };
          }}
          to={`/games`}
          key={'back'}
        >
          <div className="backtxt">&#8678; back</div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              // display: "inline-block",
              // margin: "1rem 0",
              color: isActive ? 'green' : '',
            };
          }}
          to={`/games/pokefight`}
          key="pokesima"
        >
          <div className="spandiv">
            <span className="span">
              Contest
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
          <div className="spandiv">
            <span className="span">rules</span>
          </div>
        </NavLink>
      </div>

      <div className="gamezone">
        <h2> Under development ... sorry</h2>
      </div>

      <Outlet />
    </main>
  );
}
