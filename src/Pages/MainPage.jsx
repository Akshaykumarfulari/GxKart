import { Route, Routes } from 'react-router-dom';
import LoginMain from '../Components/Login/LoginMain';
import Home from './Home';
import Product from './Product';
import WelcomePage from './Welcome';
import RegisterMain from '../Components/Registration/RegisterMain';
import Profile from './Profile';
import Category from './Category';
import Wishlist from './Wishlist';
import Admin from './Admin';
import Cart from './Cart';
import Payment from '../Components/CheckOut/Payment';
import Checkout from './Checkout';

/**
 * Hanldes routing of pages
 */
export default function MainPages() {

  return (
    <Routes>
      <Route path='/login' element={<LoginMain />} />
      <Route path='/registration' element={<RegisterMain />} />
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Product />} />
      <Route path='/welcome' element={<WelcomePage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/category/:categoryTitle' element={<Category />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}
