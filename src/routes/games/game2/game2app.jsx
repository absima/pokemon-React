import { useEffect, useState } from 'react';
import './game2app.css';
import Game2card from './game2card';

const initialCards = [
  { "src": "/src/routes/games/game2/images/electric.png", matched: false },
  { "src": "/src/routes/games/game2/images/psychic.png", matched: false },
  { "src": "/src/routes/games/game2/images/water.png", matched: false },
  { "src": "/src/routes/games/game2/images/fire.png", matched: false },
  { "src": "/src/routes/games/game2/images/ice.png", matched: false },
  { "src": "/src/routes/games/game2/images/grass.png", matched: false },
  { "src": "/src/routes/games/game2/images/electric.png", matched: false },
  { "src": "/src/routes/games/game2/images/psychic.png", matched: false },
  { "src": "/src/routes/games/game2/images/water.png", matched: false },
  { "src": "/src/routes/games/game2/images/fire.png", matched: false },
  { "src": "/src/routes/games/game2/images/ice.png", matched: false },
  { "src": "/src/routes/games/game2/images/grass.png", matched: false },
];

function Game2app() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(true);
  const [startFlip, setStartFlip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartFlip(false)
    }, 1000);
    shuffleCards();
  }, []);

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurn(0);
    setDisabled(false)
    setStartFlip(true)
    setTimeout(() => {
      setStartFlip(false)
    }, 1000);
  }


  function handleChoice(card) {
    choiceOne ? (
      choiceOne.id !== card.id &&
      setChoiceTwo(card))
      : setChoiceOne(card)
  }

  function resetTurn() {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn(prevTurn => prevTurn + 1)
    setDisabled(false)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className='cont'>
      <div>
      <div className="grid">
        {cards.map(card => (
          <Game2card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
            disabled={disabled}
            matched={card.matched}
          />
        ))}
      </div>
      </div>
     

      <div className='buttons'>
        <div>
          <button onClick={shuffleCards}>New Game</button>
        </div>
        <div>
          <p>Trial Count: {turn} </p>
        </div>
        <div>
          <h4>Score Board </h4>
          <ul className='board'>
            <li>player 1: </li>
            <li>player 2: </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Game2app;
