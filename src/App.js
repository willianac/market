import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Market from './pages/Market/Market';
import PageSlide from './common/animations/PageSlide';

function App() {
  return (
    <>
      <PageSlide>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/market' element={<Market />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </PageSlide>
    </>
  );
}

export default App;