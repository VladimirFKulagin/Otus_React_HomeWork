import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

function NavPanel() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="d-flex justify-content-between fs-5">
          <Nav className="me-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
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