import React, {Component} from 'react';

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import {Col, Container, Row} from "reactstrap";
import axios from 'axios';
import Swiper from 'react-id-swiper';
import ModalItem from "../modalItem/modalItem";
import huskyLogo from "../../images/husky.png";
import duovacLogo from "../../images/duovac.png";
import soluvacLogo from "../../images/soluvac.png";
import 'swiper/css/swiper.min.css';
import './styles.scss';

function SampleNextArrow() {
    return (
        <div
            className="arrowRight"
        >
            <svg width="27" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5h23m0 0L17.189 2M25 9.5L17.189 17" stroke="#A8B4E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
    );
}

function SamplePrevArrow() {
    return (
        <div
            className="arrowLeft"
        >
            <svg width="27" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 9.5H2m0 0L9.811 2M2 9.5L9.811 17" stroke="#A8B4E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
            areaFilters: 100,
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
            sliderData: [],
            swiper: null
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
        let current_agregat = this.state.argegatsData.filter((item) => (item.model === model && item.brand === brand));
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
                if (item.area.indexOf(areaFilter) !== -1) {
                    elementAreaMatch = true;
                }
                return elementBrandMatch && elementAreaMatch;
            });
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
        let current = this.state[`${type}Filters`];
        if (current !== value) {
            current = value;
            this.filterUpdate(`${type}Filters`, current);
        }
    }


    render() {
        const sliderSettings = {
            slidesPerView: 3,
            centeredSlides: true,
            pagination: {
                el: '.swiper-custom-pagination',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.arrowRight',
                prevEl: '.arrowLeft'
            },
            runCallbacksOnInit: true,
            getSwiper: (swiper) => {
                this.setState({swiper: swiper})
            },
            on: {
                slideChange: () => {
                    this.changeSliderDetector(this.state.swiper.activeIndex)
                }
            },
            renderPrevButton: () => <SampleNextArrow/>,
            renderNextButton: () => <SamplePrevArrow/>
        };

        let modelHusky = this.state.brandFilters.indexOf(`husky`) !== -1;
        let modelDuovac = this.state.brandFilters.indexOf(`duovac`) !== -1;
        let modelSoluvac = this.state.brandFilters.indexOf(`soluvac`) !== -1;
        let area100 = this.state.areaFilters === 100;
        let area250 = this.state.areaFilters === 250;
        let area400 = this.state.areaFilters === 400;
        let area700 = this.state.areaFilters === 700;
        let area1000 = this.state.areaFilters === 1000;

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
                                        {this.state.argegatsData &&
                                            <Swiper {...sliderSettings} shouldSwiperUpdate>
                                                {this.createSlides()}
                                            </Swiper>
                                        }
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