import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const OrderComponent = () => {
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

        // Configurar el encabezado de autorización con el token JWT
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Hacer la solicitud GET a la API
        const response = await axios.get('http://localhost:3000/api/orders', config);
        setOrders(response.data);
      } catch (error) {
        setError('Error al cargar las órdenes. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchOrders(); // Llamar a la función al cargar el componente
  }, []);

  return (
    <div>
        <Navbar />
      <h2>Listado de Órdenes</h2>
      {error && <p>{error}</p>}
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Orden ID: {order._id}</p>
            <p>Total: ${order.total}</p>
            <p>Estado: {order.status}</p>
            <p>Productos:</p>
            <ul>
              {order.products.map(product => (
                <li key={product.productId._id}>
                  <p>Producto: {product.productId.name}</p>
                  <p>Cantidad: {product.quantity}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderComponent;
