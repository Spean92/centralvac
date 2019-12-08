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
        this.fetchShit = this.fetchShit.bind(this);
        this.state = {
            brandFilters: [
                `husky`,
                `duovac`,
                `soluvac`
            ],
            areaFilters: [
                100,
                200,
                300,
                400,
                500,
                700,
                1000
            ],
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
    componentDidMount() {
        this.fetchShit();
        configureAnchors({offset: -70});

    }

    fetchShit() {
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
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        // console.log(`update`);
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
    filterUpdate(type, newFilterArray) {
        this.setState({[type]: newFilterArray}, function () {
            let brandFilter = this.state.brandFilters;
            let areaFilter = this.state.areaFilters;

            let slides = this.state.argegatsData.filter(item => {
                let elementBrandMatch = false;
                let elementAreaMatch = false;
                for (let i of brandFilter) {
                    if (item.brand === i) {
                        elementBrandMatch = true;
                        break;
                    }
                }
                for (let j of areaFilter) {
                    if (item.area.indexOf(j) !== -1) {
                        elementAreaMatch = true;
                        break;
                    }
                }
                return elementBrandMatch && elementAreaMatch;
            });
            console.log(slides);
            this.setState({
                sliderData: slides,
                currentSlideBrand: slides[0].brand,
                currentSlideModel: slides[0].model,
                currentSlideTitle: slides[0].title,
                currentSlideAdv: slides[0].advantages,
                currentSlideDescription: slides[0].short_description,
                currentSlideLink: slides[0].link
            })
        })

    }
    filterAgregats(type, value) {
        let filterIndex = this.state[`${type}Filters`].indexOf(value);
        let current = this.state[`${type}Filters`];
        if (filterIndex !== -1) {
            current.splice(filterIndex, 1);
            this.filterUpdate(`${type}Filters`, current);
        } else {
            current.push(value);
            this.filterUpdate(`${type}Filters`, current);
        }
    }
    renderAdvantages(advantages) {
        return advantages.map((value) => <li key={value.id}>{value.text}</li>)
    }
    render() {
        console.log(this.state.argegatsData);
        let settings = {
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
        
        let modelHusky = this.state.brandFilters.indexOf(`husky`) !== -1;
        let modelDuovac = this.state.brandFilters.indexOf(`duovac`) !== -1;
        let modelSoluvac = this.state.brandFilters.indexOf(`soluvac`) !== -1;
        let area100 = this.state.areaFilters.indexOf(100) !== -1;
        let area200 = this.state.areaFilters.indexOf(200) !== -1;
        let area300 = this.state.areaFilters.indexOf(300) !== -1;
        let area400 = this.state.areaFilters.indexOf(400) !== -1;
        let area700 = this.state.areaFilters.indexOf(700) !== -1;
        let area1000 = this.state.areaFilters.indexOf(1000) !== -1;

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
                                    <div className={`previewButton ${modelHusky ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`brand`, `husky`)}>Агрегаты HUSKY</div>
                                    <div className={`previewButton ${modelDuovac ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`brand`, `duovac`)}>Агрегаты DUOVAC</div>
                                    <div className={`previewButton ${modelSoluvac ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`brand`, `soluvac`)}>Агрегаты SOLUVAC</div>
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
                                <div className={`bottom-filter previewButton ${area100 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 100)}>
                                    100м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${area200 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 200)}>
                                    200м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${area300 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 300)}>
                                    300м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${area400 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 400)}>
                                    400м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${area700 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 700)}>
                                    700м2
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={`bottom-filter previewButton ${area1000 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 1000)}>
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