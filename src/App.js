import './App.css';
import Die from './Die.js'

function App() {
    return (
        <main>
            <container className="dice">
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
                <Die value="3" />
            </container>
        </main>
    );
}

export default App;
