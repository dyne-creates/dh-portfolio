import myImage from "../assets/aboutMe.jpg";

import GithubIcon from "../assets/icons/github.png";
import ReactIcon from "../assets/icons/atom.png";
import HtmlIcon from "../assets/icons/html.png";
import CssIcon from "../assets/icons/css-3.png";
import VscodeIcon from "../assets/icons/vscode.png";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import MongoDBIcon from "../assets/icons/MongoDB_SpringGreen.png";
import JavaScriptIcon from "../assets/icons/java-script.png";
import TypescriptIcon from "../assets/icons/typescript.png";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useEffect } from "react";

export default function About() {
    const tools = [
        { icon: HtmlIcon, title: "HTML", desc: "Website Structure" },
        { icon: CssIcon, title: "CSS", desc: "Style & Layout" },
        { icon: JavaScriptIcon, title: "JavaScript", desc: "Functionality" },
        { icon: TypescriptIcon, title: "TypeScript", desc: "Typed JavaScript" },
        { icon: ReactIcon, title: "React", desc: "Frontend Library" },
        { icon: BootstrapIcon, title: "Bootstrap", desc: "Responsive UI" },
        { icon: VscodeIcon, title: "VS Code", desc: "Code Editor" },
        { icon: GithubIcon, title: "GitHub", desc: "Collaboration Tool" },
        { icon: MongoDBIcon, title: "MongoDB", desc: "Database" },
    ];

    useEffect(() => {
        document.title = "Dwayne Hinnong • About";
    }, []);

    return (
        <>
            <style>{`
                .tool-card {
                  background-color: #111;
                  border: 1px solid #333;
                  transition: all 0.35s ease;
                  cursor: pointer;
                }

                .tool-card:hover {
                  transform: translateY(-6px) scale(1.02);
                  border-color: #ffffff;
                  box-shadow: 0 12px 30px rgba(255,255,255,0.08);
                }

                .tool-card:hover .tool-title {
                  color: #ffffff;
                }

                .tool-card:hover .tool-desc {
                  color: #d1d1d1 !important;
                }

                .tool-icon {
                  transition: transform 0.35s ease;
                }

                .tool-card:hover .tool-icon {
                  transform: rotate(-4deg) scale(1.08);
                }`}
            </style>

            <section className="bg-black text-white py-5">
                <Container>

                    <Row className="align-items-center mb-5">

                        <Col md={5} className="text-center">
                            <Image
                                src={myImage}
                                alt="Profile"
                                fluid
                                roundedCircle
                                className="shadow"
                                style={{
                                    width: "280px",
                                    border: "4px solid white",
                                }} />
                        </Col>

                        <Col md={7} className="mt-4 mt-md-0">
                            <h1 className="fw-bold mb-3">Digital Identity</h1>

                            <p className="text-secondary fs-5 mb-3">
                                I am a first-year BSIT student passionate about technology,
                                programming, and creating useful digital solutions.
                            </p>

                            <p className="text-secondary mb-3">
                                I am proudly Ifugao, from Baguio City, currently based in
                                La Union. My goal is to continuously improve my skills in
                                web development and software engineering.
                            </p>

                            <p className="text-secondary">
                                Outside coding, I enjoy music and playing instruments like
                                guitar, bass, keyboard, and drums. Creativity in music helps
                                me think better when building projects.
                            </p>
                        </Col>

                    </Row>

                    <div>
                        <h2 className="fw-bold text-center mb-5">Tools</h2>

                        <Row className="g-4">

                            {tools.map((tool, index) => (
                                <Col md={6} key={index}>
                                    <Card className="tool-card rounded h-100 border-0">
                                        <Card.Body className="d-flex align-items-center p-3">

                                            <Image
                                                src={tool.icon}
                                                alt={tool.title}
                                                fluid
                                                className="tool-icon"
                                                style={{
                                                    width: "55px",
                                                    height: "55px",
                                                    objectFit: "contain",
                                                    background: "white",
                                                    padding: "8px",
                                                    borderRadius: "12px",
                                                }} />

                                            <div className="ms-3">
                                                <h5 className="mb-1 text-white tool-title">
                                                    {tool.title}
                                                </h5>

                                                <p className="text-secondary mb-0 tool-desc">
                                                    {tool.desc}
                                                </p>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}

                        </Row>
                    </div>

                </Container>
            </section>
        </>
    );
}