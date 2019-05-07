import React, {Component} from 'react';

import './styles.scss'
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";

class NumbersSection extends Component{

    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        return (
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
        )
    }
}
export default NumbersSection;