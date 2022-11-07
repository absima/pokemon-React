import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjContext } from "../../setContext";
import { NavLink, Outlet } from "react-router-dom";
// import typeColors from "../../colorData/typeColors";
// const clrs = typeColors();

export default function Games() {
  const { pokedata } = useContext(ProjContext);
  let params = useParams();
  if (pokedata.length > 0) {
    // const pkmn = pokedata.find(item => item.id.toString() === params.id)
    return (
      <div style={{ padding: "1rem" }}>
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
              {
                [1,2,3,4,5,6].map((item) => (
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        // display: "inline-block",
                        // margin: "1rem 0",
                        color: isActive ? "green" : "",
                      };
                    }}
                    to={`/games/game${item}`}
                    key={item}
                  >
                    <div className="spandiv">
                      <span className="span">
                        Game {item} 
                        {/* |{" "} */}
                      </span>
                    </div>


                  </NavLink> 
                ))
              }
            </div>
          <h2 className="gamezone"> Welcome to our game zone</h2>
          <Outlet />
      </div>
    );
  }
}
