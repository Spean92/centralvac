import React, {Component} from 'react';

import ScrollableAnchor from 'react-scrollable-anchor'

import {Col, Container, Row, FormGroup, Label, Input} from "reactstrap";
import Slider from "react-slick/lib";
import axios from 'axios';

import './styles.scss';
import ModalItem from "../modalItem/modalItem";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' arrowRight'}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' arrowLeft'}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}

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
            currentSlideBrand: '',
            currentSlideModel: '',
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
                    currentSlideBrand: this.state.skuData[0].brand,
                    currentSlideModel: this.state.skuData[0].model,
                    currentSlideTitle: this.state.skuData[0].title,
                    currentSlideAdv: this.state.skuData[0].advantages,
                    currentSlideDescription: this.state.skuData[0].short_description,
                    currentSlideLink: this.state.skuData[0].link,
                })
            })
            .catch(err => console.error(err));
    }

    toggleModal() {
        const brand = this.state.currentSlideBrand;
        const model = this.state.currentSlideModel;
        axios
            .get(`data/full_data.json`)
            .then(res => res.data)
            .then(res =>  res.filter((item) => (item.model == model && item.brand == brand)))
            .then(res =>  {
                this.setState({
                    skuFullData: res[0]
                })
            })
            .then(() => {
                this.modal.toggleModal();
            })
            .catch(err => console.error(err));
    }

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
            currentSlideBrand: this.state.skuData[next].brand,
            currentSlideModel: this.state.skuData[next].model,
            currentSlideTitle: this.state.skuData[next].title,
            currentSlideAdv: this.state.skuData[next].advantages,
            currentSlideDescription: this.state.skuData[next].short_description,
            currentSlideLink: this.state.skuData[next].link,
        })
        // const nextSlider = document.querySelector(`[data-slide-id="${next}"]`);
    }
    renderAdvantages(advantages) {
        return advantages.map((value) => <li key={value.id}>{value.text}</li>)
    }
    render() {
        var settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "150px",
            slidesToShow: 1,
            speed: 500,
            beforeChange: (current, next) => {
                // this.changeSliderDetector(current, next);
            },
            afterChange: (current) => {
                this.changeSliderDetector(current);
            },
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <ScrollableAnchor id={'section2'}>
                <section className="secondSection">
                    <ModalItem ref={(ref) => {
                                this.modal = ref
                               }}
                               sku={this.state.skuFullData}

                    />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h3 className="regular-header">Агрегаты</h3>
                            </Col>
                        </Row>
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
                                    <ul id="skuAdvantages">{this.state.currentSlideAdv && this.renderAdvantages(this.state.currentSlideAdv)}</ul>
                                    {/*<p id="skuDescription">{this.state.currentSlideDescription}</p>*/}
                                    <p id="skuDescription">{((this.state.currentSlideDescription).length > 100) ?
                                        (((this.state.currentSlideDescription).substring(0,100-3)) + '...') :
                                        this.state.currentSlideDescription}</p>

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