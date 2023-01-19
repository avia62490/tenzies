import './App.css';
import Die from './Die.js'
import React from "react"

function App() {
    
    const [rolledDice, setRolledDice] = React.useState(allNewDice())
    
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

    function rollDice() {
        setRolledDice(prevRolledDice => prevRolledDice.map(die => {
            return die.isHeld ?
                die :
                {...die, value: Math.ceil(Math.random() * 6)}
        }))
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
            <div className="dice">
                {diceArray}
            </div>
            <button onClick={rollDice} className='button'>Roll</button>
        </main>
    );
}

export default App;
