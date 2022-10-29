import './App.css';
import Navbar from './NavBar';
import Header from './Header';
import MainSection from './MainSection';
import { useState } from "react";

function App() {
  const [addToCart, setAddToCart] = useState(0);

  const handleSubmit = () => {
    setAddToCart(addToCart + 1);
  };

  const handleRemove = () => {
    setAddToCart(addToCart - 1);
  };

  return (
    <div>
      <Navbar addToCart={addToCart}/>
      <Header/>
      <MainSection handleSubmit={handleSubmit} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
