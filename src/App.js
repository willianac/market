import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Market from './pages/Market/Market';
import PageSlide from './common/animations/PageSlide';
import { UserProvider } from './common/context/User';
import { CartProvider } from './common/context/CartItems';

function App() {
  return (
    <>
      <Routes>    
        <Route element={<UserProvider />}>
          <Route element={<PageSlide />}>
            <Route path='/' element={<Login />}/>
            <Route element={<CartProvider />}>
              <Route path='/market' element={<Market />}/>
            </Route>
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Route>       
      </Routes>
    </>
  );
}

export default App;