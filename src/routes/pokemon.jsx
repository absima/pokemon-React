import { useParams } from "react-router-dom";
import typeColors from "../colorData/typeColors";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import { NavLink, Outlet } from "react-router-dom";
import PokeCard from "./card";
const clrs = typeColors();

export default function Pokemon() {
  const { pokedata } = useContext(ProjContext);
  let params = useParams();
  // console.log(params)
  if (pokedata.length > 0) {
    const pkmn = pokedata.find(item => item.id.toString() === params.pokemonID)
    // console.log(pkmn);
    return (
      <main style={{ padding: "1rem" }}>
        <div className="pokepardiv">
          <div className="cardhead">
            <div>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "gray" : "",
                  };
                }}
                to={`/pokemon`}
                key={"back"}
              >
                <div className="backdiv">
                  &#8678; back
                </div>
              </NavLink>
            </div>

            <div>
              {
                Object.keys(pkmn).map((item) => (
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        // display: "inline-block",
                        // margin: "1rem 0",
                        color: isActive ? "green" : "",
                      };
                    }}
                    to={`/pokemon/${pkmn.id}/${item}`}
                    // to={`#`}
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
          </div>
          <PokeCard pkmn={pkmn} clrs={clrs} />
          <Outlet />
        </div>
      </main>
    );
  }
}
