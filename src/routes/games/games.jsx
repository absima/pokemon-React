import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjContext } from '../../setContext';
import { NavLink, Outlet } from 'react-router-dom';
// import typeColors from "../../colorData/typeColors";
// const clrs = typeColors();

export default function Games() {
  const { pokedata } = useContext(ProjContext);
  let params = useParams();
  if (pokedata.length > 0) {
    // const pkmn = pokedata.find(item => item.id.toString() === params.id)
    return (
      <div
      // className="gamezone"
      >
        <h2>Welcome to the game zone</h2>
        <h3
          style={{
            marginTop: '2rem',
            fontSize: '1.5rem',
          }}
        >
          {' '}
          Choose a game:
        </h3>
        <div>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'green' : '',
                  };
                }}
                to={`/games/memory`}
                key="memory"
              >
                <div
                  style={{
                    display: 'block',
                    margin: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Memory
                  </span>
                </div>
              </NavLink>
            </li>
            <li
              style={{
                // vertical space between links
                marginTop: '2rem',
              }}
            >
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'green' : '',
                  };
                }}
                to={`/games/pokefight`}
                key="pokéfight"
              >
                <div
                  style={{
                    display: 'block',
                    margin: '1rem',
                    marginLeft: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Contest
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    );
  }
}

/* <div className="pagehead">             
              {
                ['memory', 'pokéfight'].map((item) => (
                  
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "green" : "",
                      };
                    }}
                    to={`/games/${item}`}
                    key={item}
                  >
                    <div className="spandiv">
                      <span className="span">
                        {item} 
                      </span>
                    </div>
                  </NavLink> 
                ))
              }
            </div>
          <Outlet />
      </div>
    );
  }
} */
