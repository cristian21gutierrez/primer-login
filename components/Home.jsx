import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
     <Navbar />
      <h1>Welcome to Home</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Puedes agregar más contenido aquí */}
    </div>
  );
};

export default Home;
