import React, { useContext } from 'react';
import Navbar from '../components/Navbar';


const Home = () => {
 

  return (
    <div>
      <Navbar /> 
      <h2>Bienvenido a la Página de Inicio</h2>
      <p>Esta es tu página de inicio después de iniciar sesión.</p>
    </div>
  );
};

export default Home;
