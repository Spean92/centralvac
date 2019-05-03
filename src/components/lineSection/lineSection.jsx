import React, { Component } from "react"
import "./styles.scss"
import ScrollableAnchor from "react-scrollable-anchor";
import {Container, Button, FormGroup, Label, Input, FormText, Form} from "reactstrap";

class LineSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return(
            <ScrollableAnchor id={'section6'}>
                <section className="six_section">

                    <div className="line">
                        <Container>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 style={{color: `#ffffff`}}
                                        className="vc_custom_heading m-b-none m-t-sm align-left">
                                        Вы хотите знать сколько стоит центральный пылесос в ваш дом?

                                    </h3>
                                    <p style={{fontSize: `17px`}}
                                       className="vc_custom_heading lead align-left">Закажите расчет стоимости
                                        встроенного пылесоса
                                        ответив всего на несколько вопросов</p>
                                </div>


                                <div className="order" onClick={this.toggle}><span>Заказать расчет</span></div>
                            </div>
                        </Container>
                    </div>

                    <div className={`dropDown-container ${this.state.dropdownOpen ? `shown`: ''}`}>
                        <Container>
                            <Form>
                                <p>Мы предлагаем простой процесс  конфигурации Вашей системы централизованного пылеудаления, выбора встроенного пылесоса, аксессуаров и комплектующих максимально простым и быстрым. Ответив на несколько вопросы, Вы получите детальную спецификацию на устройство системы встроенного пылеудаления для Вашего дома или квартиры. </p>
                                <FormGroup tag="fieldset">
                                    <legend>Какой тип системы вас интересует</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="systemType" />{' '}
                                            Стандартный
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="systemType" />{' '}
                                            Hide-A-Hose
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <legend>Вы планируете уборку в следующих местах ?</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearPlace" />{' '}
                                            Терраса
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearPlace" />{' '}
                                            Гараж
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearPlace" />{' '}
                                            Чердак
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <legend>Расчеты какого типа уборки нам подготовить для вас?</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearType" />{' '}
                                            Сухая
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearType" />{' '}
                                            Сухая тихая 50dB
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearType" />{' '}
                                            Сухая + влажная
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="clearType" />{' '}
                                            Автосброс в канализацию
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <legend>Установка каких аксессуаров для быстрой уборки вас интересуют?</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="accessory" />{' '}
                                            VacPan
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="accessory" />{' '}
                                            LeoVac
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="accessory" />{' '}
                                            Wally Flex
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="accessory" />{' '}
                                            Vroom
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <legend>Контактная информация:</legend>
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
                                <FormGroup tag="fieldset" className="buildInfo">
                                    <legend>Данная информация поможет более точно произвести расчет и выдать рекомендации</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="buildStage" />{' '}
                                            Ваш дом на стадии проектирования
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="buildStage" />{' '}
                                            Дом построен, стяжки полов еще не залиты
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="buildStage" />{' '}
                                            Стяжки полов залиты, но подвесной потолок не выполнен
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="buildStage" />{' '}
                                            Стяжки полов залиты, но подвесной потолок не выполнен
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="buildStage" />{' '}
                                            Вы живете в доме и вас интересует устройство встроенного пылесоса в нем
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
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
                                <Button>ОТПРАВИТЬ</Button>
                            </Form>
                        </Container>

                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}
export default LineSection;