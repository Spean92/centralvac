import React, {Component} from 'react';
import './styles.scss'
import {Container, Row, Col } from 'reactstrap';


class OurServices extends Component {
    render() {
        const tempImg = `https://via.placeholder.com/150x150` ;
        return (
            <section className="nine_section">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="section-title text-md-center">
                                <h3>Наши услуги</h3>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="ball">
                                <div className="bullet">
                                    <h3>Продажа агрегатов</h3>
                                    <p>мы работаем с канадскими торговыми марками
                                        TV HUSKY, DUOVAC, SOLUVAC, CROSSVAC</p>
                                </div>
                                <div>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="ball">
                                <div className="bullet">
                                    <h3>Продажа труб и фитингов</h3>
                                    <p>всегда в наличии необходимые комплектующие для сборки
                                        магистралей
                                        системы пылеудаления</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="ball">
                                <div className="bullet">
                                    <h3>Продажа аксессуаров </h3>
                                    <p>мы работаем с канадскими торговыми марками
                                        Vroom, Wally Flex, VacPan, Hide-A-Hose</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="ball">
                                <div className="bullet">
                                    <h3>Разработка проекта и монтаж системы</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="ball">
                                <div className="bullet">
                                    <h3>Гарантийное и постгарантийное обслуживание</h3>
                                    <p>работаем с клиентами которым
                                        устанавливали систему более 15 лет назад</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }


}
export default OurServices;