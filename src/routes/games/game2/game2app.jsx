import { useEffect, useState } from 'react';
import './game2app.css';
import Game2card from './game2card';
import { useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";






function Game2app() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(true);
  const [startFlip, setStartFlip] = useState(true);
  const [point, setPoint] = useState(0)
  // const [point1, setPoint1] = useState(0);
  // const [point2, setPoint2] = useState(0);
  // const [match, setMatch] = useState('false');
  // const [active, setActive] = useState(0);




  useEffect(() => {
    setTimeout(() => {
      setStartFlip(false)
    }, 1000);
    shuffleCards();
  }, []);


  const generateDistinctRandomNumbers = (size) => {
    let count = 0;
    // var checkArr=[];
    const store = [];
    while (store.length < size && count < 500) {
      count++;
      const randNum = Math.floor(Math.random() * 650); // up to 650
      if (!store.includes(randNum)) { store.push(randNum) };
    }
    return store
  }

  let lID = useParams().levelID

  const level = parseInt(lID[lID.length - 1]);
  const size = (level + 1) * 2
  // console.log(level)
  // console.log(size)
  const randoms = generateDistinctRandomNumbers(size);
  const selected = [];
  randoms.map(item => {
    selected.push(
      
      {
        "src": `https://raw.githubusercontent.com/absimath/pokestuff/6ff554ee986e1d28f64a9ed4abadf5aec586321f/pokemons/${item}.svg`, matched: false
      }
    )
  }
  )
  console.log(cards)
  console.log("point", point)


  let ncol;
  level === 1 || level === 2 ? ncol = 4 : ncol = level + 1
  // let active = Math.round(Math.random());
  // const scores = [0, 0]

  // console.log(active)

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...selected, ...selected]
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
        // setMatch(true) //

        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              setPoint(pt => pt + 1)
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      }
      else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  let leave = false;
  return (
    <div className='cont'>
      <div className='pagehead'>
        <div className='backdiv'>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "gray" : "",
              };
            }}
            to={`/games/game2`}
            key={"back"} >
            <div className="backtxt">
              &#8678; back
            </div>
          </NavLink>

        </div>

        <div className='buttons'>
          <span>
            <button
              className='btn'
              onClick={shuffleCards}
            >
              New Game
            </button>
          </span> &nbsp; &nbsp; &nbsp;
          <span>
            <p>Trial Count: {turn} </p>
          </span> &nbsp; &nbsp; &nbsp;
          <span className='scores'>
            <p>Score: {point} </p>
          </span>

        </div>
      </div>

      {/* {
        point !== 2 * size && !leave? */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: Array(ncol).fill('1fr').join(" ")
        }} >
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

      {/* : 
          <div> 
            <h2> Congrats! you won </h2>
            <h3> your current score stands at {point}</h3>
          </div>
      }
      {point !== 2 * size? leave=true: true } */}

    </div>
  )

}

export default Game2app;
