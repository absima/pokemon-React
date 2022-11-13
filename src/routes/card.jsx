
export default function PokeCardGame3({ pkmn, deNames, clrs }) {
  const prfx = `https://raw.githubusercontent.com/absimath/pokestuff/6ff554ee986e1d28f64a9ed4abadf5aec586321f/pokemons/${pkmn.id}.`

  let url;
  pkmn.id < 650 ? url = prfx + "svg" : url = prfx + "png"; 

  return (
    <div className="parcardiv">
      <div className="cardiv"
        style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 100%, 50%)` }} >
        <div className="name3lang">
          <span className="cjfde"> {deNames[pkmn.id - 1]} </span> <span className="pref">(DE)</span>
          <span className="cjf"> {pkmn.name.chinese} </span> <span className="pref">(CH)</span>
          {/* <span className="cjf"> {pkmn.name.japanese} </span> <span className="pref">(JP)</span> */}
          <span className="cjf"> {pkmn.name.french} </span> <span className="pref">(FR)</span>
        </div>

        <div className="name_row">
          <div className="name_span">{pkmn.name.english}</div>
          <div className="hpimg">
            <div className="hp">{pkmn.base.HP} HP</div> &nbsp;
            <div>
              <img className="type_image"
                // src={`/src/routes/images/typeLogos/${pkmn.type[0]}.png`}
                src={`https://raw.githubusercontent.com/absimath/pokestuff/main/typeLogos/${pkmn.type[0]}.png`}

                alt=""
              />
            </div>
          </div>

        </div>

        <div className="avatar"
          style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)` }}
        >
          { }
          <img className="image"
            src={url}
            alt={`${pkmn.name.english}`}
          />
        </div>

        <div className="speed"> Speed: {pkmn.base.Speed}</div>

        <div className="stats"
          style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 100%, 80%)` }}
        >
          <div>
            <p> Attack </p>
            <p> Defense </p>
          </div>
          <div>
            <p> {pkmn.base.Attack} </p>
            <p> {pkmn.base.Defense} </p>
          </div>
          <div>
            <p> Sp. Attack </p>
            <p> Sp. Defense </p>
          </div>
          <div>
            <p> {pkmn.base["Sp. Attack"]} </p>
            <p> {pkmn.base["Sp. Defense"]} </p>
          </div>
        </div>
        {/* </div> */}

        <div className="type_id">
          <span className="idtyp"
          // style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)` }}
          >
            {pkmn.id} </span>
          <span className="idtyp"
          // style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)` }}
          >
            {pkmn.type[0]}</span>
        </div>
      </div>
    </div>

  );
}
