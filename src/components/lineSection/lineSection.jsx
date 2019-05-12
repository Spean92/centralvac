import React, { Component } from "react"
import "./styles.scss"
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText, Form, ButtonGroup} from "reactstrap";

class LineSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            formStep: 1,
            formState: 1
        };
        this.toggle = this.toggle.bind(this);
    }
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    changeFormStep(step) {
        this.setState( {
            formStep: step
        });
    }
    renderForm() {
        if(this.state.formState) {
           return (<Form>
                <p>Мы предлагаем простой процесс  конфигурации Вашей системы централизованного пылеудаления, выбора встроенного пылесоса, аксессуаров и комплектующих максимально простым и быстрым. Ответив на несколько вопросы, Вы получите детальную спецификацию на устройство системы встроенного пылеудаления для Вашего дома или квартиры. </p>
                <ButtonGroup>
                    <Button
                        color={this.state.formStep == 1 ? `secondary` : `success`}
                        disabled={this.state.formStep == 1  ? true : false}
                        onClick={e => this.changeFormStep(1)}>Конфигурация</Button>
                    <Button
                        color={this.state.formStep == 2  ? `secondary` : `success`}
                        disabled={this.state.formStep == 2  ? true : false}
                        onClick={e => this.changeFormStep(2)}>Анкета</Button>
                </ButtonGroup>
                <div className={this.state.formStep == 1 ? `active` : `hidden`}>
                    <FormGroup tag="fieldset">
                        <legend>Какой тип системы вас интересует</legend>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox"  name="systemType1" />{' '}
                                Стандартный
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="systemType2" />{' '}
                                Hide-A-Hose
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Вы планируете уборку в следующих местах ?</legend>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearPlace1" />{' '}
                                Терраса
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearPlace2" />{' '}
                                Гараж
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearPlace3" />{' '}
                                Чердак
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Расчеты какого типа уборки нам подготовить для вас?</legend>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearType1" />{' '}
                                Сухая
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearType2" />{' '}
                                Сухая тихая 50dB
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearType3" />{' '}
                                Сухая + влажная
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="clearType4" />{' '}
                                Автосброс в канализацию
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Установка каких аксессуаров для быстрой уборки вас интересуют?</legend>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="accessory1" />{' '}
                                VacPan
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="accessory2" />{' '}
                                LeoVac
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="accessory3" />{' '}
                                Wally Flex
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" name="accessory4" />{' '}
                                Vroom
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset" className="buildInfo">
                        <legend>Данная информация поможет более точно произвести расчет и выдать рекомендации</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="buildStage1" />{' '}
                                Ваш дом на стадии проектирования
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="buildStage2" />{' '}
                                Дом построен, стяжки полов еще не залиты
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="buildStage3" />{' '}
                                Стяжки полов залиты, но подвесной потолок не выполнен
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="buildStage4" />{' '}
                                Стяжки полов залиты, но подвесной потолок не выполнен
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="buildStage5" />{' '}
                                Вы живете в доме и вас интересует устройство встроенного пылесоса в нем
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <Button color="success" onClick={e => this.changeFormStep(2)}>Далее</Button>

                </div>


                <div className={this.state.formStep == 2 ? `active` : `hidden`}>
                    <legend>Контактная информация:</legend>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="formName">Ваше имя*</Label>
                                <Input type="text" name="name" id="formName" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="formPhone">Телефон*</Label>
                                <Input type="text" name="phone" id="formPhone" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="formEmail">E-mail*</Label>
                                <Input type="email" name="email" id="formEmail" placeholder="" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="formAddress">Адрес обьекта</Label>
                                <Input type="text" name="address" id="formAddress" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Планы помещений</Label>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Краткое описание требований по файлу
                                </FormText>
                            </FormGroup>

                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="formText">Дополнительная информация:</Label>
                                <Input type="textarea" name="moreInfo" id="formText" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Отправить копию формы заказа себе
                                </Label>
                            </FormGroup>
                            <p>Оформление предварительного расчета не обязывает Вас к покупке.<br />
                                В случае возникновения вопросов наши специалисты свяжутся с Вами для уточнения деталей<br />
                                В ходе телефонного разговора можно внести изменения в расчет или отменить его</p>
                            <p><a href="">Пользовательское соглашение</a></p>
                            <Button onClick={(e) => this.setState({formState: 0})}>ОТПРАВИТЬ</Button>
                        </Col>
                    </Row>



                </div>



            </Form>)

        } else {
            return (
                <h3 className="regular-header regular-header--black">Спасибо, мы свяжемся с вами в ближайшее время!</h3>
            )
        }
    }
    render() {
        return(
            <ScrollableAnchor id={'section6'}>
                <section className="six_section">

                    <div className="line">
                        <Container>
                            <Row>
                                <Col md={9}>
                                    <h3 style={{color: `#ffffff`}}
                                        className="vc_custom_heading m-b-none m-t-sm align-left">
                                        Вы хотите знать сколько стоит центральный пылесос в ваш дом?

                                    </h3>
                                    <p style={{fontSize: `17px`}}
                                       className="vc_custom_heading lead align-left">Закажите расчет стоимости
                                        встроенного пылесоса
                                        ответив всего на несколько вопросов</p>
                                </Col>

                                <Col md={3}>
                                    <div className="order" onClick={this.toggle}><span>Заказать расчет</span></div>

                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className={`dropDown-container ${this.state.dropdownOpen ? `shown`: ''}`}>
                        <Container>
                            {this.renderForm()}
                        </Container>

                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}
export default LineSection;