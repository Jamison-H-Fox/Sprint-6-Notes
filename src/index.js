import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import './index.css';

function App() {
    const [color, setColor] = useState("#FFFFFF");

    const changeColor = array => {
        setColor(array[Math.floor(Math.random() * array.length)]);
    };
  
    return (
        <div className="App">
            <Button color={color} changeColor={changeColor} />
        </div>
    );
}

const Button = props => {
    const colors = [
        "#FFBAAA",
        "#27576B",
        "#D47F6A",
        "#AA7539",
        "#003D19",
        "#6E91A1",
        "#552D00"
    ];
  
    return (
        <button
            style={{ background: props.color, height: "50px", width: "200px" }}
            onClick={() => props.changeColor(colors)}
        >
        Click Me!
        </button>
        );
  };



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);