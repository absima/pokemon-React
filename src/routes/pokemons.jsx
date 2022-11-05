// import { useState, useEffect } from "react";
import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { useContext } from "react";
import { ProjContext } from "../setContext";

export default function Pokemons() {
  const { pokedata } = useContext(ProjContext);

  let [searchParams, setSearchParams] = useSearchParams();
  if (pokedata.length) {
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {pokedata
            .filter((pkmns) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = pkmns.name.english.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((pkmns) => (
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/pokemon/${pkmns.id}`}
                // to={`#`}
                key={pkmns.id}
              >
                {pkmns.name.english}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }

}