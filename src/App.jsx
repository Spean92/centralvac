import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
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

                <div>some nice web page</div>
                <header>
                    <nav className="container">
                        <ul className="nav">
                            <li><a href="#section1">Секция 1</a></li>
                            <li><a href="#section2">Секция 2</a></li>
                            <li><a href="#section3">Секция 3</a></li>
                            <li><a href="#section4">Секция 4</a></li>
                            <li><a href="#section5">Секция 5</a></li>
                            <li><a href="#section6">Секция 6</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section className="first_section">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p> Вы цените практичность и комфорт, заботитесь о своем здоровье<br/>
                                                    <b>Установив встроенный пылесос в своем доме, у вас всегда будет
                                                        тихо и чисто.
                                                        В дальнейшем это станет нормой и вы перестанете это замечать</b><br/>
                                                    Присоединитесь к 4000+ счестливым клиентам :)
                                                </p>
                                                <a href="#section5">Начать сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>
                                                    Вы заинтересованы в профессиональном монтаже с гарантией <br/>
                                                    <b>Специалисты нашей компании запроектируют, выполнят монтаж
                                                        коммуникаций
                                                        встроенного пылесоа и установку оборудования по всем
                                                        правилам</b><br/>
                                                    Предоставьте исходные данные, остальное мы выполним сами

                                                </p>
                                                <a href="#section4">Начать сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>
                                                    Вы хотите продлить срок службы системы центрального пылесоса<br/>
                                                    <b>Наша сервисная служба гарантирует своевременный приезд
                                                        специалиса,
                                                        диагностику, аккуратное
                                                        и профессиональное выполнение сервисного обслуживания для
                                                        длительной
                                                        эксплуатации</b><br/>
                                                    Ознакомьтесь с нашими вариантами и предложениями
                                                </p>
                                                <a href="#section3">Начать сейчас</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="line">
                            <div className="container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p><i>Наша миссия внести в Ваш до чистоту и комфорт</i></p>
                                    <button className="">Смотрите ВИДЕО презентацию</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <p>Агрегаты и аксессуры</p>
                                    <div className="slide">
                                        <p>Агрегаты HUSKY</p>
                                    </div>
                                    <div className="slide">
                                        <p>Агрегаты DUOVAC</p>
                                    </div>
                                    <div className="slide">
                                        <p>Агрегаты SOLUVAC</p>
                                    </div>
                                    <div className="slide">
                                        <p>Уборочные наборы</p>
                                    </div>
                                    <div className="slide">
                                        <p>Ваккумные клапаны</p>
                                    </div>
                                    <div className="slide">
                                        <p>Удобные аксессуары</p>
                                    </div>
                                    <div className="slide">
                                        <p>Уборочные насадки</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p>Основные разделы сайта</p>
                                    <p>Мы предлагаем только лучшее для Вас</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="thesa_section">
                        <div className="bg" style={{backgroundImage: `url('./img/bg/Husky_aspirationPlancher_1.jpg')`}}>
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
                                             src="./img/duovac.jpg"/>
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


                <footer>
                    <div id="footer" className="footer-1 show-ribbon">


                        <div className="footer-main">

                            <div className="container">


                                <div className="footer-ribbon">20 years in Ukraine</div>


                                <div className="row">


                                    <div className="col-md-3">

                                        <aside id="contact-info-widget-2" className="widget contact-info"><h3
                                            className="widget-title">
                                            КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                                            <div className="contact-info contact-info-block">
                                                <ul className="contact-details">
                                                    <li><i className="fa fa-map-marker"></i> <strong>АДРЕС:</strong>
                                                        <span>04080 Киев, ул. Викентия Хвойки, 15/15/6, оф. 504</span>
                                                    </li>
                                                    <li><i className="fa fa-phone"></i> <strong>ТЕЛЕФОНЫ:</strong>
                                                        <span>(044) 223-50-46 <br/> (067) 502-05-24 <br/> (066) 282-04-40</span>
                                                    </li>
                                                    <li><i className="fa fa-envelope"></i> <strong>EMAIL::</strong>
                                                        <span><a
                                                            href="mailto:interkonus@gmail.com">interkonus@gmail.com</a></span>
                                                    </li>
                                                    <li><i className="fa fa-clock-o"></i> <strong>РЕЖИМ РАБОТЫ:</strong>
                                                        <span>пн-пт /  9.00 - 18.00 <br/> сб-вс / выходные</span>
                                                    </li>
                                                </ul>
                                            </div>

                                        </aside>
                                        <aside id="follow-us-widget-3" className="widget follow-us">
                                            <div className="share-links disable-br">
                                                <a href="#" target="_blank" title="Facebook"
                                                   className="share-facebook">Facebook</a><a
                                                href="#" target="_blank" title="Twitter"
                                                className="share-twitter">Twitter</a><a
                                                href="#" target="_blank" title="Linkedin"
                                                className="share-linkedin">Linkedin</a>
                                            </div>

                                        </aside>
                                    </div>


                                    <div className="col-md-9">

                                        <aside id="block-widget-7" className="widget widget-block">
                                            <div className="block">
                                                <div className="porto-block ">
                                                    <div className="vc_row wpb_row vc_row-fluid">
                                                        <div className="vc_column_container vc_col-sm-6">
                                                            <div className="wpb_wrapper vc_column-inner"><h4
                                                                className="vc_custom_heading vc_custom_1511735527170 align-left">
                                                                ПОДПИШИСЬ НА РАССЫЛКУ</h4>
                                                                <div className="wpb_text_column wpb_content_element ">
                                                                    <div className="wpb_wrapper">
                                                                        <p style={{ lineHeight: `20px`}}>Получите всю
                                                                            последнюю
                                                                            информацию о событиях, продажах и
                                                                            предложениях.</p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="vc_column_container vc_col-sm-6 vc_custom_1506068952743">
                                                            <div className="wpb_wrapper vc_column-inner">
                                                                <div className="wpb_text_column wpb_content_element ">
                                                                    <div className="wpb_wrapper">
                                                                        <div
                                                                            className="widget_wysija_cont shortcode_wysija">
                                                                            <div
                                                                                id="msg-form-wysija-shortcode5aeb722f6783f-1"
                                                                                className="wysija-msg ajax" />
                                                                            <form
                                                                                id="form-wysija-shortcode5aeb722f6783f-1"
                                                                                method="post" action="#wysija"
                                                                                className="widget_wysija shortcode_wysija">
                                                                                <label>Адрес электронной почты <span
                                                                                    className="wysija-required">*</span></label>

                                                                                <input type="text"
                                                                                       name="wysija[user][email]"
                                                                                       className="wysija-input validate[required,custom[email]]"
                                                                                       title="Адрес электронной почты"
                                                                                       value="" />
                                                                                <input type="text"
                                                                                       name="wysija[user][abs][email]"
                                                                                       className="wysija-input validated[abs][email]"
                                                                                       value="" />
                                                                                <input
                                                                                    className="wysija-submit wysija-submit-field btn btn-primary"
                                                                                    type="submit" value="Подписаться!"/>
                                                                                <input type="hidden" name="form_id"
                                                                                       value="1"/>
                                                                                <input type="hidden" name="action"
                                                                                       value="save"/>
                                                                                <input type="hidden" name="controller"
                                                                                       value="subscribers"/>
                                                                                <input type="hidden" value="1"
                                                                                       name="wysija-page"/>
                                                                                <input type="hidden"
                                                                                       name="wysija[user_list][list_ids]"
                                                                                       value="1"/>

                                                                            </form>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="vc_row wpb_row vc_row-fluid vc_custom_1489841894940 vc_row-has-fill">
                                                        <div className="vc_column_container vc_col-sm-5">
                                                            <div className="wpb_wrapper vc_column-inner"><h4
                                                                className="vc_custom_heading vc_custom_1511735502885 align-left">
                                                                УСЛУГИ</h4>
                                                                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                                    <div className="vc_column_container vc_col-sm-6">
                                                                        <div className="wpb_wrapper vc_column-inner">
                                                                            <div
                                                                                className="wpb_text_column wpb_content_element ">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li><a title="Доставка и оплата"
                                                                                               href="http://www.cvac.site/oplata-i-dostavka/">Оплата
                                                                                            и доставка<br/>
                                                                                        </a></li>
                                                                                        <li><a title="Гарантии"
                                                                                               href="http://www.cvac.site/uslugi/#guarantees">Гарантии<br/>
                                                                                        </a></li>
                                                                                        <li><a title="Расчет цены "
                                                                                               href="http://www.cvac.site/raschet-ceny/">Расчет
                                                                                            цены<br/>
                                                                                        </a></li>
                                                                                    </ul>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vc_column_container vc_col-sm-6">
                                                                        <div className="wpb_wrapper vc_column-inner">
                                                                            <div
                                                                                className="wpb_text_column wpb_content_element ">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li><a title="Сервис"
                                                                                               href="/uslugi/#services">Сервис<br/>
                                                                                        </a></li>
                                                                                        <li><a title="Монтаж"
                                                                                               href="/montazh-sistemy/">Монтаж<br/>
                                                                                        </a></li>
                                                                                        <li><a title="Частые вопросы "
                                                                                               href="/faqs/">Частые
                                                                                            вопросы<br/>
                                                                                        </a></li>
                                                                                    </ul>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vc_column_container vc_col-sm-7">
                                                            <div className="wpb_wrapper vc_column-inner">
                                                                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                                    <div className="vc_column_container vc_col-sm-6">
                                                                        <div className="wpb_wrapper vc_column-inner"><h4
                                                                            className="vc_custom_heading vc_custom_1518869120406 align-left">
                                                                            КАТАЛОГИ
                                                                        </h4>
                                                                            <div
                                                                                className="wpb_text_column wpb_content_element ">
                                                                                <div className="wpb_wrapper">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a href="/wp-content/uploads/2018/02/catalog_husky.pdf?x66554"
                                                                                               target="_blank"
                                                                                               rel="noopener">HUSKY</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/wp-content/uploads/2018/02/catalog_duovac.pdf?x66554"
                                                                                               target="_blank"
                                                                                               rel="noopener">DUOVAC</a>
                                                                                        </li>
                                                                                        <li>SOLUVAC</li>
                                                                                    </ul>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vc_column_container vc_col-sm-6">
                                                                        <div className="wpb_wrapper vc_column-inner"><h4
                                                                            className="vc_custom_heading vc_custom_1511735589123 align-left">
                                                                            НАШИ РАБОТЫ</h4>
                                                                            <div
                                                                                className="wpb_gallery wpb_content_element vc_clearfix">
                                                                                <div className="wpb_wrapper">
                                                                                    <div
                                                                                        className="wpb_gallery_slides wpb_image_grid"
                                                                                        data-interval="3">
                                                                                        <ul className="wpb_image_grid_ul"
                                                                                            style={{ position: `relative`, height: `41px`}}>
                                                                                            <li className="isotope-item"
                                                                                                style={{position: `absolute`, left: `0px`, top: `0px`}}>
                                                                                                <a href="/portfolio/"
                                                                                                   target="_self"><img
                                                                                                    className="lazy-loaded"
                                                                                                    src="http://www.centralvac.com.ua/wp-content/uploads/2018/04/01.jpg?x66554"
                                                                                                    data-lazy-type="image"
                                                                                                    data-src="http://www.centralvac.com.ua/wp-content/uploads/2018/04/01.jpg?x66554"
                                                                                                    width="40"
                                                                                                    height="30"
                                                                                                    alt="Коттедж"
                                                                                                    title="Коттедж"/>
                                                                                                </a></li>
                                                                                            <li className="isotope-item"
                                                                                                style={{position: `absolute`, left: `60px`, top: `0px`}}>
                                                                                                <a href="/portfolio/"
                                                                                                   target="_self"><img
                                                                                                    className="lazy-loaded"
                                                                                                    src="http://www.centralvac.com.ua/wp-content/uploads/2018/04/02.jpg?x66554"
                                                                                                    data-lazy-type="image"
                                                                                                    data-src="http://www.centralvac.com.ua/wp-content/uploads/2018/04/02.jpg?x66554"
                                                                                                    width="40"
                                                                                                    height="30"
                                                                                                    alt="Изба"
                                                                                                    title="Изба"/>
                                                                                                </a></li>
                                                                                            <li className="isotope-item"
                                                                                                style={{position: `absolute`, left: `120px`, top: `0px`}}>
                                                                                                <a href="/portfolio/"
                                                                                                   target="_self"><img
                                                                                                    className="lazy-loaded"
                                                                                                    src="http://www.centralvac.com.ua/wp-content/uploads/2018/04/03.jpg?x66554"
                                                                                                    data-lazy-type="image"
                                                                                                    data-src="http://www.centralvac.com.ua/wp-content/uploads/2018/04/03.jpg?x66554"
                                                                                                    width="40"
                                                                                                    height="30"
                                                                                                    alt="Монтаж"
                                                                                                    title="Монтаж"/>
                                                                                                </a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>


                                </div>


                            </div>

                        </div>


                        <div className="footer-bottom">

                            <div className="container">


                                <div className="footer-left">


                                    © Встроенные пылесосные системы. 2017. Все права защищены
                                </div>


                            </div>

                        </div>


                    </div>

                </footer>
            </div>
    );
    }
    }

    export default App;

