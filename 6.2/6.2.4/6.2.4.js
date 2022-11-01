export function Game(props) {
    const { player } = props;
    const [score, setScore] = useState(0);
    const increase = () => {
        setScore(score + 1);
    };
    const decrease = () => {
        setScore(score - 1);
    }
    return (
        <div>
            <ScoreBoard player={player} score={score} />
            <ScoreChanger onScoreChange={increase} label='increase' />
            <ScoreChanger onScoreChange={decrease} label='decrease' />
        </div>
    );
}

function ScoreBoard(props) {
    const { score, player } = props;
    return <h3>{player} is at {score} points</h3>
}

function ScoreChanger(props) {
    const { onScoreChange, label } = props;
    return <button onClick={onScoreChange}>{label}</button>;
}


// second example from text of 6.2.4
// function App() {
//     const [color, setColor] = useState("#FFFFFF");

//     const changeColor = array => {
//         setColor(array[Math.floor(Math.random() * array.length)]);
//     };
  
//     return (
//         <div className="App">
//             <Button color={color} changeColor={changeColor} />
//         </div>
//     );
// }

// const Button = props => {
//     const colors = [
//         "#FFBAAA",
//         "#27576B",
//         "#D47F6A",
//         "#AA7539",
//         "#003D19",
//         "#6E91A1",
//         "#552D00"
//     ];
  
//     return (
//         <button
//             style={{ background: props.color, height: "50px", width: "200px" }}
//             onClick={() => props.changeColor(colors)}
//         >
//         Click Me!
//         </button>
//         );
//   };



// const rootElement = document.getElementById('root');
// ReactDOM.render(<Game player='Jamison' />, rootElement);