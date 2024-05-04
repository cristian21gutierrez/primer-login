import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import "../styles/nav.css"


const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext); // Acceder al contexto
  const navigate = useNavigate(); // Para redirigir al usuario

  const handleLogout = () => {
    logout(); // Cerrar sesión
    navigate('/login'); // Redirigir a la página de inicio de sesión
  };

  return (
    <nav className="navbar">
      {isAuthenticated ? ( // Mostrar solo si el usuario está autenticado
        <ul>
          <li><a href="/home">Inicio</a></li>
          <li><a href="/profile">Perfil</a></li> 
          <li><button onClick={handleLogout}>Cerrar Sesión</button></li> 
        </ul>
      ) : null} 
    </nav>
  );
};

export default Navbar;
