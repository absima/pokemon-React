import './game2card.css';

function Game2card(props) {

    function handleChoice() {
        if (!props.disabled)
            props.handleChoice(props.card);
    }

    return (
        <div className='card'>
            <div className={props.flipped ? "flipped" : ""}>
                <img  className={`front ${props.card.matched ? "matched" : ''}`} src={props.card.src} alt="card front" />
                <img className='back' src="/src/routes/games/game2/images/card_back.png" alt="back side" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}

export default Game2card;
