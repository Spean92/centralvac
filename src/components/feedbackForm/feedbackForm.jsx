import React, {Component} from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import './feedbackForm.scss';

export default class FeedbackForm extends Component {

    render() {
        return (
            <ScrollableAnchor id={'section9'}>
                <section className="form_section">
                    <Container>
                        <Row>
                            <Col md={10}>
                                <p>
                                    КОНТАКТНАЯ ИНФОРМАЦИЯ
                                </p>
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Ваше Имя*</Label>
                                        <Input type="email" name="name" id="name" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="address">Адрес Объекта</Label>
                                        <Input type="email" name="address" id="address" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phone">Телефон*</Label>
                                        <Input type="email" name="phone" id="phone" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">E-mail*</Label>
                                        <Input type="email" name="email" id="email" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleFile">Планы помещений</Label>
                                        <Input type="file" name="plans" id="exampleFile" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Дополнительная информация</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Отправить копию формы заказа себе
                                        </Label>
                                        <a href="/">Пользовательское соглашение</a>
                                        <FormText color="muted">
                                            Оформление предварительного расчета не обязывает Вас к покупке. В случае возникновения вопросов наши специалисты свяжутся с Вами для уточнения деталей В ходе телефонного разговора можно внести изменения в расчет или отменить его
                                        </FormText>
                                    </FormGroup>
                                    <Button>Отправить</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }
}