import React, {Component} from 'react';
import './styles.scss'
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import {Col, Container, Row, FormGroup, Label, Input} from "reactstrap";


class OurConfidence extends Component{
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        return(
            <ScrollableAnchor id={'section5'}>
                <section className="fifth_section">
                    <Container>
                        <Row>

                            <Col md={4} className="text-md-right">
                                <div>
                                    <h3>Гарантия</h3>
                                    <p>
                                        Гарантия на оборудование 5 лет
                                        Срок службы до 30 лет
                                        Гарантия на корпус агерегата пожизненная
                                    </p>
                                </div>
                                <div>
                                    <h3>Вызов специалиста</h3>
                                    <p>
                                        Вы хотите знать стоимость системы пылеудаления,
                                        Вы не увенены в своем выборе, Вы сомневаетесь
                                        Наш специалист выедет на место, проконсультирует
                                        и предоставит расчет стоимости в течении 1-го дня
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                    <img className="vc_single_image-img" src="/img/duovac.jpg" alt="1" />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <h3>Ремонт</h3>
                                    <p>
                                        В течении 1-го дня мы выполним диагностику
                                        вашей системы, в случае ремонта установим
                                        временное обрудование для Вашего удобства

                                    </p>
                                </div>
                                <div>
                                    <h3>Сервис</h3>
                                    <p>
                                        Система центральный пылесос не требует
                                        "регулярного сервиса, но периодическое обслуживание
                                        "
                                        продлит срок службы вашей системы
                                    </p>
                                </div>
                            </Col>
                            <Col md={12} className="text-md-right">
                                <a href="https://www.centralvac.com.ua/uslugi/" className="button"><span>Услуги</span></a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }


}
export default OurConfidence;