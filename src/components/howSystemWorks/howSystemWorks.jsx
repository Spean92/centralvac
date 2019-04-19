import React, {Component} from 'react';
import './styles.scss'
import {Card, CardTitle, Col, Container, Row} from "reactstrap";

class HowSystemWorks extends Component{

    render() {
        return (
            <section>
                <Container>
                    <Row style={{alignItems: 'flex-end'}}>
                        <Col md={4}>
                            <h5>Принцип работы системы пылеудаления</h5>
                            <Card>
                                <CardTitle>
                                    Видео
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h5>Основные преимущества</h5>
                            <Card>
                                <CardTitle>
                                    Видео
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h5>Ролик Duovac</h5>
                            <Card>
                                <CardTitle>
                                    Видео
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h5>Vroom </h5>
                            <Card>
                                <CardTitle>
                                    Видео
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h5>Wally Flex</h5>
                            <Card>
                                <CardTitle>
                                    Видео
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h5>Hide-A-Hose</h5>
                            <Card>
                                <CardTitle>
                                    Видео
                                </CardTitle>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default HowSystemWorks;