import React, { useState } from 'react';
import './App.css';
import WishInput from './Wishinput';
import WishList from './Wishlist';

const initialWishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} />
      <button className="wish-clear" type="button">Archive done</button>
    </div>
  );
};

export default App;
