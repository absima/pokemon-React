import { useContext } from 'react';
import { ProjContext } from '../setContext';
import { NavLink } from 'react-router-dom';
import { deNames } from '../namesDE';
import PokeCard from "./card";
import typeColors from "../colorData/typeColors";

const clrs = typeColors();


export default function Pokemons() {
  const { pokedata, searchParams, setSearchParams } = useContext(ProjContext);

  const search = (pokedata, searchParams) => {
    let filter = searchParams.get('filter');
    if (!filter) return null; //pokedata;
    if (filter === 'all') return pokedata;
    let idd = pokedata.id.toString();
    let name = pokedata.name.english.toLowerCase();
    let type = pokedata.type.join(' ').toLowerCase();
    return (
      idd.startsWith(filter) ||
      name.startsWith(filter.toLowerCase()) ||
      type.startsWith(filter.toLowerCase())
    );
  };

  return (
    <div
    // style={{
    //   display: "block",
    //   margin: "1rem",
    //   alignItems: "center",
    //   justifyContent: "center",
      
    // }}
    >
      <div
        style={{
          display: "block",
          margin: "1rem auto",
          alignItems: "center",
          justifyContent: "center",
          width: "20rem",
        }}
      >
        <input
          className="input"
          placeholder="Search by ID or name or type filters..."
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>
      <div 
      className="pkmnlist"
      >
        {pokedata
          .filter((pkmns) => search(pkmns, searchParams))
          // .map((pkmns, idx) => <div key={idx}> {pkmns.name.english} </div>)
          // .slice(0, 10)
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
              <PokeCard pkmn = {pkmns} deNames = {deNames} clrs = {clrs}/>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
}



  