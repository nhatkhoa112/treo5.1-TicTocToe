import React from 'react'

const Square = ({index, squares, handleClick}) => {
    const handleOnClick = () => {
        handleClick(index);
        
    }
    return (
        <button className={squares[index] === "X" ? "square color-blue" : "square color-red" } onClick={handleOnClick}>
            {squares[index]}
        </button>
    );
};

export default Square

