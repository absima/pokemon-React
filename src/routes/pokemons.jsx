// import { useState, useEffect } from "react";
import {
  NavLink,
  Outlet,
  // useSearchParams,
} from "react-router-dom";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import Searchbar from "./searchbar";
import PokeCard from "./card";
import typeColors from "../colorData/typeColors";

// export default function Pokemons() {
//   const { pokedata } = useContext(ProjContext);

//   let [searchParams, setSearchParams] = useSearchParams();
//   if (pokedata.length) {
//     return (
//       <div 
//       style={{ display: "flex" }}
//       >
//         <nav
//           style={{
//             // borderRight: "solid 1px",
//             padding: "1rem",
//           }}
//         >
//           <input
//             value={searchParams.get("filter") || ""}
//             onChange={(event) => {
//               let filter = event.target.value;
//               if (filter) {
//                 setSearchParams({ filter });
//               } else {
//                 setSearchParams({});
//               }
//             }}
//           />
//           {pokedata
//             .filter((pkmns) => {
//               let filter = searchParams.get("filter");
//               if (!filter) return true;
//               let name = pkmns.name.english.toLowerCase();
//               return name.startsWith(filter.toLowerCase());
//             })
//             .map((pkmns) => (
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     display: "block",
//                     margin: "1rem 0",
//                     color: isActive ? "red" : "",
//                   };
//                 }}
//                 to={`/pokemon/${pkmns.id}`}
//                 // to={`#`}
//                 key={pkmns.id}
//               >
//                 {pkmns.name.english}
//               </NavLink>
//             ))}
//         </nav>
//         <Outlet />
//       </div>
//     );
//   }
// }

const clrs = typeColors();

export default function Pokemons() {
  // const { pokedata } = useContext(ProjContext);
  const { pokedata, searchParams } = useContext(ProjContext);
  if (pokedata.length) {
    return (
      <div >
        <nav style={{ padding: "1rem" }}>
          <Searchbar />
          <div
            className="pkmnlist"
          >
            {pokedata
              .filter((pkmns) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let idd = pkmns.id.toString();
                let name = pkmns.name.english.toLowerCase();
                let type = pkmns.type[0].toLowerCase();
                return idd.startsWith(filter) || name.startsWith(filter.toLowerCase()) || type.startsWith(filter.toLowerCase());
              })
              .map((pkmns) => (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      // display: "block",
                      padding: "0.5rem",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }}
                  to={`/pokemon/${pkmns.id}`}
                  // to={`#`}
                  key={pkmns.id}
                >
                  {/* <div style={{ width: "2rem" }} > {pkmns.id} </div> */}
                  <PokeCard pkmn = {pkmns} clrs = {clrs}/>
                </NavLink>
              ))}
          </div>

        </nav>
        <Outlet />
      </div>
    );
  }

}