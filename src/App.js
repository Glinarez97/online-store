import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import About from "./pages/about";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Admin from "./pages/admin"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Home></Home>
      
      <Catalog></Catalog>

      <About></About>

      <Cart></Cart>

      <Admin></Admin>

      <Footer/>



    </div>
  );
}

export default App;
