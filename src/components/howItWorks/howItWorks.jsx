import React, {Component} from 'react';

import './styles.scss';
import { Container, Col, Row } from 'reactstrap';
import house from "../../images/house.png";


class HowItWorks extends Component{
    constructor(props){
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

    render(){
        return (
            <div>
                <div className="line">
                    <div className="line-wrapper ">
                        <p className="bigText">КАК ЭТО РАБОТАЕТ</p>
                        <div className="previewButton" onClick={this.toggle}>
                            <svg width="43" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.293 30.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L22 28.586l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM21 13v17h2V13h-2z" fill="#fff"/><circle cx="21.5" cy="21.5" r="20.5" stroke="#fff" stroke-width="2"/></svg>
                        </div>
                    </div>
                    <div className={`dropDown-container ${this.state.dropdownOpen ? `shown`: ''}`}>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <img src={house} alt="Как это работает"/>

                                </Col>
                                <Col md={6}>
                                    <p className="listName">ВСТРОЕННАЯ ПЫЛЕСОСНАЯ <br/> СИСТЕМА</p>
                                    <ol className="listOfWork">
                                        <li>
                                            <b>силовой агрегат</b> размещается в гараже, кладовой, подвале - отсутствие шума во время уборки
                                        </li>
                                        <li>
                                            <b>трубопровод</b> соединяет пневморозетки с рабочим агрегатом и выпускным воздушным клапаном
                                        </li>
                                        <li>
                                            <b>пневморозетки</b> в полах или на стенах - к ним подключается уборочный шланг
                                        </li>
                                        <li>
                                            <b>управляющий</b> слаботочный кабель - соединяет контакты, находящиеся в пневморозетках с силовым агрегатом
                                        </li>
                                        <li>
                                            <b>гибкий уборочный</b> шланг герметично присоединяется к пневморозеткам, длина 9 м, вес 2,5 кг
                                        </li>
                                        <li>
                                            <b>выпускной клапан</b> обеспечивает выброс на улицу очищенного от пыли воздуха
                                        </li>
                                    </ol>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCHa08DiQokwW1RXlGElA4jw?view_as=subscribert" className="fillButton fillButton--orange">Смотреть видео</a>
                                </Col>
                            </Row>

                        </Container>

                    </div>
                </div>
            </div>
        )
    }

}
export default HowItWorks;