import React from 'react';
import classNames from 'classnames';
import './App.css';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input className="wish-input__field" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <li key={text} className={classNames('wish-list__item', { 'wish-list__item--done': done })}>
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>
            {text}
          </label>
        </li>
      ))}
    </ul>
    <button className="wish-clear" type="button">Archive done</button>
  </div>
);

export default App;
