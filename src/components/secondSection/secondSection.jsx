import React, {Component} from 'react';

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

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
            husky: true,
            duovac: true,
            soluvac: true,
            area100: true,
            area200: true,
            area300: true,
            area400: true,
            area700: true,
            area1000: true,
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
            transition: 'show',
            sku: [],
            sliderData: []
        }
    }
    componentWillMount() {
        axios
            .get(`data/agregats_data.json`)
            .then(res => res.data)
            .then(res => {
                this.setState({
                    argegatsData : res.map((item) => item),
                    sliderData: res.map((item) => item)
                });
                this.setState({
                    currentSlideBrand: this.state.sliderData[0].brand,
                    currentSlideModel: this.state.sliderData[0].model,
                    currentSlideTitle: this.state.sliderData[0].title,
                    currentSlideAdv: this.state.sliderData[0].advantages,
                    currentSlideDescription: this.state.sliderData[0].short_description,
                    currentSlideLink: this.state.sliderData[0].link
                })
            })
            .catch(err => console.error(err));
        configureAnchors({offset: -70});

    }

    toggleModal() {
        const brand = this.state.currentSlideBrand;
        const model = this.state.currentSlideModel;
        let current_agregat = this.state.argegatsData.filter((item) => (item.model == model && item.brand == brand));
        this.setState({
            currentAgregatData: current_agregat[0]
        });
        this.modal.toggleModal();
    }

    createSlides() {
        const images = this.state.sliderData.map(item => item.image);
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
            currentSlideBrand: this.state.sliderData[next].brand,
            currentSlideModel: this.state.sliderData[next].model,
            currentSlideTitle: this.state.sliderData[next].title,
            currentSlideAdv: this.state.sliderData[next].advantages,
            currentSlideDescription: this.state.sliderData[next].short_description,
            currentSlideLink: this.state.sliderData[next].link,
            transition: "show"
        })
    }
    filterModel(brand) {
        this.setState(prevState => ({
            [brand]: !prevState[brand]
        }),function() {
            let slides = this.state.argegatsData.filter(item => {
                switch (item.brand) {
                    case `husky`:
                        return this.state.husky;
                        break;
                    case `duovac`:
                        return this.state.duovac;
                        break;
                    case `soluvac`:
                        return this.state.soluvac;
                        break;
                }
            });
            this.setState({
                sliderData: slides,
                currentSlideBrand: slides[0].brand,
                currentSlideModel: slides[0].model,
                currentSlideTitle: slides[0].title,
                currentSlideAdv: slides[0].advantages,
                currentSlideDescription: slides[0].short_description,
                currentSlideLink: slides[0].link
            })
        });

    }
    //TODO need to refactor logic of filters
    filterArea(area) {
        const areaState = `area${area}`;
        const slides = this.state.argegatsData.filter(item => item.area.indexOf(area) !== -1);
        // console.log(slides);
        this.setState(prevState => ({
            [areaState]: !prevState[areaState],
            sliderData: slides,
            currentSlideBrand: slides[0].brand,
            currentSlideModel: slides[0].model,
            currentSlideTitle: slides[0].title,
            currentSlideAdv: slides[0].advantages,
            currentSlideDescription: slides[0].short_description,
            currentSlideLink: slides[0].link
        }));
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
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: "10px"
                    }
                }
            ],
            beforeChange: (current, next) => {
                setTimeout(() => this.setState({ transition: "hidden" }), 10);
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
                               sku={this.state.currentAgregatData}

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
                                    <div className={`previewButton ${this.state.husky ? 'active' : ''}`} onClick={(e) => this.filterModel(`husky`)}>Агрегаты HUSKY</div>
                                    <div className={`previewButton ${this.state.duovac ? 'active' : ''}`} onClick={(e) => this.filterModel(`duovac`)}>Агрегаты DUOVAC</div>
                                    <div className={`previewButton ${this.state.soluvac ? 'active' : ''}`} onClick={(e) => this.filterModel(`soluvac`)}>Агрегаты SOLUVAC</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>

                            <Col md="7">
                                <Slider {...settings}>
                                    {this.state.argegatsData && this.createSlides()}

                                </Slider>

                            </Col>
                            <Col md="5">
                                <div className={`${this.state.transition} slideDescription`}>
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
                                <div className={`bottom-filter previewButton ${this.state.area100 ? 'active' : ''}`} onClick={(e) => this.filterArea(100)}>
                                    100м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${this.state.area200 ? 'active' : ''}`} onClick={(e) => this.filterArea(200)}>
                                    200м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${this.state.area300 ? 'active' : ''}`} onClick={(e) => this.filterArea(300)}>
                                    300м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${this.state.area400 ? 'active' : ''}`} onClick={(e) => this.filterArea(400)}>
                                    400м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${this.state.area700 ? 'active' : ''}`} onClick={(e) => this.filterArea(700)}>
                                    700м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${this.state.area1000 ? 'active' : ''}`} onClick={(e) => this.filterArea(1000)}>
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