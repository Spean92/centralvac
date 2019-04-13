import React, {Component} from 'react';
import logo from './logo.svg';
import './sass/main.scss';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor'

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import slide1 from "./images/bg_slide1.jpg"
import slide2 from "./images/bg_slide2.jpg"
import slide3 from "./images/bg_slide3.jpg"
import FirstSection from "./components/firstSection/firstSection";
import SecondSection from "./components/secondSection/secondSection";
import SideSocials from "./components/sideSocials/sideSocials";
import HowItWorks from "./components/howItWorks/howItWorks";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (
            <div className="App" onScroll={this.detectHash}>
                {/*        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
                <SideSocials/>
                <Header />
                <main>
                    <FirstSection />
                    <HowItWorks/>
                    <SecondSection />
                    <ScrollableAnchor id={'section3'}>
                        <section className="thesa_section">
                            <div className="bg" style={{backgroundImage: `url('/img/bg/Husky_aspirationPlancher_1.jpg')`}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className="thesa">Вкладывая в встроенный пылесос, Вы вкладываете в свое
                                                здоровье и здоровье
                                                Ваших близких</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'section4'}>
                        <section className="fourth_section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-md-center">
                                        <h2>Компания «Интерконус Киев» с 2000 г. является региональным дистрибьютором</h2>
                                        <p>Встроенных пылесосов: HUSKY, DUOVAC, SOLUVAC, CROSSVAC в Украине
                                            На протяжении этого времени реализовано более 4000 проектов, в 52 городах
                                            Украины в тесной
                                            совместной работе не менее чем с 80-ю монтажными организациями.
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <div className="counter">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-md-center">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="stats-block stats-top  m-b ">
                                                    <div className="porto-sicon-top">
                                                        <div id="porto-icon-12932685825aeb7b815f06b"
                                                             className="porto-just-icon-wrapper  ">
                                                            <div className="align-icon" style={{textAlign: `center`}}/>
                                                        </div>
                                                    </div>
                                                    <div className="stats-desc">
                                                        <div id="counter_9984333175aeb7b815f08b"
                                                             data-id="counter_9984333175aeb7b815f08b"
                                                             className="stats-number"
                                                             style={{color: `#ffffff`, fontSize: `50px`}}
                                                             data-speed="3" data-counter-value="18" data-separator="none"
                                                             data-decimal=".">18
                                                        </div>
                                                        <div className="stats-text"
                                                             style={{color: `#ffffff`, fontSize: `20px`}}>Лет на
                                                            рынке Украины
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-md-center">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="stats-block stats-top  m-b ">
                                                    <div className="porto-sicon-top">
                                                        <div id="porto-icon-20575101695aeb7b815f6ae"
                                                             className="porto-just-icon-wrapper  ">
                                                            <div className="align-icon" style={{textAlign: `center`}}/>
                                                        </div>
                                                    </div>
                                                    <div className="stats-desc">
                                                        <div id="counter_12284432725aeb7b815f6cc"
                                                             data-id="counter_12284432725aeb7b815f6cc"
                                                             className="stats-number"
                                                             style={{color: `#ffffff`, fontSize: `50px`}}
                                                             data-speed="3" data-counter-value="4000" data-separator=","
                                                             data-decimal=".">4,000
                                                        </div>
                                                        <div className="stats-text" style={{color: `#ffffff`, fontSize: `20px`}}>
                                                            Реализованных проектов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-md-center">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="stats-block stats-top  m-b ">
                                                    <div className="porto-sicon-top">
                                                        <div id="porto-icon-15244487655aeb7b815fcac"
                                                             className="porto-just-icon-wrapper  ">
                                                            <div className="align-icon" style={{textAlign: `center`}}/>
                                                        </div>
                                                    </div>
                                                    <div className="stats-desc">
                                                        <div id="counter_16962052095aeb7b815fcca"
                                                             data-id="counter_16962052095aeb7b815fcca"
                                                             className="stats-number"
                                                             style={{color: `#ffffff`, fontSize: `50px`}}
                                                             data-speed="3" data-counter-value="4000" data-separator=","
                                                             data-decimal=".">4,000
                                                        </div>

                                                        <div className="stats-text" style={{color: `#ffffff`, fontSize: `20px`}}>
                                                            Благодарных клиентов
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-md-center">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="stats-block stats-top  m-b ">
                                                    <div className="porto-sicon-top">
                                                        <div id="porto-icon-12593494405aeb7b81602b7"
                                                             className="porto-just-icon-wrapper  ">
                                                            <div className="align-icon" style={{textAlign: `center`}}/>
                                                        </div>
                                                    </div>
                                                    <div className="stats-desc">
                                                        <div id="counter_14043367725aeb7b81602d5"
                                                             data-id="counter_14043367725aeb7b81602d5"
                                                             className="stats-number"
                                                             style={{color: `#ffffff`, fontSize: `50px`}}
                                                             data-speed="3" data-counter-value="855" data-separator=","
                                                             data-decimal=".">855
                                                        </div>
                                                        <div className="stats-text" style={{color: `#ffffff`, fontSize: `20px`}}>
                                                            Сервисных обслуживаний
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'section5'}>
                        <section className="fifth_section">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-4 text-md-right">
                                        <div>
                                            <h3><a href="#">Гарантия</a></h3>
                                            <p>
                                                Гарантия на оборудование 5 лет
                                                Срок службы до 30 лет
                                                Гарантия на корпус агерегата пожизненная
                                            </p>
                                        </div>
                                        <div>
                                            <h3><a href="#">Вызов специалиста</a></h3>
                                            <p>
                                                Вы хотите знать стоимость системы пылеудаления,
                                                Вы не увенены в своем выборе, Вы сомневаетесь
                                                Наш специалист выедет на место, проконсультирует
                                                и предоставит расчет стоимости в течении 1-го дня
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="vc_single_image-wrapper   vc_box_border_grey">
                                            <img className="vc_single_image-img"
                                                 src="/img/duovac.jpg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <h3><a href="#">Ремонт</a></h3>
                                            <p>
                                                В течении 1-го дня мы выполним диагностику
                                                вашей системы, в случае ремонта установим
                                                временное обрудование для Вашего удобства

                                            </p>
                                        </div>
                                        <div>
                                            <h3><a href="#">Сервис</a></h3>
                                            <p>
                                                Система центральный пылесос не требует
                                                "регулярного сервиса, но периодическое обслуживание
                                                "
                                                продлит срок службы вашей системы
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'section6'}>
                        <section className="six_section">
                            <div className="line">
                                <div className="container">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h2 style={{color: `#ffffff`}}
                                                className="vc_custom_heading m-b-none m-t-sm align-left">
                                                Вы хотите знать сколько стоит центральный пылесос в ваш дом?

                                            </h2>
                                            <p style={{fontSize: `17px`}}
                                               className="vc_custom_heading lead align-left">Закажите расчет стоимости
                                                встроенного пылесоса
                                                ответив всего на несколько вопросов</p>
                                        </div>


                                        <button className="">Перейти в раздел</button>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'section7'}>
                        <section className="seven_section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">

                                        <h3>Примеры расчетов встроенного пылесоса
                                        </h3>
                                        <p>Стоимость на Ваш дом может отличаться в пределах 10-15% от предложенных
                                        </p>


                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <p>Квартира 70м2
                                        </p>
                                        <div><img src="./img/houses/Кварт70м.jpg" alt=""/></div>
                                    </div>
                                    <div>
                                        <p>Дом 100м2

                                        </p>
                                        <div><img src="./img/houses/Дом%20100м.jpg" alt=""/></div>
                                    </div>

                                    <div>
                                        <p>Дом 250м2

                                        </p>
                                        <div><img src="./img/houses/Дом%20250м.jpg" alt=""/></div>
                                    </div>
                                    <div>
                                        <p>Дом 350м2

                                        </p>
                                        <div><img src="./img/houses/Дом%20350м.jpg" alt=""/></div>
                                    </div>
                                    <div>
                                        <p> Дом 500м2

                                        </p>
                                        <div><img src="./img/houses/Дом%20500м.jpg" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollableAnchor>

                    <section className="thesa_section">
                        <div className="bg" style={{ backgroundImage: `url('./img/bg/Husky_aspirationCanape_2.jpg')`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="thesa">Центральный пылесос - повышает оценочную стоимость и
                                            престиж Вашей
                                            недвижимости</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="nine_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="container ">

                                        <div className="section-title text-md-center">
                                            <h3>Наши услуги</h3>
                                        </div>

                                        <ul>
                                            <li className="right">
                                                <div className="ball">
                                                    <div className="bullet"><h3>Продажа агрегатов</h3>
                                                        <p>мы работаем с канадскими торговыми марками
                                                            TV HUSKY, DUOVAC, SOLUVAC, CROSSVAC</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="left text-align-right">
                                                <div className="ball">
                                                    <div className="bullet"><h3>Продажа труб и фитингов</h3>
                                                        <p>всегда в наличии необходимые комплектующие для сборки
                                                            магистралей
                                                            системы пылеудаления</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right">
                                                <div className="ball">
                                                    <div className="bullet"><h3>Продажа аксессуаров </h3>
                                                        <p>мы работаем с канадскими торговыми марками TV HUSKY, DUOVAC,
                                                            SOLUVAC,
                                                            CROSSVAC</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="left text-align-right">
                                                <div className="ball">
                                                    <div className="bullet">
                                                        <h3>Разработка проекта и монтаж системы</h3>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right">
                                                <div className="ball">
                                                    <div className="bullet">
                                                        <h3>Гарантийное и постгарантийное обслуживание</h3>
                                                        <p>работаем с клиентами которым
                                                            устанавливали систему более 15 лет назад</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="your-advantages-icon">&nbsp;</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                <Footer />
            </div>
    );
    }
}

export default App;

