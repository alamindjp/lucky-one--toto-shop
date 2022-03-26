import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <Products/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
