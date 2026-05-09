import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Card, Form, Button, Spinner, Alert, } from "react-bootstrap";

type ContactForm = {
    fullName: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [loading, setLoading] = useState(false);

    const [contactData, setContactData] = useState<ContactForm>({
        fullName: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<{
        type: "success" | "danger" | "";
        message: string;
    }>({
        type: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const { fullName, email, message } = contactData;

        if (!fullName.trim() || !email.trim() || !message.trim()) {
            return "Please complete all fields.";
        }

        const emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(email)) {
            return "Please enter a valid email.";
        }

        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const error = validateForm();

        if (error) {
            setStatus({
                type: "danger",
                message: error,
            });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const saveMessage = await fetch(
                "https://dh-portfolio-backend-repo.onrender.com/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                }
            );

            if (!saveMessage.ok) {
                throw new Error("Failed to save message.");
            }

            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    from_name: contactData.fullName,
                    from_email: contactData.email,
                    message: contactData.message,
                },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );

            setStatus({
                type: "success",
                message:
                    "Message sent successfully. I’ll get back to you soon.",
            });

            setContactData({
                fullName: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "danger",
                message: "Failed to send message.",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title = "Dwayne Hinnong • Contact";
    }, []);
    return (
        <>
            <style>
                {`
                    .contact-input {
                      background-color: #1b1f26 !important;
                      color: white !important;
                      border: 1px solid #5b6570 !important;
                    }

                    .contact-input::placeholder {
                      color: #a8b0ba !important;
                      opacity: 1;
                    }

                    .contact-input:focus {
                      background-color: #1b1f26 !important;
                      color: white !important;
                      border-color: white !important;
                      box-shadow: 0 0 0 0.2rem rgba(255,255,255,0.12) !important;
                    }

                    .contact-label {
                      color: #f1f1f1 !important;
                      font-weight: 600;
                      margin-bottom: 8px;
                    }
                `}
            </style>

            <section className="bg-black text-white min-vh-100 d-flex align-items-center py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} xl={7}>
                            <Card
                                className="border-0 shadow-lg rounded-4"
                                style={{
                                    backgroundColor: "#0d0d0d",
                                }}>
                                <Card.Body className="p-5">

                                    <div className="text-center mb-5">
                                        <h1 className="fw-bold mb-3 text-white">
                                            Contact Me
                                        </h1>

                                        <p className="text-secondary fs-5">
                                            Let's build something great together.
                                        </p>
                                    </div>

                                    {status.message && (
                                        <Alert
                                            variant={status.type}
                                            className="rounded-3"
                                        >
                                            {status.message}
                                        </Alert>
                                    )}

                                    <Form onSubmit={handleSubmit}>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="contact-label">
                                                Full Name
                                            </Form.Label>

                                            <Form.Control
                                                type="text"
                                                name="fullName"
                                                placeholder="Enter your full name"
                                                value={contactData.fullName}
                                                onChange={handleChange}
                                                className="contact-input py-3" />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="contact-label">
                                                Email Address
                                            </Form.Label>

                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email address"
                                                value={contactData.email}
                                                onChange={handleChange}
                                                className="contact-input py-3" />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="contact-label">
                                                Message
                                            </Form.Label>

                                            <Form.Control
                                                as="textarea"
                                                rows={6}
                                                name="message"
                                                placeholder="Write your message here..."
                                                value={contactData.message}
                                                onChange={handleChange}
                                                className="contact-input" />
                                        </Form.Group>

                                        <Button
                                            type="submit"
                                            variant="light"
                                            className="w-100 fw-bold py-3 rounded-3"
                                            disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <Spinner
                                                        animation="border"
                                                        size="sm"
                                                        className="me-2"
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>

                                    </Form>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}