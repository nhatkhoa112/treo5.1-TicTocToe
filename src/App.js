import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/Game';
import NavigationBar from './components/NavigationBar';
import './App.css';

const App = () => {
    const [account, setAccount] = useState('')
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
            }
        }
        return null;
    }


    return (

        <>
            <NavigationBar account={account} setAccount={setAccount} />
            <div className="page">
                <div className="app-wrapper">
                    <div className="app">
                    <Game calculateWinner={calculateWinner} />
                    </div>
                </div>    
            </div>
        </>
    );
}

export default App
