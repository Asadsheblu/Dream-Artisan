
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/Checkout/About/About';
import Checkout from './Components/Pages/Checkout/Checkout';
import Contact from './Components/Pages/Home/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
       
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
