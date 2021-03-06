import React, {Component} from 'react';
import './styles.scss'
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import {Col, Container, Row} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import serviceImg from "../../images/service_img.jpg"

class OurConfidence extends Component{
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        return(
            <ScrollableAnchor id={'service'}>
                <section className="fifth_section">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <img src={serviceImg} alt="Сервис"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h3>СЕРВИС</h3>
                                <div>
                                    <ul>
                                        <li>
                                            <ScrollAnimation animateIn="fadeIn" delay={250} duration={1} animateOnce={true}>
                                                <p className="bigText">Ремонт</p>
                                                <p className="smallText">В течении 1-го дня мы выполним диагностику вашей системы, в случае ремонта установим временное обрудование для Вашего удобства</p>
                                            </ScrollAnimation>
                                        </li>
                                        <li>
                                            <ScrollAnimation animateIn="fadeIn" delay={500} duration={1} animateOnce={true}>
                                                <p className="bigText">Сервис</p>
                                                <p className="smallText">Система центральный пылесос не требует "регулярного сервиса, но периодическое обслуживание " продлит срок службы вашей системы</p>
                                            </ScrollAnimation>
                                        </li>
                                        <li>
                                            <ScrollAnimation animateIn="fadeIn" delay={750} duration={1} animateOnce={true}>
                                                <p className="bigText">Выезд специалиста</p>
                                                <p className="smallText">Наш специалист выедет на место, проконсультирует и предоставит расчет стоимости в течении 1-го дня БЕСПЛАТНО</p>
                                            </ScrollAnimation>
                                        </li>
                                        <li>
                                            <ScrollAnimation animateIn="fadeIn" delay={1000} duration={1} animateOnce={true}>
                                                <p className="bigText">Гарантия</p>
                                            </ScrollAnimation>
                                        </li>
                                    </ul>
                                </div>
                                <ScrollAnimation animateIn="fadeIn" delay={1000} duration={1} animateOnce={true}>
                                    <div className="additionalService">

                                            <div className="one_service">
                                                <svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="18" stroke="#fff" strokeWidth="2"/><path d="M15.757 13.584l.65-6.38h6.557v1.502h-5.177l-.387 3.49c.627-.37 1.34-.554 2.136-.554 1.166 0 2.092.386 2.777 1.16.686.767 1.029 1.807 1.029 3.12 0 1.318-.358 2.358-1.072 3.12-.71.756-1.703 1.134-2.98 1.134-1.13 0-2.054-.314-2.768-.94-.715-.628-1.123-1.495-1.222-2.602h1.538c.1.732.36 1.286.782 1.66.422.37.979.555 1.67.555.756 0 1.348-.258 1.775-.774.434-.515.65-1.227.65-2.135 0-.856-.234-1.542-.702-2.057-.463-.522-1.081-.782-1.855-.782-.709 0-1.265.155-1.67.465l-.43.352-1.301-.334zM16.02 23.66V30h-1.09v-5.443h-2.157l-.128 2.373c-.07 1.09-.254 1.869-.551 2.338-.293.468-.76.712-1.4.732h-.434v-.955l.31-.024c.352-.039.604-.242.756-.609.152-.367.25-1.047.293-2.039l.117-2.713h4.284zm4.37 6.457c-.859 0-1.558-.281-2.097-.844-.54-.566-.809-1.322-.809-2.267v-.2c0-.628.12-1.189.358-1.681a2.815 2.815 0 011.008-1.16 2.536 2.536 0 011.406-.422c.824 0 1.465.271 1.922.814.457.543.685 1.32.685 2.332v.452h-4.295c.016.625.198 1.13.545 1.517.352.383.797.574 1.336.574.383 0 .707-.078.973-.234.265-.156.498-.363.697-.621l.662.516c-.531.816-1.328 1.224-2.39 1.224zm-.134-5.683c-.438 0-.805.16-1.102.48-.297.316-.48.762-.55 1.336h3.175v-.082c-.031-.55-.18-.977-.445-1.277-.266-.305-.625-.457-1.078-.457zm8.508.105h-2.127V30h-1.084v-5.46h-2.086v-.88h5.297v.88z" fill="#F2F2F2"/></svg>
                                                <p className="one_service_text">
                                                    на оборудование
                                                </p>
                                            </div>
                                            <div className="one_service">
                                                <svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="18" stroke="#fff" strokeWidth="2"/><path d="M16.02 24.66V31h-1.09v-5.443h-2.157l-.128 2.373c-.07 1.09-.254 1.869-.551 2.338-.293.468-.76.712-1.4.732h-.434v-.955l.31-.024c.352-.039.604-.242.756-.609.152-.367.25-1.047.293-2.039l.117-2.713h4.284zm4.37 6.457c-.859 0-1.558-.281-2.097-.844-.54-.566-.809-1.322-.809-2.267v-.2c0-.628.12-1.189.358-1.681a2.815 2.815 0 011.008-1.16 2.536 2.536 0 011.406-.422c.824 0 1.465.271 1.922.814.457.543.685 1.32.685 2.332v.452h-4.295c.016.625.198 1.13.545 1.517.352.383.797.574 1.336.574.383 0 .707-.078.973-.234.265-.156.498-.363.697-.621l.662.516c-.531.816-1.328 1.224-2.39 1.224zm-.134-5.683c-.438 0-.805.16-1.102.48-.297.316-.48.762-.55 1.336h3.175v-.082c-.031-.55-.18-.977-.445-1.277-.266-.305-.625-.457-1.078-.457zm8.508.105h-2.127V31h-1.084v-5.46h-2.086v-.88h5.297v.88zM12.82 13.81h1.222c.768-.011 1.371-.213 1.81-.606.44-.393.66-.923.66-1.59 0-1.5-.747-2.25-2.242-2.25-.703 0-1.265.201-1.687.606-.416.398-.624.928-.624 1.59h-1.626c0-1.013.37-1.854 1.107-2.522.745-.674 1.688-1.01 2.83-1.01 1.207 0 2.154.319 2.84.957.685.639 1.028 1.527 1.028 2.663 0 .557-.182 1.096-.545 1.618a3.236 3.236 0 01-1.468 1.169c.703.222 1.245.591 1.626 1.107.387.516.58 1.146.58 1.89 0 1.148-.375 2.06-1.125 2.733-.75.674-1.726 1.01-2.927 1.01-1.2 0-2.18-.324-2.935-.975-.75-.65-1.125-1.509-1.125-2.575h1.635c0 .674.22 1.213.659 1.617.44.404 1.028.607 1.766.607.786 0 1.386-.205 1.802-.616.416-.41.624-.999.624-1.766 0-.744-.228-1.316-.685-1.714-.457-.399-1.117-.604-1.978-.615H12.82V13.81zm15.768 1.732c0 1.904-.325 3.32-.976 4.245-.65.926-1.667 1.389-3.05 1.389-1.365 0-2.376-.451-3.032-1.354-.656-.908-.996-2.261-1.02-4.06V13.59c0-1.881.326-3.278.976-4.193.65-.914 1.67-1.37 3.059-1.37 1.377 0 2.39.442 3.04 1.326.651.88.985 2.239 1.003 4.079v2.109zm-1.626-2.224c0-1.377-.193-2.378-.58-3.005-.387-.633-1-.95-1.837-.95-.832 0-1.439.314-1.82.94-.38.628-.577 1.591-.588 2.892v2.602c0 1.383.199 2.405.597 3.067.405.656 1.014.985 1.828.985.803 0 1.398-.31 1.785-.932.392-.621.597-1.6.615-2.936v-2.663z" fill="#F2F2F2"/></svg>
                                                <p className="one_service_text">
                                                    Срок службы пылесоса
                                                </p>
                                            </div>
                                            <div className="one_service">
                                                <svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="18" stroke="#fff" strokeWidth="2"/><path d="M24.291 25.06a6.01 6.01 0 01-4.264-1.764l-.235-.235a.796.796 0 01.564-1.361.797.797 0 01.564.233l.235.236a4.436 4.436 0 100-6.274l-5.353 5.359a.797.797 0 01-1.13-.002.799.799 0 01.002-1.13l5.353-5.346a6.03 6.03 0 114.264 10.284z" fill="#fff"/><path d="M13.04 25.06a6.03 6.03 0 114.263-10.284l.198.197a.798.798 0 01-1.128 1.128l-.197-.198a4.436 4.436 0 100 6.273l5.668-5.668a.797.797 0 111.128 1.128l-5.669 5.668a6.014 6.014 0 01-4.264 1.756z" fill="#fff"/></svg>
                                                <p className="one_service_text">
                                                    ПОЖИЗНЕННАЯ<br/> Гарантия на систему<br/> пылеудаления
                                                </p>
                                            </div>
                                    </div>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }


}
export default OurConfidence;