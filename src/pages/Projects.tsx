import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

export default function Projects() {
    const projects = [
        {
            title: "Sample BioData Template",
            description:
                "A clean and structured personal biodata webpage that presents basic information using HTML and CSS layout fundamentals.",
            tech: ["HTML", "CSS"],
            link: "https://dyne-creates.github.io/ExerciseCSS1/",
            status: "Live Project",
        },
        {
            title: "Music Band Website",
            description:
                "A creative music-themed website featuring band members, events, schedules, and entertainment-focused design.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://dyne-creates.github.io/Final-Project/",
            status: "Live Project",
        },
        {
            title: "University Event Dashboard",
            description:
                "A student dashboard where users can browse school events, view details, and register for upcoming campus activities.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://dyne-creates.github.io/university_event_dashboard/",
            status: "Live Project",
        },
        {
            title: "University Information Website",
            description:
                "A complete university website presenting school information, location, services, and academic identity with responsive design.",
            tech: ["HTML", "CSS", "Bootstrap"],
            link: "https://dyne-creates.github.io/APTECH_MG_LAB5/",
            status: "Live Project",
        },
    ];

    return (
        <>
            <style>
                {`
                  .project-card {
                    background-color: #111;
                    border: 1px solid #2a2a2a;
                    transition: all 0.35s ease;
                  }

                  .project-card:hover {
                    transform: translateY(-8px);
                    border-color: #ffffff;
                    box-shadow: 0 14px 35px rgba(255,255,255,0.08);
                  }

                  .project-badge {
                    letter-spacing: 0.5px;
                    font-size: 0.75rem;
                  }

                  .project-btn {
                    transition: all 0.3s ease;
                  }

                  .project-btn:hover {
                    transform: scale(1.03);
                  }
                `}
            </style>

            <section className="bg-black text-white min-vh-100 py-5">
                <Container>

                    <Row className="justify-content-center text-center mb-5">
                        <Col lg={8}>

                            <h1 className="fw-bold mb-3">
                                Featured Projects
                            </h1>

                            <p className="text-secondary fs-5">
                                Here are some of the websites and systems I created
                                while learning web development and improving my skills.
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">

                        {projects.map((project, index) => (
                            <Col md={6} key={index}>
                                <Card className="project-card text-white border-0 rounded-4 h-100 shadow-lg">
                                    <Card.Body className="p-4 d-flex flex-column">

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="fw-bold mb-0">
                                                {project.title}
                                            </h4>

                                            <Badge
                                                bg="light"
                                                text="dark"
                                                className="project-badge px-3 py-2">
                                                {project.status}
                                            </Badge>
                                        </div>

                                        <p className="text-secondary mb-4">
                                            {project.description}
                                        </p>

                                        <div className="mb-4">
                                            {project.tech.map((item, i) => (
                                                <Badge
                                                    key={i}
                                                    bg="dark"
                                                    className="me-2 mb-2 px-3 py-2">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            <Button
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                variant="light"
                                                className="w-100 fw-bold project-btn">
                                                View Project
                                            </Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>

                    <Row className="mt-5">
                        <Col className="text-center">
                            <p className="text-secondary mb-0">
                                More projects coming soon as I continue learning and building.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    );
}