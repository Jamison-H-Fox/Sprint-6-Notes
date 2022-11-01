import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";


function User(props) {
    const [color, setColor] = useState('blue');

    useEffect(() => {
        // console.log('first render and all subsequent render')
    })

    useEffect(() => {
        console.log('first render only')
    }, [])

    useEffect(() => {
        console.log('only on color change renders')
    }, [color]) 

    useEffect(() => {
        console.log('only on id change renders')
    }, [props.id])

    return (
        <div style ={{ color, border: `4px solid ${color}`, padding: '8px'}}>
            <div>User id is {props.id}</div>
            <div>User is dressed in {color}</div>
            <button onClick={e => setColor('blue')}>blue</button>
            <button onClick={e => setColor('green')}>green</button>
        </div>
    );
}

function App(props) {
    const [number, setNumber] = useState(4);

    return (
        <div>
            { number < 4 && <User id={number} /> }
            <button onClick={e => setNumber(number + 1)}>Increment</button>
            <button onClick={e => setNumber(1)}>Reset</button>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);