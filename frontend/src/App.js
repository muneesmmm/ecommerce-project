import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import UserLogin from './Components/User/Login/UserLogin';
import Products from './Components/User/Products/Products';
import Navbar from './Components/User/Navbar/Navbar';
import Addproduct from './Components/Store/Products/Addproduct';

function App() {
  return (
    <div>
        <Navbar/>
        <Router>
          <Route exact path="/">
             <Products/>
          </Route>
          <Route exact path="/store/add">
           <Addproduct/>
          </Route>
        {/* <UserLogin/> */}
        {/* <Signup/> */}
        {/* <Products/> */}
        
        </Router>
        
    </div>
  );
}

export default App;
