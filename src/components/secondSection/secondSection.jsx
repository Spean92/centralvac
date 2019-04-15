import React, {Component} from 'react';

import ScrollableAnchor from 'react-scrollable-anchor'

import {Col, Container, Row, FormGroup, Label, Input} from "reactstrap";
import Slider from "react-slick/lib";
import './styles.scss'
import ModalItem from "../modalItem/modalItem";

class SecondSection extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.modal.toggleModal();
    };
    render() {
        let tempIng = `https://via.placeholder.com/180x230`;
        let filterSlider = {
            dots: true,
            accessibility: false,
            // arrows: false,
            infinite: true,
            dotsClass: `slick-dots custom-dots`,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            easing: `ease-in-out`
        }
        return (
            <ScrollableAnchor id={'section2'}>
                <section className="secondSection">
                    <ModalItem ref={(ref) => {
                        this.modal = ref
                    }}
                    />
                    <Container>
                        <Row>
                            <Col md="6">

                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                <div className="modelFilters">
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Агрегаты HUSKY
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Агрегаты DUOVAC
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Агрегаты SOLUVAC
                                        </Label>
                                    </FormGroup>
                                </div>
                                <div className="typeFilters">
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Сухая уборка
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Сухая тихая уборка 50дБ
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Комбинированная уборка
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="filterCondition">
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Автосброс в канализацию
                                        </Label>
                                    </FormGroup>
                                </div>
                            </Col>
                            <Col md="7">
                                <Slider {...filterSlider}>
                                    <div className="oneProduct" onClick={this.toggleModal}>
                                        <img src={tempIng} alt="placeholder"/>
                                    </div>
                                    <div className="oneProduct" onClick={this.toggleModal}>
                                        <img src={tempIng} alt="placeholder"/>
                                    </div>
                                    <div className="oneProduct" onClick={this.toggleModal}>
                                        <img src={tempIng} alt="placeholder"/>
                                    </div>
                                    <div className="oneProduct" onClick={this.toggleModal}>
                                        <img src={tempIng} alt="placeholder"/>
                                    </div>
                                </Slider>
                            </Col>
                            <Col md="3">
                                <div className="slideDescription">
                                    <h4>Husky Flex</h4>
                                    <ul>
                                        <li>Сухая ультратихая уборка 50дБ</li>
                                        <li>Макс. площадь уборки 300м2</li>
                                        <li>Макс. Кол-во пневморозеток 7шт</li>
                                    </ul>
                                    <p>Мощный , тихий и доступный центральный пылесос. Очень компактный и простой в установке, идеально подходит для квартир и средних домов.</p>
                                <button className="fullInfo">
                                     Полная информация
                                </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default SecondSection;