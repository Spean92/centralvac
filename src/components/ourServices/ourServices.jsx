import React, {Component} from 'react';
import './styles.scss'
import {Container, Row, Col } from 'reactstrap';
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import ScrollAnimation from 'react-animate-on-scroll';
import Typing from 'react-typing-animation';

class OurServices extends Component {
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        return (
            <ScrollableAnchor  id={'services'}>
                <section className="company_section">
                    <Container>
                        <Row>
                            <Col md={12}>
                                    <p className="top-section-title">Компания «Интерконус Киев» с 2000 г. является региональным<br/>
                                        дистрибьютором встроенных пылесосов: HUSKY, DUOVAC, SOLUVAC в Украине.</p>
                                    <p className="top-section-text">На протяжении этого времени реализовано более 4000 проектов, в 52 городах Украины<br/>
                                        в тесной совместной работе не менее чем с 80-ю монтажными организациями.
                                    </p>
                            </Col>

                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="section-title text-md-center">
                                    <h3 className="">Наши услуги</h3>
                                </div>
                            </Col>

                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <div className="ball">
                                    <ScrollAnimation animateIn="fadeIn" delay={250} duration={1} animateOnce={true}>
                                        <div>
                                            <svg width="69" height="69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF"/><path d="M43.54 18H26.83a.5.5 0 00-.5.5v.56a.5.5 0 00.5.5h16.71a.5.5 0 00.5-.5v-.56a.5.5 0 00-.5-.5zM43.54 31.25H26.83a.5.5 0 00-.5.5v.56a.5.5 0 00.5.5h16.71a.5.5 0 00.5-.5v-.56a.5.5 0 00-.5-.5zM43.77 19.56H26.58v11.69h17.19V19.56z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.58 31.25v7.06a55.516 55.516 0 00.33 8 26.821 26.821 0 002.48 6.5h11.55a26.821 26.821 0 002.48-6.5c.302-2.655.413-5.329.33-8v-7.06M37.75 23.1H33v4.75h4.75V23.1z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.56 37.1H24v-1.25l2.33-1.16M43.77 37.1h2.56v-1.25L44 34.69" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <div className="bullet">
                                            <p>Продажа агрегатов</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </Col>
                            <Col>
                                <div className="ball">
                                    <ScrollAnimation animateIn="fadeIn" delay={500} duration={1} animateOnce={true}>
                                        <div>
                                            <svg width="69" height="69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF"/><path d="M26.046 40.53l.815.816a.916.916 0 010 1.29l-2.59 2.591a.915.915 0 01-1.292 0l-9.713-9.713a.915.915 0 010-1.29l2.591-2.592a.916.916 0 011.263 0l8.899 8.899M45.525 44.312l9.71-9.71a.916.916 0 000-1.295l-2.589-2.59a.916.916 0 00-1.295 0l-9.71 9.71a.915.915 0 000 1.295l2.59 2.59a.916.916 0 001.294 0zM16.919 31.45c3.103-3.992 9.695-7.453 17.339-7.453 7.324 0 13.631 3.214 16.89 6.912M26.477 40.723a11.782 11.782 0 017.781-2.984c2.694-.007 5.298.97 7.324 2.746" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <div className="bullet">
                                            <p>Продажа труб и фитингов</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </Col>
                            <Col>
                                <div className="ball">
                                    <ScrollAnimation animateIn="fadeIn" delay={750} duration={1} animateOnce={true}>
                                        <div>
                                            <svg width="69" height="69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF"/><path d="M54.018 33.074H15.457a.614.614 0 00-.614.614v2.284c0 .339.275.614.614.614h38.56c.34 0 .615-.275.615-.614v-2.285a.614.614 0 00-.614-.613z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M38.556 29.586h-7.835a.614.614 0 00-.614.614v2.284c0 .34.275.614.614.614h7.835c.34 0 .614-.275.614-.614V30.2a.614.614 0 00-.614-.614z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M37.095 19h-5.047a.614.614 0 00-.614.614v9.358c0 .339.274.614.614.614h5.047c.339 0 .614-.275.614-.614v-9.358a.614.614 0 00-.614-.614zM52.47 36.5H17.04a.614.614 0 00-.613.614v13.582c0 .34.275.614.614.614h35.43c.338 0 .613-.275.613-.614V37.114a.614.614 0 00-.614-.614z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <div className="bullet">
                                            <p>Продажа аксессуаров</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </Col>
                            <Col>
                                <div className="ball">
                                    <ScrollAnimation animateIn="fadeIn" delay={1000} duration={1} animateOnce={true}>
                                        <div>
                                            <svg width="69" height="69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF"/><path d="M23.173 23.102h24.228a.491.491 0 01.438.534v22.136a.49.49 0 01-.438.534H23.173M19 40.937V23.284" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M23.173 46.274c-2.305 0-4.173-2.263-4.173-5.08 0-2.819 1.868-5.113 4.173-5.113V17.99c-2.305 0-4.173 2.294-4.173 5.111M47.838 26.827h2.647a.491.491 0 01.438.534v22.114a.491.491 0 01-.438.534h-24.26M26.226 50.02a4.408 4.408 0 01-4.013-3.746M36.504 32.09l2.935-.62-3.938 5.604-2.466-3.352L29.3 38.43M39.439 31.47l.395 2.54" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <div className="bullet">
                                            <p>Разработка проекта и монтаж системы</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </Col>
                            <Col>
                                <div className="ball">
                                    <ScrollAnimation animateIn="fadeIn" delay={1250} duration={1} animateOnce={true}>
                                        <div>
                                            <svg width="69" height="69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34.5" fill="#F1F5FF"/><path d="M50.519 34.289v1.714a1.152 1.152 0 01-1.081 1.253l-3.313.553a.264.264 0 00-.207.195 30.26 30.26 0 01-.54 1.277.23.23 0 000 .264l1.966 2.76a1.15 1.15 0 01-.138 1.588l-2.438 2.393a1.15 1.15 0 01-1.576.138l-2.75-1.979a.241.241 0 00-.275 0l-1.266.518a.242.242 0 00-.184.207 405.487 405.487 0 01-.575 3.45 1.15 1.15 0 01-1.15.979h-3.45a1.15 1.15 0 01-1.15-1.036c-.185-1.15-.38-2.231-.565-3.347a.242.242 0 00-.172-.207l-1.311-.54a.219.219 0 00-.242 0l-2.899 1.863a1.15 1.15 0 01-1.575-.15L23.2 43.755a1.15 1.15 0 01-.092-1.564l1.966-2.715a.242.242 0 000-.276 43.805 43.805 0 01-.529-1.3c0-.091-.069-.16-.195-.184l-3.393-.62a1.15 1.15 0 01-.955-1.15v-3.452a1.15 1.15 0 011.093-1.23l3.243-.518a.264.264 0 00.23-.196c.17-.429.346-.855.53-1.276a.264.264 0 000-.3l-1.852-2.76a1.152 1.152 0 01.15-1.622l2.415-2.37a1.15 1.15 0 011.587-.126l2.703 1.956a.253.253 0 00.3 0l1.276-.518a.253.253 0 00.195-.219c.2-1.112.403-2.224.61-3.335a1.15 1.15 0 011.15-.978h3.451a1.15 1.15 0 011.15.932c.138.747.253 1.495.368 2.243.07.402.127.816.196 1.219a.287.287 0 00.15.172l1.357.633a.253.253 0 00.299 0l2.726-1.932a1.15 1.15 0 011.369 0c.087.056.168.122.241.195l2.381 2.312a1.15 1.15 0 01.127 1.541l-1.956 2.75a.288.288 0 000 .322c.184.425.357.85.518 1.276a.22.22 0 00.184.162l3.45.575a1.15 1.15 0 01.979 1.15v1.714l-.104.023z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M29.366 34.312a5.877 5.877 0 115.866 5.9 5.864 5.864 0 01-5.866-5.9zm5.866 3.565a3.543 3.543 0 10-3.53-3.554 3.555 3.555 0 003.53 3.554v0z" stroke="#4074F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                        <div className="bullet">
                                            <p>Гарантийное и постгарантийное обслуживание</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }


}
export default OurServices;