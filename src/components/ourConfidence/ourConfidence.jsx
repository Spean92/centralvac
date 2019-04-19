import React, {Component} from 'react';
import './styles.scss'
import ScrollableAnchor from "react-scrollable-anchor";


class OurConfidence extends Component{

    render() {
        return(
            <ScrollableAnchor id={'section5'}>
                <section className="fifth_section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4 text-md-right">
                                <div>
                                    <h3><a href="/">Гарантия</a></h3>
                                    <p>
                                        Гарантия на оборудование 5 лет
                                        Срок службы до 30 лет
                                        Гарантия на корпус агерегата пожизненная
                                    </p>
                                </div>
                                <div>
                                    <h3><a href="/">Вызов специалиста</a></h3>
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
                                    <img className="vc_single_image-img" src="/img/duovac.jpg" alt="1" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <h3><a href="/">Ремонт</a></h3>
                                    <p>
                                        В течении 1-го дня мы выполним диагностику
                                        вашей системы, в случае ремонта установим
                                        временное обрудование для Вашего удобства

                                    </p>
                                </div>
                                <div>
                                    <h3><a href="/">Сервис</a></h3>
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
        )
    }


}
export default OurConfidence;