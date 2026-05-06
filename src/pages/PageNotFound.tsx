import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h3 className="text-muted mb-4">Page Not Found</h3>
            <p className="fs-5 mb-4 text-dark">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/dh-portfolio')}
            >
                Back to Homepage
            </Button>
        </Container>
    );
}