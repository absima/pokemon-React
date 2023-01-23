import { NavLink } from 'react-router-dom';

export default function MemoryRules() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <div className="backdiv">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'gray' : '',
            };
          }}
          to={`/games/memory`}
          key={'back'}
        >
          <div className="backtxt">&#8678; back</div>
        </NavLink>
      </div>

      <h2>Rules</h2>
      <div
        style={{
          //line spacing
          lineHeight: '1.5rem',
          // font size
          fontSize: '1.0rem',
          // font family
          fontFamily: 'sans-serif',
          // alignment
          textAlign: 'left',
        }}
      >
        <p>
          Choose a difficulty level from the list of 8 options. The level is based on the number of cards you would like to handle. The number of cards is the number of rows times the number of columns. For example, if you choose level 1, you will have 4 pairs of cards. If you choose level 2, you will have 6 pairs of cards. The number of cards will increase by 4 for each level. The maximum number of cards is 36. 
        </p>
        <p>
          The objective of this memory card game is ordinary. As you chose your level, you will be given a chance to see all the cards briefly. Then you will be asked to click on a card to flip it over. You will then be asked to click on another card to flip it over. If the two cards match, they will stay flipped over. If they do not match, they will flip back over. You will continue to flip over cards until you have matched all the cards.
        </p>
      </div>
    </main>
  );
}
