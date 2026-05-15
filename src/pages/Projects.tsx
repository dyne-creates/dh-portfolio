import { Container, Row, Col, Card, Badge, Accordion, Button, } from "react-bootstrap";
import { useEffect } from "react";

export default function Projects() {
    const projectSections = [
        {
            section: "First Term",
            index: "01",
            summary:
                "Foundational React and TypeScript activities focused on JSX, reusable components, state management, and application structure.",
            projects: [
                {
                    title: "Sample Resume Template",
                    description:
                        "Developed a React and TypeScript-based Resume Template that presents structured personal and academic information using JSX and reusable component organization.",
                    reflection:
                        "I learned how to properly structure a React application using TypeScript while understanding JSX rendering and deployment through GitHub Pages.",
                    tech: ["React", "TypeScript", "Bootstrap"],
                    link: "https://dyne-creates.github.io/APTECH---FG_Lab1/",
                },
                {
                    title: "Student Dashboard",
                    description:
                        "Created a dynamic Student Dashboard using conditional rendering and array mapping to display enrollment status and subject information.",
                    reflection:
                        "I learned how to create dynamic interfaces using React while improving my understanding of TypeScript data handling and reusable rendering techniques.",
                    tech: ["React", "TypeScript", "Bootstrap"],
                    link: "https://dyne-creates.github.io/APTECH_FG-Lab2/",
                },
                {
                    title: "Student Information System",
                    description:
                        "Built a modular Student Information System using reusable components and TypeScript props for organized data communication.",
                    reflection:
                        "I learned how reusable components improve maintainability and how useState allows React applications to update dynamically.",
                    tech: ["React", "TypeScript", "Bootstrap"],
                    link: "https://dyne-creates.github.io/APTECH_FG-Lab3/",
                },
                {
                    title: "University Club Dashboard",
                    description:
                        "Developed a professional dashboard using React, TypeScript, and Vite with reusable components and efficient data rendering.",
                    reflection:
                        "I learned how to manage complex data structures using TypeScript interfaces and improve scalable application architecture.",
                    tech: ["React", "TypeScript", "Bootstrap"],
                    link: "https://dyne-creates.github.io/APTECH-FG-Lab_Exam/",
                },
            ],
        },
        {
            section: "Mid Term",
            index: "02",
            summary:
                "Projects focused on routing, responsive interfaces, reusable architecture, and advanced React form handling techniques.",
            projects: [
                {
                    title: "Event Registration Dashboard",
                    description:
                        "Developed an Event Registration Dashboard featuring reusable components for displaying university event details and attendee information.",
                    reflection:
                        "I learned how to organize hierarchical data and pass information efficiently between multiple React components.",
                    tech: ["React", "Bootstrap", "TypeScript"],
                    link: "https://dyne-creates.github.io/MG---Lab4/",
                },
                {
                    title: "Student Services Portal",
                    description:
                        "Built a responsive Student Services Portal using React Router and Bootstrap with seamless page navigation and responsive layouts.",
                    reflection:
                        "I learned how Single Page Applications work using React Router and improved my responsive design skills using Bootstrap.",
                    tech: ["React Router", "Bootstrap", "TypeScript"],
                    link: "https://dyne-creates.github.io/APTECH_MG_LAB5/",
                },
                {
                    title: "Book Request Form",
                    description:
                        "Created a Book Request Form demonstrating Controlled and Uncontrolled components using useState and useRef.",
                    reflection:
                        "I learned the differences between Controlled and Uncontrolled components and how to choose the best approach for handling forms.",
                    tech: ["React", "useState", "useRef"],
                    link: "https://dyne-creates.github.io/APTECH_MG_LAB3/",
                },
            ],
        },
        {
            section: "Final Term",
            index: "03",
            summary:
                "Full-stack systems and professional applications integrating databases, APIs, CRUD functionality, and real-world workflows.",
            projects: [
                {
                    title: "Course Feedback System",
                    description:
                        "Developed a Full-Stack Course Feedback System using React, TypeScript, and MongoDB with persistent database storage.",
                    reflection:
                        "I learned how to integrate MongoDB into a React application and gained experience building a complete full-stack system.",
                    tech: ["MongoDB", "React", "Bootstrap"],
                    link: "https://dyne-creates.github.io/Finals_Lab1_-Hinnong-/",
                },
                {
                    title: "Course Feedback System (EmailJS)",
                    description:
                        "Developed a professional portfolio contact system integrated with EmailJS for real-time email communication.",
                    reflection:
                        "I learned how to integrate third-party APIs into React applications and configure secure environment variables properly.",
                    tech: ["EmailJS", "React", "TypeScript"],
                    link: "#",
                },
                {
                    title: "City Issue Reporting Platform",
                    description:
                        "Built a Full-Stack City Issue Reporting Platform implementing CRUD operations and responsive interfaces for urban issue reporting.",
                    reflection:
                        "I learned how to implement CRUD functionality and synchronize dynamic application data across multiple pages.",
                    tech: ["React", "Bootstrap", "CRUD"],
                    link: "https://dyne-creates.github.io/city-issue-report/",
                },
                {
                    title: "Personal Portfolio Web Application",
                    description:
                        "Created a responsive Personal Portfolio Web Application using React, TypeScript, React Router, and EmailJS integration.",
                    reflection:
                        "I learned how to combine all the technologies I studied throughout the semester into one professional application.",
                    tech: ["React", "TypeScript", "EmailJS"],
                    link: "https://dyne-creates.github.io/final-exam/",
                },
            ],
        },
    ];

    useEffect(() => {
        document.title = "Dwayne Hinnong • Projects";
    }, []);

    return (
        <>
            <style>{`

                :root {
                    --black:      #080808;
                    --surface:    #0e0e0e;
                    --surface-2:  #141414;
                    --border:     #1e1e1e;
                    --border-hi:  #2e2e2e;
                    --text:       #f0f0f0;
                    --muted:      #5a5a5a;
                    --muted-hi:   #888;
                    --accent:     #e8e2d5;
                    --accent-dim: rgba(232,226,213,0.08);
                }

                /* ── GLOBAL ─────────────────────────── */
                .projects-root {
                    background-color: var(--black);
                    color: var(--text);
                    font-weight: 300;
                    min-height: 100vh;
                }

                /* ── HERO ───────────────────────────── */
                .projects-hero {
                    padding: 7rem 0 5rem;
                    border-bottom: 1px solid var(--border);
                    position: relative;
                    overflow: hidden;
                }

                .projects-hero::before {
                    content: '';
                    position: absolute;
                    top: -120px;
                    right: -80px;
                    width: 480px;
                    height: 480px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(232,226,213,0.035) 0%, transparent 70%);
                    pointer-events: none;
                }

                .hero-eyebrow {
                    font-size: 0.7rem;
                    letter-spacing: 4px;
                    color: var(--muted);
                    text-transform: uppercase;
                    margin-bottom: 1.25rem;
                }

                .hero-title {
                    font-size: clamp(3.2rem, 8vw, 6rem);
                    font-weight: 600;
                    line-height: 1.0;
                    letter-spacing: -1px;
                    color: var(--text);
                    margin-bottom: 1.5rem;
                }

                .hero-title em {
                    color: var(--accent);
                }

                .hero-description {
                    font-size: 0.95rem;
                    color: var(--muted-hi);
                    line-height: 1.75;
                    max-width: 520px;
                }

                .hero-stats {
                    display: flex;
                    gap: 2.5rem;
                    margin-top: 3rem;
                    padding-top: 2.5rem;
                    border-top: 1px solid var(--border);
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .stat-num {
                    font-size: 2.4rem;
                    font-weight: 700;
                    line-height: 1;
                    color: var(--text);
                }

                .stat-label {
                    font-size: 0.62rem;
                    letter-spacing: 2.5px;
                    color: var(--muted);
                    text-transform: uppercase;
                }

                /* ── SECTION ────────────────────────── */
                .term-section {
                    padding: 5rem 0;
                    border-bottom: 1px solid var(--border);
                }

                .term-section:last-child {
                    border-bottom: none;
                    padding-bottom: 6rem;
                }

                .section-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 2rem;
                    margin-bottom: 3.5rem;
                }

                .section-index {
                    font-size: 0.65rem;
                    color: var(--muted);
                    letter-spacing: 2px;
                    margin-top: 6px;
                    flex-shrink: 0;
                }

                .section-title-block {
                    flex: 1;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text);
                    line-height: 1;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.5px;
                }

                .section-summary {
                    font-size: 0.875rem;
                    color: var(--muted-hi);
                    line-height: 1.7;
                    max-width: 580px;
                }

                .section-line {
                    width: 100%;
                    height: 1px;
                    background: var(--border);
                    margin-bottom: 3rem;
                }

                /* ── PROJECT CARD ───────────────────── */
                .project-card {
                    background: var(--surface);
                    border: 1px solid var(--border) !important;
                    border-radius: 2px !important;
                    transition: border-color 0.3s ease, background 0.3s ease;
                    height: 100%;
                }

                .project-card:hover {
                    background: var(--surface-2);
                    border-color: var(--border-hi) !important;
                }

                .card-inner {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .project-number {
                    font-size: 0.62rem;
                    letter-spacing: 2px;
                    color: var(--muted);
                    margin-bottom: 1.25rem;
                }

                .project-title {
                    font-size: 1.55rem;
                    font-weight: 600;
                    color: var(--text);
                    line-height: 1.2;
                    margin-bottom: 1.25rem;
                    letter-spacing: -0.25px;
                }

                /* ── TECH BADGES ────────────────────── */
                .tech-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem;
                    margin-bottom: 1.5rem;
                }

                .tech-pill {
                    font-size: 0.6rem !important;
                    letter-spacing: 1.5px;
                    color: var(--muted-hi) !important;
                    background: transparent !important;
                    border: 1px solid var(--border-hi) !important;
                    border-radius: 2px !important;
                    padding: 0.3rem 0.65rem !important;
                    text-transform: uppercase;
                    font-weight: 400 !important;
                }

                /* ── ACCORDION ──────────────────────── */
                .proj-accordion .accordion-item {
                    background: transparent !important;
                    border: none !important;
                    border-top: 1px solid var(--border) !important;
                    border-radius: 0 !important;
                }

                .proj-accordion .accordion-button {
                    background: transparent !important;
                    color: var(--muted-hi) !important;
                    box-shadow: none !important;
                    font-size: 0.68rem !important;
                    letter-spacing: 2px !important;
                    text-transform: uppercase !important;
                    padding: 1rem 0 !important;
                    font-weight: 400 !important;
                    transition: color 0.2s ease !important;
                }

                .proj-accordion .accordion-button:not(.collapsed) {
                    color: var(--text) !important;
                    background: transparent !important;
                }

                .proj-accordion .accordion-button::after {
                    filter: invert(0.5);
                    transform: scale(0.7);
                }

                .proj-accordion .accordion-button:not(.collapsed)::after {
                    filter: invert(1);
                }

                .proj-accordion .accordion-body {
                    background: transparent !important;
                    padding: 0 0 1rem 0 !important;
                    color: var(--text);
                }

                .detail-label {
                    font-size: 0.6rem;
                    letter-spacing: 2.5px;
                    color: var(--muted);
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }

                .detail-text {
                    font-size: 0.85rem;
                    color: var(--muted-hi);
                    line-height: 1.75;
                    margin-bottom: 1.25rem;
                }

                /* ── VISIT BUTTON ───────────────────── */
                .visit-btn {
                    font-size: 0.65rem !important;
                    letter-spacing: 2px !important;
                    text-transform: uppercase !important;
                    background: transparent !important;
                    color: var(--text) !important;
                    border: 1px solid var(--border-hi) !important;
                    border-radius: 2px !important;
                    padding: 0.7rem 1.25rem !important;
                    width: 100%;
                    transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease !important;
                }

                .visit-btn:hover {
                    background: var(--accent-dim) !important;
                    border-color: var(--accent) !important;
                    color: var(--accent) !important;
                }

                /* ── CARD FOOTER PUSH ───────────────── */
                .card-spacer {
                    flex: 1;
                }

                /* ── FADE-IN ANIMATION ──────────────── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .fade-in {
                    animation: fadeUp 0.55s ease both;
                }

                .fade-in-1 { animation-delay: 0.05s; }
                .fade-in-2 { animation-delay: 0.12s; }
                .fade-in-3 { animation-delay: 0.2s; }
                .fade-in-4 { animation-delay: 0.28s; }
            `}</style>

            <div className="projects-root">

                {/* ── HERO ────────────────────────── */}
                <div className="projects-hero">
                    <Container>
                        <Row>
                            <Col lg={10}>
                                <p className="hero-eyebrow fade-in fade-in-1">
                                    Academic Portfolio
                                </p>
                                <h1 className="hero-title fade-in fade-in-2">
                                    APPTECH<br /><em>Projects.</em>
                                </h1>
                                <p className="hero-description fade-in fade-in-3">
                                    A curated collection of laboratory activities,
                                    and web applications developed
                                    throughout the semester, spanning React, TypeScript,
                                    MongoDB, and modern web technologies.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ── PROJECT SECTIONS ────────────── */}
                <Container>
                    {projectSections.map((group, sectionIdx) => (
                        <div key={sectionIdx} className="term-section">

                            {/* Section Header */}
                            <div className="section-header">
                                <span className="section-index">{group.index}</span>
                                <div className="section-title-block">
                                    <h2 className="section-title">{group.section}</h2>
                                    <p className="section-summary">{group.summary}</p>
                                </div>
                            </div>

                            <div className="section-line" />

                            {/* Project Cards */}
                            <Row className="g-3">
                                {group.projects.map((project, idx) => (
                                    <Col md={6} key={idx}>
                                        <Card className="project-card border-0">
                                            <div className="card-inner">

                                                <p className="project-number">
                                                    {group.index}.{String(idx + 1).padStart(2, "0")}
                                                </p>

                                                <h3 className="project-title">
                                                    {project.title}
                                                </h3>

                                                <div className="tech-row">
                                                    {project.tech.map((t, i) => (
                                                        <Badge
                                                            key={i}
                                                            className="tech-pill"
                                                        >
                                                            {t}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                <div className="card-spacer" />

                                                {/* Accordion details */}
                                                <Accordion flush className="proj-accordion">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>
                                                            View Details
                                                        </Accordion.Header>
                                                        <Accordion.Body>

                                                            <p className="detail-label">Description</p>
                                                            <p className="detail-text">
                                                                {project.description}
                                                            </p>

                                                            <p className="detail-label">Reflection</p>
                                                            <p className="detail-text">
                                                                {project.reflection}
                                                            </p>

                                                            <Button
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="visit-btn mt-1"
                                                                disabled={project.link === "#"}
                                                            >
                                                                Visit Project →
                                                            </Button>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>

                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                        </div>
                    ))}
                </Container>

            </div>
        </>
    );
}
