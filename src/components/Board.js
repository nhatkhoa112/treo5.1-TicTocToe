import React, { useState } from 'react';
import Square from './Square';




const Board = ({setStepNumber, status,history, setHistory , squares,calculateWinner, setSquares}) => {
    const winner = calculateWinner(squares);

    const renderSquare = (i) => {
        return <Square index={i} squares={squares}  handleSquareClick={handleSquareClick} />;
    };
    const [isXNext, setIsXNext] = useState(true);
    const handleSquareClick = (i) => {
        if(winner || squares[i] ){
            return ;
        } else {
            let squareList = [...squares];
            squareList[i] = isXNext ? "X" : "O";
            setIsXNext(!isXNext);
            setSquares(squareList);
            setHistory(history.concat([{squares:squares}]))
            setStepNumber(history.length)
        } 
        }
    
    if(winner){
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
