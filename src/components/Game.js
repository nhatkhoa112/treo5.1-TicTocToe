import React from 'react';
import Board from './Board';


const Game = ({squares,calculateWinner, setSquares}) => {
    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} calculateWinner={calculateWinner}  setSquares={setSquares}/>
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
};

export default Game;
