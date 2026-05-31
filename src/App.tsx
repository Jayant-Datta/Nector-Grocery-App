import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/auth/Splash';
import Onboarding from './pages/auth/Onboarding';
import SignIn from './pages/auth/SignIn';
import NumberInput from './pages/auth/NumberInput';
import Verification from './pages/auth/Verification';
import Location from './pages/auth/Location';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

import MainLayout from './components/layout/MainLayout';
import Home from './pages/main/Home';
import ProductDetail from './pages/main/ProductDetail'; 
import Explore from './pages/main/Explore';
import CategoryProducts from './pages/main/CategoryProducts';
import Search from './pages/main/Search';
import Filters from './pages/main/Filters';
import Cart from './pages/main/Cart';
import Favorites from './pages/main/Favorites';
import OrderAccepted from './pages/main/OrderAccepted';
import OrderFailed from './pages/main/OrderFailed';
import Account from './pages/main/Account';

function App() {
  return (
    <Router>
      <div className="font-sans max-w-md mx-auto min-h-screen bg-white relative shadow-2xl overflow-hidden">
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/number" element={<NumberInput />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Detailed Views (No Bottom Nav) */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/explore/:categoryId" element={<CategoryProducts />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/order-accepted" element={<OrderAccepted />} />
          <Route path="/order-failed" element={<OrderFailed />} />

          {/* Main App Routes (With Bottom Nav) */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>

          {/* Main App Routes (With Bottom Nav) */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/account" element={<Account />} /> {/* <-- ADD THIS ROUTE */}
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;