import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import axios from 'axios';

function App() {
    // Initialize state to hold the image URL
    const [dogPic, setDogPic] = useState("");

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(res => setDogPic(res.data.message))
            .catch(err => console.log(err))
    }, []);
  
    return (
      <div className="App">
        <button onClick={() => 
            axios.get("https://dog.ceo/api/breeds/image/random")
                .then(res => setDogPic(res.data.message))
                .catch(err => console.log(err))
        }>Get new Doggo</button>
        <h1>We Love Puppers</h1>
        <img src={dogPic} alt="a random dog" width={500} />
      </div>
    );
  }

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// import React, { useState, useEffect } from "react";
// import ReactDOM, { render } from "react-dom";
// import axios from 'axios';

// function User({ id }) {
//     const [user, setUser] = useState('');
//     useEffect(() => {
//         const fetchUser = (id) =>
//         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//             .then(res => res.json())
//             .then(user => {
//                 console.log(user.name);
//                 setUser(user.name);
//             });
//         fetchUser(id);
//     }, [id]);

//     return (
//         <div className='user'>
//             <div>{user}</div>
//         </div>
//     )
// }

// function App() {
//     const [id, setId] = useState(1);
//     return (
//         <div className="app">
//             <User id={id} />
//             <button onClick={e => setId(id + 1)}>
//                 Increment {id} to {id + 1}
//             </button>
//         </div>
//     )
//   }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);