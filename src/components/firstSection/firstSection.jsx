import React, {Component} from 'react';
import Slider from "react-slick/lib";
import ScrollableAnchor from 'react-scrollable-anchor'
import {Animated} from "react-animated-css";

import './styles.scss';

import slide1 from "../../images/bg_slide1.jpg";
import slide2 from "../../images/bg_slide2.jpg";
import slide3 from "../../images/bg_slide3.jpg";

class FirstSection extends Component{

    render() {
        const firstSectionSlider = {
            dots: true,
            accessibility: false,
            arrows: false,
            infinite: true,
            dotsClass: `slick-dots custom-dots`,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            easing: `ease-in-out`
        };
        return (
            <ScrollableAnchor id={'section1'}>
                <section className="first_section">
                    <Slider {...firstSectionSlider}>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide1}` }}/>
                            <div className="textBlock">
                                <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                    <p className="textTop"> Вы цените практичнось ,комфорт и экологичность</p>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                    <p className="textBig">УСТАНОВИТЕ ЦЕНТРАЛЬНЫЙ ПЫЛЕСОС</p>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDelay={2500} animationInDuration={1500}>
                                    <p className="textBottom">Узнайте как это работает <br/>
                                        и присоединитесь к 4000+ счастливым клиентам</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationInDelay={4000} animationInDuration={1800}>
                                    <a href="#section2"><span>Узнать больше</span></a>
                                </Animated>
                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide2}` }}/>
                            <div className="textBlock">
                                <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                    <p className="textTop">интересует проффесиональный монтаж с гарантией?</p>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                    <p className="textBig">ПРОЕКТ, МОНТАЖ С ГАРАНТИЕЙ 25 ЛЕТ </p>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDelay={2500} animationInDuration={1500}>
                                    <p className="textBottom">Предоставьте исходные данные, остальное мы выполним сами</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationInDelay={4000} animationInDuration={1800}>
                                    <a href="#section5"> <span>Начать сейчас</span></a>
                                </Animated>
                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide3}` }}/>
                            <div className="textBlock">
                                <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                    <p className="textBig">СЕРВИС РЕМОНТ ОБСЛУЖИВАНИЕ</p>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                    <p className="textBottom">продлите срок эксплуатации системы пылеудаления до 35 лет</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationInDelay={2500} animationInDuration={1800}>
                                    <a href="#section7"><span>Начать сейчас</span></a>
                                </Animated>
                            </div>
                        </div>
                    </Slider>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default FirstSection;