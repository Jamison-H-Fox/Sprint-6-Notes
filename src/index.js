import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const sith = [{ name: 'Darth Vader'}, { name: 'Darth Sideous'}];


function App({ friends }) {
    return (
    <>
        <Greeter who={friends[0].name} />
        <Greeter who={friends[1].name} />
        <ThingEnumerator thing='pals' count={friends.length * 3} />
    </>
    );
};

function Greeter(props) {
    const { who } = props;
    return <div>Hello, {who}! Whut up dawg?</div>
};

function ThingEnumerator(props) {
    const { thing, count } = props;
    return <h3>I have {count} {thing}!</h3>
}

const rootElement = document.querySelector('.root');
ReactDOM.render(<App friends={sith}/>, rootElement);