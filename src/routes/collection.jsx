import { useEffect } from "react"
import { useContext, useState } from "react"
import { ProjContext } from "../setContext"

function Collection() {
    const { pokedata } = useContext(ProjContext)
    const [collectionCards, setCollectionCards] = useState()
    const [shuffledCards, setShuffledCards] = useState([])    

    useEffect(() => {
        if (pokedata.length > 0) {
            setCollectionCards([...pokedata].slice(0, 9))
        }
    }, [])

    const shuffle = () => {
        console.log('shuffling')
        let shuffled = [...pokedata]
        shuffled.sort(() => Math.random() - 0.5)
        setShuffledCards(() => shuffled)
        console.log(shuffled.length, shuffledCards.length)
    }

    const getTenCards = () => setCollectionCards((prev) => {
        console.log('getting cards')
        let tenCards = shuffledCards.slice(0, 9)
        tenCards = [...prev, tenCards]
        console.log(tenCards.length)
        console.log('done')
        return tenCards
    })

    const getCards = () => {shuffle(), getTenCards(), console.log(collectionCards)}

    return (
        <div className="collection">
            <h2>My Pokemon Colllection</h2>
            <div>
                <h3>You can get up to 10 new pockemons every day!</h3>
                <button onClick={getCards}>GET THEM</button>
            </div>
        </div>
    )
}

export default Collection

