import React from 'react';
import './App.css';
import WishInput from './Wishinput';
import WishList from './Wishlist';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <WishInput />
    <WishList wishes={wishes} />
    <button className="wish-clear" type="button">Archive done</button>
  </div>
);

export default App;
