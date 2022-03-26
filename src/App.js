import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <h1 className='text-center text-info'>Welcome to Dream Laptop Store</h1>
      <Shop />
    </div>
  );
}

export default App;
