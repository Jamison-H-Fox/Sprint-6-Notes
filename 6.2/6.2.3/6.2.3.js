// nested components and props

const App = props => {
    return (
        <div>
            <h2>Hello World from, {props.name}</h2>
            <div>
                <h4>My best frined in this world is: {props.bestFriend}</h4>
                <p>My favorite book is: {props.favoriteBook}</p>
            </div>
        </div>
    );
};

