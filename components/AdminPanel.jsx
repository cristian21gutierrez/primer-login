import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Navbar from '../components/Navbar';
import "../src/styles/AdminOrders.css"

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Recuperar el token del localStorage
        const token = localStorage.getItem('token');

        if (!token) {
          setError('No se encontró el token de autenticación. Por favor, inicia sesión.');
          return;
        }

        // Decodificar el token para obtener el rol del usuario
        const decodedToken = jwtDecode(token);

        // Verificar si el usuario es administrador
        if (decodedToken.role !== 'admin') {
          setError('Acceso denegado. No eres administrador.');
          return;
        }

        // Configurar el encabezado de autorización con el token JWT
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Hacer la solicitud GET a la API para obtener todas las órdenes
        const response = await axios.get('http://localhost:3000/api/orders/all', config);
        setOrders(response.data);
      } catch (error) {
        setError('Error al cargar las órdenes. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchOrders(); // Llamar a la función al cargar el componente
  }, []);

  return (
    <div className="container">
        <Navbar />
      <h2>Panel de Administración - Listado de Órdenes</h2>
      {error && <p className="error-message">{error}</p>}
      <ul className="orders-list">
        {orders.map(order => (
          <li key={order._id} className="order-item">
            <div>
              <p><strong>Orden ID:</strong> {order._id}</p>
              <p><strong>Total:</strong> ${order.total}</p>
              <p><strong>Estado:</strong> {order.status}</p>
            </div>
            <div>
              <p><strong>Productos:</strong></p>
              <ul className="products-list">
                {order.products.map(product => (
                  <li key={product.productId._id} className="product-item">
                    <p><strong>Producto:</strong> {product.productId.name}</p>
                    <p><strong>Cantidad:</strong> {product.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
