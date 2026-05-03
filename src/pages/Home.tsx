import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import myImage from "../assets/heroImage.png";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <style>{`
              .hero-image-wrapper {
                display: inline-block;
                border-radius: 50%;
                padding: 8px;
                transition: all 0.4s ease;
              }

              .hero-image-wrapper:hover {
                transform: scale(1.05) rotate(1deg);
                box-shadow:
                  0 0 20px rgba(255,255,255,0.25),
                  0 0 40px rgba(255,255,255,0.15),
                  0 0 70px rgba(255,255,255,0.08);
              }

              .hero-image {
                width: 320px;
                height: 320px;
                object-fit: cover;
                border-radius: 50%;
                border: 4px solid white;
                transition: all 0.4s ease;
              }

              .hero-image-wrapper:hover .hero-image {
                filter: brightness(1.08);
              }`}
            </style>
            <section className="bg-black text-white min-vh-100 d-flex align-items-center py-5">
                <Container>
                    <Row className="align-items-center g-5 mb-5">

                        <Col lg={6}>
                            <p className="text-secondary fw-semibold mb-2">
                                Hello, I'm
                            </p>

                            <h1 className="display-3 fw-bold mb-3">
                                Dwayne Hinnong
                            </h1>

                            <h3 className="text-secondary mb-4">
                                BSIT Student | Frontend Developer
                            </h3>

                            <p className="text-secondary fs-5 mb-4">
                                Passionate about building clean, responsive, and meaningful
                                digital experiences through code and creativity.
                            </p>

                            <div className="d-flex flex-wrap gap-3">

                                <Button
                                    variant="light"
                                    size="lg"
                                    className="fw-bold px-4"
                                    onClick={() => navigate("/about")}>
                                    About Me
                                </Button>

                                <Button
                                    variant="outline-light"
                                    size="lg"
                                    className="fw-bold px-4"
                                    onClick={() => navigate("/contact")}>
                                    Contact Me
                                </Button>

                            </div>
                        </Col>

                        <Col lg={6} className="text-center">
                            <div className="hero-image-wrapper floating-image">
                                <Image
                                    src={myImage}
                                    alt="Profile"
                                    className="hero-image"/>
                            </div>
                        </Col>

                    </Row>

                    <Row className="g-4 mb-5">

                        <Col md={4}>
                            <Card
                                className="h-100 border-0 rounded-4 shadow-lg text-white"
                                style={{ backgroundColor: "#111" }}>
                                <Card.Body className="p-4">
                                    <h4 className="fw-bold mb-3">Web Development</h4>

                                    <p className="text-secondary mb-0">
                                        Creating responsive and modern websites using
                                        HTML, CSS, JavaScript, React, and Bootstrap.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card
                                className="h-100 border-0 rounded-4 shadow-lg text-white"
                                style={{ backgroundColor: "#111" }}>
                                <Card.Body className="p-4">
                                    <h4 className="fw-bold mb-3">Problem Solving</h4>

                                    <p className="text-secondary mb-0">
                                        Applying logic and technical skills to solve
                                        real-world problems through programming.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card
                                className="h-100 border-0 rounded-4 shadow-lg text-white"
                                style={{ backgroundColor: "#111" }}>
                                <Card.Body className="p-4">
                                    <h4 className="fw-bold mb-3">Continuous Learning</h4>

                                    <p className="text-secondary mb-0">
                                        Always improving my knowledge in software,
                                        networking, databases, and new technologies.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Card
                                className="border-0 rounded-4 shadow-lg text-center text-white"
                                style={{ backgroundColor: "#111" }}>
                                <Card.Body className="p-5">
                                    <h2 className="fw-bold mb-3">
                                        Let's Build Something Amazing
                                    </h2>

                                    <p className="text-secondary mb-4">
                                        Open for collaborations, learning opportunities,
                                        and future projects.
                                    </p>

                                    <Button
                                        variant="light"
                                        size="lg"
                                        className="fw-bold px-5"
                                        onClick={() => navigate("/contact")}>
                                        Get In Touch
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    );
}