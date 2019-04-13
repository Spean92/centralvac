import React, {Component} from 'react';
import Slider from "react-slick/lib";
import ScrollableAnchor from 'react-scrollable-anchor'


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
            speed: 2000,
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
                                <p className="textTop"> Вы цените практичнось ,комфорт и экологичность</p>
                                <p className="textBig">УСТАНОВИТЕ ЦЕНТРАЛЬНЫЙ ПЫЛЕСОС</p>
                                <p className="textBottom">Узнайте как это работает <br/>
                                    и присоединитесь к 4000+ счастливым клиентам</p>
                                <a href="#section2">Узнать больше</a>
                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide2}` }}/>
                            <div className="textBlock">
                                <p className="textTop">интересует проффесиональный монтаж с гарантией?</p>
                                <p className="textBig">ПРОЕКТ, МОНТАЖ С ГАРАНТИЕЙ 25 ЛЕТ </p>
                                <p className="textBottom">Предоставьте исходные данные, остальное мы выполним сами</p>
                                <a href="#section5">Начать сейчас</a>
                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide3}` }}/>
                            <div className="textBlock">
                                <p className="textBig">СЕРВИС РЕМОНТ ОБСЛУЖИВАНИЕ</p>
                                <p className="textBottom">продлите срок эксплуатации системы пылеудаления до 35 лет</p>
                                <a href="#section7">Начать сейчас</a>
                            </div>
                        </div>
                    </Slider>


                    <div className="line">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="leftText">
                                    <p className="bigText"><i>Наша миссия внести в Ваш дом чистоту и комфорт</i></p>
                                    <p className="smallText">Мы предлагаем только лучшее для Вас</p>
                                </div>

                                <button className="">Как это работает</button>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default FirstSection;