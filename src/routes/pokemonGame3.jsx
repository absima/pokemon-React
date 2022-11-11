import {
    NavLink,
    Outlet,
} from "react-router-dom";
import { useContext } from "react";
import { ProjContext } from "../setContext";
import Searchbar from "./searchbar";
import PokeCardGame3 from "./cardGame3";
import typeColors from "../colorData/typeColors";
import { deNames } from "../namesDE";

const clrs = typeColors();

export default function PokemonsGame3() {
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
                                    <PokeCardGame3 pkmn={pkmns} deNames={deNames} clrs={clrs} />
                                </NavLink>
                            ))}
                    </div>
                </nav>
                <Outlet />
            </div>
        );
    }

}