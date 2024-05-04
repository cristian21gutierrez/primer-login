import React, { useState } from 'react';
import axios from 'axios';
import "../styles/register.css"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
      });
      console.log('Usuario registrado', response.data.message);
    } catch (error) {
      console.error('Error al registrar usuario', error.response.data.message);
    }
  };

  return (
    <div className="register-container"> {/* Aplicar la clase CSS para el contenedor */}
      <div className="register-form"> {/* Aplicar la clase CSS para el formulario */}
        <h2 className="register-title">Registro</h2> {/* Aplicar la clase CSS para el título */}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="input-field" 
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="input-field" 
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field" 
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="register-button">Registrar</button> {/* Aplicar la clase CSS para el botón */}
        </form>
      </div>
    </div>
  );
};

export default Register;
