import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Products from '../components/Products';
import Profile from '../components/Profile';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import OrderComponent from '../components/OrderComponent';
import AdminPanel from '../components/AdminPanel';

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/ordenes" element={<OrderComponent />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
