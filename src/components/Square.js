import React from 'react'

const Square = ({index, squares, handleSquareClick}) => {
    const handleOnClick = () => {
        handleSquareClick(index);
        
    }
    return (
        <button className="square" onClick={handleOnClick}>
            {squares[index]}
        </button>
    );
};

export default Square
