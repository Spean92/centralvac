import React, {Component} from 'react';
import './styles.scss'
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import { Col, Container, Row } from 'reactstrap';

import house70 from '../../images/house70.jpg';
import house100 from '../../images/house100.jpg';
import house250 from '../../images/house250.jpg';
import house350 from '../../images/house350.jpg';
import house500 from '../../images/house500.jpg';

class CalculationExample extends Component {
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        return (
            <ScrollableAnchor id={'cost'}>
                <section className="seven_section">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h3 className="regular-header">ПРИМЕРЫ РАСЧЕТОВ ВСТРОЕННОГО<br/> ПЫЛЕСОСА
                                </h3>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <div className="houseWrapper">
                                    <p className="houseSquare">Квартира 70м2
                                    </p>
                                    <div><img src={house70} alt="1"/></div>
                                    <div className="price">
                                        <span>от</span><p>600 у.е.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="houseWrapper">
                                    <p className="houseSquare">Дом 100м2

                                    </p>
                                    <div><img src={house100} alt="2"/></div>
                                    <div className="price">
                                        <span>от</span><p>770 у.е.</p>
                                    </div>
                                </div>

                            </Col>

                            <Col>
                                <div className="houseWrapper">
                                    <p className="houseSquare">Дом 250м2

                                    </p>
                                    <div><img src={house250} alt="3"/></div>
                                    <div className="price">
                                        <span>от</span><p>1000 у.е.</p>
                                    </div>
                                </div>

                            </Col>
                            <Col>
                                <div className="houseWrapper">
                                    <p className="houseSquare">Дом 350м2

                                    </p>
                                    <div><img src={house350} alt="4"/></div>
                                    <div className="price">
                                        <span>от</span><p>1200 у.е.</p>
                                    </div>
                                </div>

                            </Col>
                            <Col>
                                <div className="houseWrapper">
                                    <p className="houseSquare"> Дом 500м2
                                    </p>
                                    <div><img src={house500} alt="5"/></div>
                                    <div className="price">
                                        <span>от</span><p>1800 у.е.</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }


}
export default CalculationExample;