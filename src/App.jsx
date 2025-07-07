import './App.css';
import MyFooter from './components/MyFooter';
import Newsletter from './components/Newsletter';
import Memories from './components/Memories';
import Products from './components/Products';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Memories/>
    <Newsletter/>
    <MyFooter/>
    </>
  );
}

export default App;
