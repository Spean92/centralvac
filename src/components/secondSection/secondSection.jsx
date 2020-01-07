import React, {Component} from 'react';

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import {Col, Container, Row, FormGroup, Label, Input} from "reactstrap";
import Slider from "react-slick/lib";
import axios from 'axios';

import './styles.scss';
import ModalItem from "../modalItem/modalItem";
import huskyLogo from "../../images/husky.png";
import duovacLogo from "../../images/duovac.png";
import soluvacLogo from "../../images/soluvac.png";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' arrowRight'}
            style={{ ...style}}
            onClick={onClick}
        >
            <svg width="27" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5h23m0 0L17.189 2M25 9.5L17.189 17" stroke="#A8B4E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' arrowLeft'}
            style={{ ...style}}
            onClick={onClick}
        >
            <svg width="27" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 9.5H2m0 0L9.811 2M2 9.5L9.811 17" stroke="#A8B4E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
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
                250,
                400,
                700,
                1000
            ],
            allSlider   : '',
            sliderClass : '',
            leftSlider  : '',
            rightSlider : '',
            slideCurrent: 0,
            slideTotal  : 6,
            currentSlideBrand: '',
            currentSlideModel: '',
            currentSlideTitle: '',
            currentSlideSubtext: '',
            currentSlideArea: '',
            currentSlideDescription: '',
            currentSlideLink: '',
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
                    currentSlideSubtext: this.state.sliderData[0].subtext,
                    currentSlideArea: this.state.sliderData[0].area[0],
                    currentSlideDescription: this.state.sliderData[0].slide_description,
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
            currentSlideSubtext: this.state.sliderData[next].subtext,
            currentSlideArea: this.state.sliderData[next].area[0],
            currentSlideDescription: this.state.sliderData[next].slide_description,
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
                currentSlideSubtext: slides[0].subtext,
                currentSlideArea: slides[0].area[0],
                currentSlideDescription: slides[0].slide_description,
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
    render() {
        console.log(this.state.argegatsData);
        let settings = {
            className: "center",
            centerMode: true,
            infinite: false,
            centerPadding: "0",
            slidesToShow: 3,
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
        let area250 = this.state.areaFilters.indexOf(250) !== -1;
        let area400 = this.state.areaFilters.indexOf(400) !== -1;
        let area700 = this.state.areaFilters.indexOf(700) !== -1;
        let area1000 = this.state.areaFilters.indexOf(1000) !== -1;

        return (
            <ScrollableAnchor id={'hoovers'}>
                <section className="secondSection">
                    <ModalItem ref={(ref) => {
                                this.modal = ref
                               }}
                               sku={this.state.currentAgregatData}
                    />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h3 className="regular-header">ПОДБОР ВАШЕГО ВСТРОЕННОГО ПЫЛЕСОСА</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="topFilters">
                                    <div className={`filterButton ${modelHusky ? 'active' : ''}`} >
                                        <img src={huskyLogo} alt="Агрегаты Husky"/>
                                    </div>
                                    <div className={`filterButton ${modelDuovac ? 'active' : ''}`} >
                                        <img src={duovacLogo} alt="Агрегаты Duovac"/>
                                    </div>
                                    <div className={`filterButton ${modelSoluvac ? 'active' : ''}`} >
                                        <img src={soluvacLogo} alt="Агрегаты Soluvac"/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="slider-wrap">
                            <Row>
                                <Col md="7">
                                    <div className="sliderWrapper">
                                        <Slider {...settings}>
                                            {this.state.argegatsData && this.createSlides()}

                                        </Slider>
                                        <div className="areaFilters">
                                            <div className={`bottom-filter filterButton ${area100 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 100)}>
                                                100м2
                                            </div>
                                            <div className={`bottom-filter filterButton ${area250 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 250)}>
                                                250м2
                                            </div>
                                            <div className={`bottom-filter filterButton ${area400 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 400)}>
                                                400м2
                                            </div>
                                            <div className={`bottom-filter filterButton ${area700 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 700)}>
                                                700м2
                                            </div>
                                            <div className={`bottom-filter filterButton ${area1000 ? 'active' : ''}`} onClick={(e) => this.filterAgregats(`area`, 1000)}>
                                                1000м2
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="5">
                                    <div className={`${this.state.transition} slideDescription`}>
                                        <div>
                                            <h4 id="skuTitle">{this.state.currentSlideTitle}</h4>
                                            <p id="skuSubtext">{this.state.currentSlideSubtext}</p>
                                            <div id="skuArea">{this.state.currentSlideArea}м <sup>2</sup></div>
                                        </div>
                                        <div>
                                            <p id="skuDescription">{this.state.currentSlideDescription}</p>
                                        </div>

                                        <div className="buttonWrapper">
                                            <div className="fullInfo" onClick={this.toggleModal}>
                                                Подробнее
                                            </div>
                                            <a className="where-to-buy" id="skuLink" href={this.state.currentSlideLink}>
                                                Перейти в магазин
                                            </a>
                                        </div>

                                    </div>
                                </Col>

                            </Row>
                        </div>

                    </Container>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default SecondSection;