import React, {useState} from 'react';
import Board from './Board';


const Game = ({squares,calculateWinner, setSquares}) => {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}])

    let status;
    const [stepNumber, setStepNumber] = useState(0);


    

    const moves = history.map((step, move) => {

        const jumpTo = (step) => {
            setStepNumber(step)
    }
        
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
        });

    return (
        <div className="game">
            <div className="game-board">
                <Board  
                        setStepNumber={setStepNumber}
                        stepNumber={stepNumber}
                        status={status}
                        history={history}
                        setHistory={setHistory}
                        squares={squares} 
                        calculateWinner={calculateWinner}  
                        setSquares={setSquares}/>
            </div>
            <div className="game-info">
                <div>{ status }</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;
