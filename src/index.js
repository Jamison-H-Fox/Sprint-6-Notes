import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';

function App() {
    const [color, setColor] = useState('#FFFFFF');

    return (
        <div className='App'>
            <Button color={color} />
        </div>
    );
}



const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);