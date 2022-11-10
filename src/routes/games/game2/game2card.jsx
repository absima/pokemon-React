import './game2card.css';

function Game2card(props) {

  function handleChoice() {
    if (!props.disabled)
      props.handleChoice(props.card);
  }

  return (
    <div className='card'>
      <div className={props.flipped ? "flipped" : "notflipped"}>
        <img 
        className={`front ${props.card.matched ? "matched" : ''}`} 
        src={props.card.src} alt="front" 
        style={{
          // backgroundColor: `hsl(${clrs[pkmn.type[0]]}, 80%, 20%)`
          backgroundColor: "hsl(224, 53%, 41%)"
        }}
        />
        <img className='back' src="/src/routes/games/game2/card_back.png" alt="back" onClick={() => handleChoice()} />
      </div>
    </div>
  );
}

export default Game2card;
