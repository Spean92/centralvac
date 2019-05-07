import React, {Component} from 'react';
import './styles.scss'
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import { Col, Container, Row } from 'reactstrap';



class CalculationExample extends Component {
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        return (
            <ScrollableAnchor id={'section4'}>
                <section className="seven_section">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h3 className="regular-header">Примеры расчетов встроенного пылесоса
                                </h3>
                                <p>Стоимость на Ваш дом может отличаться в пределах 10-15% от предложенных
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <p>Квартира 70м2
                                </p>
                                <div><img src="./img/houses/Кварт70м.jpg" alt="1"/></div>
                            </Col>
                            <Col>
                                <p>Дом 100м2

                                </p>
                                <div><img src="./img/houses/Дом%20100м.jpg" alt="2"/></div>
                            </Col>

                            <Col>
                                <p>Дом 250м2

                                </p>
                                <div><img src="./img/houses/Дом%20250м.jpg" alt="3"/></div>
                            </Col>
                            <Col>
                                <p>Дом 350м2

                                </p>
                                <div><img src="./img/houses/Дом%20350м.jpg" alt="4"/></div>
                            </Col>
                            <Col>
                                <p> Дом 500м2

                                </p>
                                <div><img src="./img/houses/Дом%20500м.jpg" alt="5"/></div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }


}
export default CalculationExample;