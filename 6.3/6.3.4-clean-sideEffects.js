import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import axios from 'axios';

function Counter({ count }) {
    useEffect(() => {
        console.log('FOO effect');
        return () => console.log('clean up FOO');
    }, []);
    useEffect(() => {
        console.log('BAR effect');
        return () => console.log('clean up BAR')
    }, [count])
    return <h2>The count is {count}!</h2>
}

function App() {
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            { isCounterVisible && <Counter count={count} /> }
            <button onClick={e => setIsCounterVisible(true)}>Mount Counter</button>
            <button onClick={e => setIsCounterVisible(false)}>Destroy Counter</button>
            <button onClick={e => setCount(count + 1)}>Increase Count</button>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);