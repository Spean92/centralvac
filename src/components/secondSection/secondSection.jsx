import React, {Component} from 'react';

import ScrollableAnchor from 'react-scrollable-anchor'

import {Col, Container, Row, FormGroup, Label, Input} from "reactstrap";
import Slider from "react-slick/lib";
import './styles.scss'
import ModalItem from "../modalItem/modalItem";
import FirstSection from "../firstSection/firstSection";

class SecondSection extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.modal.toggleModal();
    };
    render() {
        let tempIng = `https://via.placeholder.com/200x150`;
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
                    <Container>
                        <Row>
                            <Col md="3">
                                <ModalItem ref={(ref) => {
                                    this.modal = ref
                                }}
                                />
                            </Col>
                            <Col md="9">
                                <div className="topFilters">
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

                            </Col>
                            <div>

                            </div>

                        </Row>
                        <Row>
                            <Col md="3">
                                <div className="sideFilters">
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
                            <Col md="9">
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
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default SecondSection;