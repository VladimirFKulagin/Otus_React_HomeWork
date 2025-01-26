import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavPanel() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="d-flex justify-content-between fs-5">
        <Nav className="me-auto ">
          <NavLink to="/" className="btn btn-outline-light me-2">
            Home
          </NavLink>
          <NavLink to="/login" className="btn btn-outline-light me-2">
            Login
          </NavLink>
          <NavLink to="/register" className="btn btn-outline-light">
            Register
          </NavLink>
        </Nav>
            {isAuthenticated ? (
                <label className="nav-link mb-0 fs-5">Пользователь авторизован</label>
            ) : (
                <label className="nav-link mb-0 fs-5">Пользователь не авторизован</label>
            )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavPanel;