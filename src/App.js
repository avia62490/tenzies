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
    
    const diceArray = rolledDice.map(die => <Die value={die} />)
    return (
        <main>
            <container className="dice">
                {diceArray}
            </container>
        </main>
    );
}

export default App;
