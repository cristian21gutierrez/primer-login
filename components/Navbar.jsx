import { NavLink } from 'react-router-dom';
import "../src/styles/nav.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
        <li><NavLink to="/productos" activeClassName="active">Productos</NavLink></li>
        <li><NavLink to="/carrito">Carrito</NavLink></li>
        <li><NavLink to="/ordenes">Órdenes</NavLink></li>
        <li><NavLink to="/perfil">Perfil</NavLink></li>
        <li><NavLink to="/login">Iniciar sesión</NavLink></li>
        <li><NavLink to="/registro">Registrarse</NavLink></li>
        <li><NavLink to="/admin">Adminpanel</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
