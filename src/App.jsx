import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../src/context/AuthContext';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Register from '../src/components/Register';

const NavigateButton = ({ to, label }) => {
  const navigate = useNavigate(); // Para redirigir a una ruta específica

  return (
    <button onClick={() => navigate(to)}> {/* Botón para redirigir */}
      {label}
    </button>
  );
};

const NavigationButtons = () => {
  const { isAuthenticated } = React.useContext(AuthContext); // Estado de autenticación
  const location = useLocation(); // Para obtener la ruta actual

  if (isAuthenticated) {
    return null; // Si el usuario está autenticado, no mostrar botones de navegación
  }

  return (
    <div>
      {/* Mostrar el botón de registro solo si no estás en la página de registro */}
      {location.pathname !== '/register' && (
        <NavigateButton to="/register" label="Ir a Registro" />
      )}
      {/* Mostrar el botón de login solo si no estás en la página de login */}
      {location.pathname !== '/login' && (
        <NavigateButton to="/login" label="Ir a Iniciar Sesión" />
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider> {/* Envolver con el AuthProvider para acceso al contexto */}
      <Router>
        <div>
          <NavigationButtons /> {/* Mostrar botones condicionalmente */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
