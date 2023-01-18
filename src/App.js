import './App.css';
import Die from './Die.js'
import React from "react"

function App() {
    
    const [rolledDice, setRolledDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            let rolledNumber = Math.ceil(Math.random() * 6)
            newDice.unshift(rolledNumber)
        };
        return newDice
    }

    function rollDice() {
        setRolledDice(allNewDice)
    }
    
    const diceArray = rolledDice.map(die => <Die value={die} />)

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
