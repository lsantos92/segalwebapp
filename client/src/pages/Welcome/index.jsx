import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import Container from "../../components/Container";

/**
 * @function Welcome
 * @description Componente da página de boas-vindas
 */


function Welcome() {
    return (
        <>
            <section className="hero-welcome">
                <div className="container-welcome">
                    <div className="text-welcome">
                        <h1>Welcome to SEGAL Data Portal</h1>
                        <p>
                            This is a portal for GNSS data products.
                        </p>
                    </div>
                </div>
            </section>
            <Container>
                <CardGroup>
                    <Card className="border">
                        <Card.Body>
                            <Card.Title>GRC</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </Card.Text>
                            <Button className="btn-dark" href="/grc">
                                Acess here
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="border">
                        <Card.Body>
                            <Card.Title>EPOS</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </Card.Text>
                            <Button className="btn-dark" href="*">Acess here</Button>
                        </Card.Body>
                    </Card>
                    <Card className="border">
                        <Card.Body>
                            <Card.Title>GEMOP</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </Card.Text>
                            <Button className="btn-dark" href="*">Acess here</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container >
        </>
    );
}

export default Welcome;
