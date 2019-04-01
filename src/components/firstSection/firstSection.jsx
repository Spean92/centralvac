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
            speed: 1000,
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
                                <p> Вы цените практичность и комфорт, заботитесь о своем здоровье<br/>
                                    <b>Установив встроенный пылесос в своем доме, у вас всегда будет тихо и чисто.<br />
                                        В дальнейшем это станет нормой и вы перестанете это замечать</b><br/>
                                    Присоединитесь к 4000+ счестливым клиентам :)
                                </p>
                                <a href="#section2">Узнать больше</a>
                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide2}` }}/>
                            <div className="textBlock">
                                <p>
                                    Вы заинтересованы в профессиональном монтаже с гарантией <br/>
                                    <b>Специалисты нашей компании запроектируют, выполнят монтаж коммуникаций<br />
                                        встроенного пылесоа и установку оборудования по всем правилам</b><br/>
                                    Предоставьте исходные данные, остальное мы выполним сами
                                </p>
                                <a href="#section5">Начать сейчас</a>
                            </div>
                        </div>
                        <div className="slide">

                            <div className="sliderBgImg" style={{ backgroundImage: `url(${slide3}` }}/>
                            <div className="textBlock">
                                <p>
                                    Вы хотите продлить срок службы системы центрального пылесоса<br/>
                                    <b>Наша сервисная служба гарантирует своевременный приезд специалиса, диагностику, аккуратное<br />
                                        и профессиональное выполнение сервисного обслуживания для длительной эксплуатации</b><br/>
                                    Ознакомьтесь с нашими вариантами и предложениями
                                </p>
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