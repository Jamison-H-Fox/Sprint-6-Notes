import React, { useState } from 'react';
import ReactDOM from  'react-dom';
// import './src/index.css';

//
//
function Hero() {
    const [healthPoints, setHealthPoints] = useState(100);
    const [isHappy, setIsHappy] = useState(true);
    const eatGreat = evt => {
        setHealthPoints(healthPoints + 20);
        setIsHappy(true);
    }
    const eatTerrible = evt => {
        setHealthPoints(healthPoints - 30);
        setIsHappy(false);
    }

    return (
        <div>
            <div>Health Points: <span>{healthPoints}</span></div>
            <div>{isHappy ? 'Really Happy' : 'Having a bad day'}</div>

            <button onClick={eatTerrible}>Hava a terrible meal</button>
            <button onClick={eatGreat}>Hava a great meal</button>
        </div>
    );
}

const rootElement = document.querySelector('.root');
ReactDOM.render(<Hero />, rootElement);

