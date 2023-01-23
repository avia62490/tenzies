import './App.css';
import Die from './Die.js'
import React from "react"
import Confetti from 'react-confetti';
import StopWatch from './StopWatch'

function App() {
    
    const [rolledDice, setRolledDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: i + 1
            })
        };
        return newDice
    }

    React.useEffect(() => {
        const allEqual = rolledDice.every(die => die.value === rolledDice[0].value)
        const allHeld = rolledDice.every(die => die.isHeld)
        if (allEqual && allHeld) {
            setTenzies(true)
        }
    }, [rolledDice])

    function rollDice() {
        if (tenzies) {
            setRolledDice(allNewDice)
            setTenzies(false)
        } else {
            setRolledDice(prevRolledDice => prevRolledDice.map(die => {
                return die.isHeld ?
                die :
                {...die, value: Math.ceil(Math.random() * 6)}
            }))
        }
    }
    
    function holdDie(id) {
        setRolledDice(prevRolledDice => prevRolledDice.map(die => {
            return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
        }))
    }
    
    const diceArray = rolledDice.map(die => 
        <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld}
        holdDie={() => holdDie(die.id)}/>
        )
        
        return (
            <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice">
                {diceArray}
            </div>
            <button onClick={rollDice} className='button'>{tenzies ? "New Game" : "Roll"}</button>
            <StopWatch />
        </main>
    );
}

export default App;
