import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import './feedbackForm.scss';

export default class FeedbackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: true
        }
    }

    formSubmit = (e) => {
        this.setState(prevState => ({
            formState: !prevState.formState
        }))
    }
    render() {
        return (
            <ScrollableAnchor id={'section9'}>
                <section className="form_section">
                    <Container>
                        {this.state.formState &&
                        <Row>
                            <Col md={10}>
                                <p className="section_heading">
                                    КОНТАКТНАЯ ИНФОРМАЦИЯ
                                </p>
                                <Form>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="name">Ваше Имя*</Label>
                                                <Input type="text" name="name" id="name" placeholder="" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="phone">Телефон*</Label>
                                                <Input type="text" name="phone" id="phone" placeholder="" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="email">E-mail*</Label>
                                                <Input type="email" name="email" id="email" placeholder="" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="address">Адрес Объекта</Label>
                                                <Input type="text" name="address" id="address" placeholder="" />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="exampleFile">Планы помещений</Label>
                                                <Input type="file" name="plans" id="exampleFile" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="exampleText">Дополнительная информация</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <Row>
                                        <Col md="7">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    Отправить копию формы заказа себе
                                                </Label>
                                                <FormText color="white" className="agreement_text">
                                                    Оформление предварительного расчета не обязывает Вас к покупке. <br/>В случае возникновения вопросов наши специалисты свяжутся с Вами для <br/> уточнения деталей<br/> В ходе телефонного разговора можно внести изменения в расчет или отменить его
                                                </FormText>
                                            </FormGroup>
                                            <Button onClick={this.formSubmit}>Отправить</Button>
                                        </Col>
                                        <Col md="5">
                                            <a href="/" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
                                        </Col>
                                    </Row>

                                </Form>
                            </Col>
                        </Row>
                        }

                        {!this.state.formState &&
                        <Row>
                            <Col md={12} className="text-center">
                                <p>Спасибо.</p>
                                <p>Мы свяжемся с вами в ближайшее время.</p>
                            </Col>
                        </Row>
                        }
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }
}