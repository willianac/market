import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Market from './pages/Market/Market';
import PageSlide from './common/animations/PageSlide';
import { UserProvider } from './common/context/User';
import { CartProvider } from './common/context/CartItems';
import { PaymentProvider } from './common/context/Payment';

function App() {
  return (
    <>
      <Routes>    
        <Route element={<UserProvider />}>
          <Route element={<CartProvider />}>
            <Route element={<PaymentProvider />}>
              <Route element={<PageSlide />}>
                <Route path='/' element={<Login />}/>
                <Route path='/market' element={<Market />}/>
                <Route path='/cart' element={<Cart />} />
              </Route>
            </Route>
          </Route>
        </Route>       
      </Routes>
    </>
  );
}

export default App;