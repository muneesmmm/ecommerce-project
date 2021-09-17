import Carousel from './Components/User/Carousel/Carousel';
import './App.css';
import Products from './Components/User/Products/Products';
import './Components/User/Carousel/carousel.css';
import Navbar from './Components/User/Navbar/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div>
        <Navbar/>
        <Carousel />
        <Router>
          <Route exact path="/">
             <Products/>
          </Route>
          <Route exact path="/store/add">
           <Addproduct/>
          </Route>
       
        </Router>
        
    </div>
  );
}

export default App;
