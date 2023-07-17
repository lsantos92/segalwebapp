import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

/**
 * @function Footer
 * @description Componente do rodapé
 * @returns Footer
 */



function Footer() {
    return (
        <>
            <hr className="border border-secondary w-100" />
            <div className="footer-clean">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={4} md={3} className="item">
                            <h3>Our Projects</h3>
                            <ul>
                                <li><a href="/grc">GRC</a></li>
                                <li><a href="#/">EPOS</a></li>
                                <li><a href="#/">GEMOP</a></li>
                            </ul>
                        </Col>
                        <Col sm={4} md={3} className="item">
                            <h3>Address</h3>
                            <ul>
                                <li>Departamento de Informática (UBI)</li>
                                <li>Rua Marquês d'Ávila e Bolama - Covilhã</li>
                                <li>6200-001 Portugal</li>
                            </ul>
                        </Col>
                        <Col sm={4} md={3} className="item">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="https://segal.ubi.pt/" target="_blank" rel="noreferrer">SEGAL Website</a></li>
                                <li><a href="https://www.ubi.pt/" target="_blank" rel="noreferrer">Universidade da Beira Interior</a></li>
                                <li><a href="https://segal.ubi.pt/gdpr-policy/" target="_blank" rel="noreferrer">GDPR Policy</a></li>
                            </ul>
                        </Col>
                        <Col sm={4} md={3} className="item social">
                            <a href="#/"><Icon.Facebook className="m-1 fs-3 text-secondary" /></a>
                            <a href="#/"><Icon.Twitter className="m-1 fs-3 text-secondary" /></a>
                            <a href="#/"><Icon.Instagram className="m-1 fs-3 text-secondary" /></a>
                            <a href="mailto:info@segal.di.ubi.pt"><Icon.EnvelopeAtFill className="m-1 fs-3 text-secondary" /></a>
                            <p className="copyright">SEGAL - Space & Earth Geodetic Analysis Laboratory © 2023</p>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Footer;