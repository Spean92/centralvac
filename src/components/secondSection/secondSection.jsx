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
        this.state = {
            allSlider   : '',
            sliderClass : '',
            leftSlider  : '',
            rightSlider : '',
            slideCurrent: 0,
            slideTotal  : 6
        }
    }
    toggleModal() {
        this.modal.toggleModal();
    };

    render() {
        let tempImg = `https://via.placeholder.com/180x250`;

        var settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 3,
            speed: 500
        };

        return (
            <ScrollableAnchor id={'section2'}>
                <section className="secondSection">
                    <ModalItem ref={(ref) => {
                        this.modal = ref
                    }}
                    />
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="topFilters">
                                    <div className="previewButton">Агрегаты HUSKY</div>
                                    <div className="previewButton">Агрегаты DUOVAC</div>
                                    <div className="previewButton">Агрегаты SOLUVAC</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>

                            <Col md="7">
                                <Slider {...settings}>
                                    <div className="single">
                                        <div className="slider-single-image">
                                            <img src={tempImg} alt=""/>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="slider-single-image">
                                            <img src={tempImg} alt=""/>

                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="slider-single-image">
                                            <img src={tempImg} alt=""/>

                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="slider-single-image">
                                            <img src={tempImg} alt=""/>

                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="slider-single-image">
                                            <img src={tempImg} alt=""/>

                                        </div>
                                    </div>
                                </Slider>

                            </Col>
                            <Col md="5">
                                <div className="slideDescription">
                                    <h4>Husky Flex</h4>
                                    <ul className="unmark">
                                        <li>Сухая ультратихая уборка 50дБ</li>
                                        <li>Макс. площадь уборки 300м2</li>
                                        <li>Макс. Кол-во пневморозеток 7шт</li>
                                    </ul>
                                    <p>Мощный , тихий и доступный центральный пылесос. Очень компактный и простой в установке, идеально подходит для квартир и средних домов.</p>

                                    <div className="buttonWrapper">
                                        <div className="fullInfo" onClick={this.toggleModal}>
                                            <span>Полная информация</span>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <div className="bottom-filter previewButton">
                                    100м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="bottom-filter previewButton">
                                    200м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="bottom-filter previewButton">
                                    300м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="bottom-filter previewButton">
                                    400м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="bottom-filter previewButton">
                                    700м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="bottom-filter previewButton">
                                    1000м2
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