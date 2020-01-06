import React, {Component} from 'react';
import './footer.scss'

import {Container, Row, Col} from "reactstrap";
import SideSocials from "../sideSocials/sideSocials";
import ScrollableAnchor from "react-scrollable-anchor";

class Footer extends Component {
    render() {
        return (
            <ScrollableAnchor id={'contacts'}>

                <footer>
                    <div id="footer" className="footer-1 show-ribbon">
                        <div className="footer-main">
                            <Container>
                                <Row>

                                    <Col md={3}>
                                        <div className="contact-info contact-info-block">
                                            <strong className="title">АДРЕС:</strong>
                                            <span className="text">04080 Киев, ул. Викентия Хвойки, 15/15/6, оф. 504</span>
                                        </div>


                                    </Col>
                                    <Col md={3}>
                                        <div className="contact-info contact-info-block">
                                            <strong className="title">РЕЖИМ РАБОТЫ:</strong>
                                            <span className="text">пн-пт /  9.00 - 18.00 <br/> сб-вс / выходные</span>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="contact-info contact-info-block">
                                            <strong className="title">ТЕЛЕФОНЫ:</strong>
                                            <p className="text">
                                                <a href="tel:+380442235046">(044) 223-50-46</a> <br/>
                                                <a href="tel:+380675020524">(067) 502-05-24</a> <br/>
                                                <a href="tel:+380662820440">(066) 282-04-40</a>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <SideSocials />

                                    </Col>
                                </Row>


                            </Container>

                        </div>

                    </div>

                </footer>
            </ScrollableAnchor>
        )
    }
}
export default Footer;