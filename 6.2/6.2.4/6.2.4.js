function Game(props) {
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

const rootElement = document.getElementById('root');
ReactDOM.render(<Game player='Jamison' />, rootElement);