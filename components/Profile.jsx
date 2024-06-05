import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/me');
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Cargando perfil...</div>;
  }

  if (!user) {
    return <div>El perfil no pudo ser encontrado</div>;
  }

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre de usuario: {user.username}</p>
      <p>Rol: {user.role}</p>
      {/* Puedes mostrar más información del perfil aquí si lo deseas */}
    </div>
  );
};

export default Profile;
