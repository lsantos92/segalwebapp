import React from "react";
import { Col, Row, Button, Card, CardGroup } from "react-bootstrap";
import Container from "../../components/Container";

function HomeGRC() {
    return (
        <>
            <section className="hero">
                <div className="container-welcome">
                    <h1>The GRC GNSS Data Center</h1>
                    <p>
                        This is a portal for GNSS data products. The portal is
                        currently under development. Please check back later for
                        updates.
                    </p>
                </div>
            </section>
            <section className="services">
                <div className="title_serv">
                    <h1>Services</h1>
                    <p>This is a portal for GNSS data products. The portal is currently under development.</p>
                </div>
                <Container>
                    <CardGroup>
                        <Card className="card border h-100">
                            <Card.Body>
                                <Card.Title>GNSS Data</Card.Title>
                                <Card.Text>
                                    Observational, navigational and meteorological data from more than 200 world-wide stations are available for download. These <i>permanent station</i> are continously operating, equipped with high precision receivers and antennas.
                                </Card.Text>
                                <Button className="btn-dark" href="*">
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="card border h-100">
                            <Card.Body>
                                <Card.Title>Products</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus pellentesque nisl maximus tincidunt. In eget tristique diam, eget vestibulum enim. Mauris at convallis purus. Nullam consectetur, nibh vitae egestas convallis, elit mi dictum nulla, lobortis fringilla orci orci et ante.
                                </Card.Text>
                                <Button className="btn-dark" href="/holdings">
                                    Read more
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </section >
        </>
    );
}
export default HomeGRC;