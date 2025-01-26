import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="text-center" style={{ marginTop: '100px' }}>
            <Row>
                <Col>
                    <h1 className="display-1">404</h1>
                    <h2>Страница не найдена</h2>
                    <p>Извините, но запрашиваемая вами страница не существует.</p>
                    <Link to="/">
                        <Button variant="primary">Вернуться на главную</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;