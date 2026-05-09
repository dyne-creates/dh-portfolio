import { useState, useEffect } from "react";
import { Container, Table, Form, Button, Card, Spinner, } from "react-bootstrap";

interface ContactData {
    _id: string;
    fullName: string;
    email: string;
    message: string;
    createdAt: string;
}

export default function Admin() {
    const [contacts, setContacts] = useState<ContactData[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        if (isLoggedIn) {
            fetchContacts();
        }
    }, [isLoggedIn]);

    useEffect(() => {
        document.title = "Dwayne Hinnong • Admin";
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const fetchContacts = async () => {
        try {
            setLoading(true);

            const res = await fetch("https://dh-portfolio-backend-repo.onrender.com/contact");
            const data = await res.json();

            setContacts(data);
        } catch (error) {
            alert("Failed to fetch messages.");
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch("https://dh-portfolio-backend-repo.onrender.com/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const data = await res.json();

            if (data.success) {
                setIsLoggedIn(true);
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Connection failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Delete this message permanently?"
        );

        if (!confirmDelete) return;

        try {
            const res = await fetch(
                `https://dh-portfolio-backend-repo.onrender.com/contact/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (data.success) {
                setContacts(
                    contacts.filter((contact) => contact._id !== id)
                );
            }
        } catch (error) {
            alert("Delete failed.");
        }
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return "No Date";

        const date = new Date(dateString);

        if (isNaN(date.getTime())) return "No Date";

        return date.toLocaleString("en-PH", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    if (!isLoggedIn) {
        return (
            <section className="bg-black min-vh-100 d-flex align-items-center">
                <Container>
                    <Card
                        className="mx-auto border-0 shadow-lg rounded-4"
                        style={{
                            maxWidth: "420px",
                            backgroundColor: "#111",
                        }}>
                        <Card.Body className="p-5 text-white">
                            <h3 className="text-center fw-bold mb-4">
                                Are you the admin?
                            </h3>

                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Username</Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="username"
                                        className="bg-dark text-white border-secondary"
                                        onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        name="password"
                                        className="bg-dark text-white border-secondary"
                                        onChange={handleChange}/>
                                </Form.Group>

                                <Button
                                    type="submit"
                                    variant="light"
                                    className="w-100 fw-bold"
                                    disabled={loading}>
                                    {loading ? "Logging in..." : "Login"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        );
    }


    return (
        <section className="bg-black min-vh-100 text-white py-5">
            <Container>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">
                            ADMIN DASHBOARD
                        </h2>
                    </div>

                    <div className="d-flex">

                        <Button
                            variant="outline-light"
                            onClick={() => setIsLoggedIn(false)}>
                            Logout
                        </Button>
                    </div>
                </div>

                <Card
                    className="border-0 shadow-lg rounded-4 overflow-hidden"
                    style={{ backgroundColor: "#111" }}>
                    <Card.Body className="p-0">

                        {loading ? (
                            <div className="text-center py-5">
                                <Spinner
                                    animation="border"
                                    variant="light"/>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <Table
                                    hover
                                    className="text-white align-middle mb-0">
                                    <thead
                                        style={{
                                            backgroundColor: "#1c1c1c",
                                        }}>
                                        <tr>
                                            <th className="px-4 py-3">Name</th>
                                            <th className="px-4 py-3">Email</th>
                                            <th className="px-4 py-3">Message</th>
                                            <th className="px-4 py-3">
                                                Date Sent
                                            </th>
                                            <th
                                                className="px-4 py-3 text-center"
                                                style={{ width: "130px" }}>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {contacts.length > 0 ? (
                                            contacts.map((contact) => (
                                                <tr
                                                    key={contact._id}
                                                    style={{
                                                        borderColor: "#2b2b2b",
                                                    }}>
                                                    <td className="px-4 py-3 fw-semibold">
                                                        {contact.fullName}
                                                    </td>

                                                    <td className="px-4 py-3 text-secondary">
                                                        {contact.email}
                                                    </td>

                                                    <td
                                                        className="px-4 py-3"
                                                        style={{
                                                            minWidth: "280px",
                                                            maxWidth: "420px",
                                                            whiteSpace: "normal",
                                                        }}>
                                                        {contact.message}
                                                    </td>

                                                    <td className="px-4 py-3 text-secondary">
                                                        {formatDate(contact.createdAt)}
                                                    </td>

                                                    <td className="text-center px-4 py-3">
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            className="px-3"
                                                            onClick={() =>
                                                                handleDelete(contact._id)
                                                            }>
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    className="text-center text-secondary py-5">
                                                    No messages found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        )}

                    </Card.Body>
                </Card>

            </Container>
        </section>
    );
}