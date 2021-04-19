import React, {useState} from 'react';
import Board from './Board';


const Game = ({calculateWinner}) => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(history[stepNumber])
    const xO = isXNext ? "X" : "O"


    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber +1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if(winner||squares[i]) return;
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setIsXNext(!isXNext);
    }
    const jumpTo = (step) => {
            setStepNumber(step)
            setIsXNext(step % 2 ===0)
    }

   
    const moves =  history.map((_step, move) => {
        
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
                        squares={history[stepNumber]}
                        handleClick={handleClick}
                        />
            </div>
            <div className="game-info">
                <div className="winner">{winner ? 'Winner ' + winner : 'Next Player: ' +xO}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;
