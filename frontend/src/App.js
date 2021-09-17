import Carousel from './Components/User/Carousel/Carousel';
import './App.css';
import Products from './Components/User/Products/Products';
import './Components/User/Carousel/carousel.css';
import Addproduct from './Components/Store/Products/Addproduct';
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div>

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
