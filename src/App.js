import logo from './logo-white.png'
import './App.css';

function App() {
  return (
    <div className='nav'>
      <img src={logo}></img>
      <h2>Wish Me Blessed</h2>

      <div className='option'>
        <a href='#'>Product</a>
        <a href='#'>Contact</a>
      </div>
    </div>

  );
}

export default App;
