import React, {Component} from 'react';

import ScrollableAnchor from 'react-scrollable-anchor'

import {Col, Container, Row, FormGroup, Label, Input} from "reactstrap";
import Slider from "react-slick/lib";
import axios from 'axios';

import './styles.scss';
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
            slideTotal  : 6,
            currentSlideTitle: '',
            currentSlideAdv: '',
            currentSlideDescription: '',
            currentSlideLink: '',
            sku: []
        }
    }
    componentWillMount() {
        axios
            .get(`data/sku.json`)
            .then(res => res.data)
            .then(res => {
                this.setState({
                    skuData : res.map((item) => item)
                });
                this.setState({
                    currentSlideTitle: this.state.skuData[0].title,
                    currentSlideAdv: this.state.skuData[0].advantages,
                    currentSlideDescription: this.state.skuData[0].short_description,
                    currentSlideLink: this.state.skuData[0].link,
                })
            })
            .catch(err => console.error(err));
    }

    toggleModal() {
        this.modal.toggleModal();
    };
    createSlides() {
        const images = this.state.skuData.map(item => item.image);
        const sliderItems = images.map((item, iterator) =>
                <div className="single" data-slide-id={iterator.toString()} key={iterator}>
                    <div className="slider-single-image">
                        <img src={item} alt=""/>
                    </div>
                </div>
        );
        return sliderItems;
    }
    changeSliderDetector(next) {
        this.setState({
            currentSlideTitle: this.state.skuData[next].title,
            currentSlideAdv: this.state.skuData[next].advantages,
            currentSlideDescription: this.state.skuData[next].short_description,
            currentSlideLink: this.state.skuData[next].link,
        })
        // const nextSlider = document.querySelector(`[data-slide-id="${next}"]`);
    }
    render() {
        let tempImg = `https://via.placeholder.com/180x250`;
        var settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 3,
            speed: 500,
            beforeChange: (current, next) => {
                // this.changeSliderDetector(current, next);
            },
            afterChange: (current) => {
                // console.log(current);
                this.changeSliderDetector(current);
            }
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
                                    {this.state.skuData && this.createSlides()}

                                </Slider>

                            </Col>
                            <Col md="5">
                                <div className="slideDescription">
                                    <h4 id="skuTitle">{this.state.currentSlideTitle}</h4>
                                    <p id="skuAdvantages">{this.state.currentSlideAdv}</p>
                                    <p id="skuDescription">{this.state.currentSlideDescription}</p>

                                    <div className="buttonWrapper">
                                        <a className="where-to-buy" id="skuLink" href={this.state.currentSlideLink}>
                                            <span>Где купить</span>
                                        </a>
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