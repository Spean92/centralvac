import React, {Component} from 'react';
import Slider from "react-slick/lib";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import { Container, Row, Col } from 'reactstrap';
import {Animated} from "react-animated-css";

import './styles.scss';

import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";

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

class FirstSection extends Component{
    componentWillMount() {
        configureAnchors({offset: -80});
    }

    render() {
        const firstSectionSlider = {
            dots: true,
            accessibility: false,
            arrows: false,
            infinite: true,
            dotsClass: `slick-dots custom-dots`,
            speed: 3000,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            // autoplay: false,
            easing: `ease-in-out`
        };
        return (
            <ScrollableAnchor id={'section1'}>
                <section className="first_section">
                    <Slider {...firstSectionSlider}>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide1}` }}/>
                            <div className="textBlock">
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                                <p className="textBig">СЕРВИС РЕМОНТ ОБСЛУЖИВАНИЕ</p>
                                            </Animated>
                                            <Animated animationIn="fadeIn" animationInDelay={2500} animationInDuration={1500}>
                                                <p className="textBottom">Продлите срок эксплуатации системы <br/> пылеудаления до 35 лет</p>
                                            </Animated>
                                            <Animated animationIn="zoomIn" animationInDelay={4000} animationInDuration={1800}>
                                                <a href="#section2" className="fillButton">НАЧАТЬ СЕЙЧАС</a>
                                            </Animated>
                                        </Col>
                                        <Col md={6}>

                                        </Col>
                                    </Row>
                                </Container>


                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide2}` }}/>
                            <div className="textBlock">
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                                <p className="textTop">ИНТЕРЕСУЕТ ПРОФЕССИОНАЛЬНЫЙ МОНТАЖ С ГАРАНТИЕЙ?</p>
                                            </Animated>
                                            <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                                <p className="textBig">ПРОЕКТ, МОНТАЖ С ГАРАНТИЕЙ 25 ЛЕТ</p>
                                            </Animated>
                                            <Animated animationIn="fadeIn" animationInDelay={2500} animationInDuration={1500}>
                                                <p className="textBottom">Предоставьте исходные данные, остальное мы выполним сами</p>
                                            </Animated>
                                            <Animated animationIn="zoomIn" animationInDelay={4000} animationInDuration={1800}>
                                                <a href="#section5" className="fillButton">Начать сейчас</a>
                                            </Animated>
                                        </Col>
                                        <Col md={6}>
                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundColor: `#FFF` }}/>
                            <div className="textBlock">
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                                <p className="textTop">ВОЗДУХ БЕЗ ПЫЛИ И АЛЛЕРГЕНОВ В ВАШИХ ПРОСТРАНСТВАХ</p>
                                            </Animated>
                                            <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                                <p className="textBig">ВСТРОЕННЫЕ ПЫЛЕСОСНЫЕ СИСТЕМЫ</p>
                                            </Animated>
                                            <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                                <p className="textBottom">Встроенные пылесосы решают проблему чистого воздуха, шума, веса, сохраняют время на уборку.
                                                    Ведь это время можно потратить на то что нравится</p>
                                            </Animated>
                                            <Animated animationIn="zoomIn" animationInDelay={2500} animationInDuration={1800}>
                                                <a href="#section7" className="borderedButton">ЗАКАЗАТЬ ПРОСЧЕТ</a>
                                                <a href="#section7" className="fillButton">КАК ЭТО РАБОТАЕТ</a>
                                            </Animated>
                                        </Col>
                                        <Col md={6}>
                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        </div>
                    </Slider>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default FirstSection;