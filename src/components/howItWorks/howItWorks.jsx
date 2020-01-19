import React, {Component} from 'react';

import { Container, Col, Row } from 'reactstrap';
import house from "../../images/house.png";
import ScrollableAnchor from "react-scrollable-anchor";
import ModalItem from "../modalItem/modalItem";
import './styles.scss';


class HowItWorks extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);


    }
    toggle(e) {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    toggleModal() {
        this.modal.toggleModal();
    }
    render(){
        return (
            <ScrollableAnchor id={'section4'}>
                <div className="line">
                    <ModalItem ref={(ref) => {this.modal = ref}}
                               sku={{file: `https://www.youtube.com/embed/-o7DSSu6yIc`}}
                    />
                    <div className="line-wrapper ">
                        <p className="bigText">КАК ЭТО РАБОТАЕТ</p>
                        <div className={`${this.state.dropdownOpen} previewButton`} onClick={this.toggle}>
                            <svg width="43" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.293 30.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L22 28.586l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM21 13v17h2V13h-2z" fill="#fff"/><circle cx="21.5" cy="21.5" r="20.5" stroke="#fff" strokeWidth="2"/></svg>
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
                                    <p className="fillButton fillButton--orange" onClick={this.toggleModal}>Смотреть видео</p>
                                </Col>
                            </Row>

                        </Container>

                    </div>
                </div>
            </ScrollableAnchor>
        )
    }

}
export default HowItWorks;