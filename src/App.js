import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <h1 className='text-center text-info'>Welcome to Dream Laptop Store</h1>
      <Shop />
      <Footer/>
    </div>
  );
}

export default App;
