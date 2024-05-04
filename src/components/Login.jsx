import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import '../styles/Login.css'; 

const Login = () => {
  const [loginId, setLoginId] = useState(''); 
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        loginId, // Enviar el campo loginId
        password,
      });

      const token = response.data.token;
      login(token); // Iniciar sesión
      navigate('/home'); // Redirigir al usuario a la página de inicio
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2 className="login-title">Inicio de Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text" // Cambia a "text" para aceptar correo o usuario
            className="input-field"
            placeholder="Correo Electrónico o Nombre de Usuario"
            value={loginId} // Cambia a loginId
            onChange={(e) => setLoginId(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
