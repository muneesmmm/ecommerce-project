import Carousel from './Components/User/Carousel/Carousel';
import './App.css';
import UserLogin from './Components/User/Login/UserLogin';
import Products from './Components/User/Products/Products';
import Signup from './Components/User/Signup/Signup';
import './Components/User/Carousel/carousel.css';
function App() {
  return (
    <div>
        {/* <UserLogin/> */}
        {/* <Signup/> */}
        <Carousel />
        <Products/>
        
    </div>
  );
}

export default App;
