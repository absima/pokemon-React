
export default function PokeCard({ pkmn, clrs }) {
  return (
    <div className="cardiv"
      style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 90%, 50%)` }}
    >
      <div className="name3lang">
        <span className="cjf"> {pkmn.name.chinese} </span> <span className="pref">(CH)</span>
        <span className="cjf"> {pkmn.name.japanese} </span> <span className="pref">(JP)</span>
        <span className="cjf"> {pkmn.name.french} </span> <span className="pref">(FR)</span>
      </div>

      <div className="name_row">
        <span className="name_span">{pkmn.name.english}</span>
        <span>
          <span>{pkmn.base.HP} HP</span>
          <span>
            <img className="type_image"
              src={`/src/typeLogos/${pkmn.type[0]}.png`}
              alt=""
            />
          </span>
        </span>

      </div>

      <div className="avatar"
        style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)` }}
      >
        <img className="image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmn.id}.svg`}
          alt={`${pkmn.name.english}`}
        />
      </div>

      <div className="content"
        style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 100%, 80%)` }}
      >
        <span className="speed"> Speed: {pkmn.base.Speed}</span>

        <div className="stats">
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
        <div className="type_id">
          <span className="idtyp"
            style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)` }}
          >
            {pkmn.id} </span>
          <span className="idtyp"
            style={{ backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 40%, 40%)` }}
          >
            {pkmn.type[0]}</span>
        </div>
      </div>
    </div>
  );
}
