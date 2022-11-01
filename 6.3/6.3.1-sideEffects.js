import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";


function App() {
    const [count, setCount] = useState(0);
    const [isHappy, setIsHappy] = useState(0);

    useEffect(() => {
        console.log(`Count is ${count} and you see me every time you interact with the DOM`);
    });

    useEffect(() => {
        console.log('another effect')
    })

    return (
        <div>
            <h1>count: {count}</h1>
            {
                isHappy
                    ? <h3>So happy!</h3>
                    : <h3>Not happy at all...</h3>
            }
            <button onClick={e => setCount(count + 1)}>Increment Count</button>
            <button onClick={e => setIsHappy(true)}>Make Happy :)</button>
            <button onClick={e => setIsHappy(false)}>Make Sad :(</button>
        </div>
    );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);