import React, {Component} from 'react';
import './styles.scss'


class OurServices extends Component {
    render() {
        return (
            <section className="nine_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container ">

                                <div className="section-title text-md-center">
                                    <h3>Наши услуги</h3>
                                </div>

                                <ul>
                                    <li className="left text-align-right">
                                        <div className="ball">
                                            <div className="bullet"><h3>Продажа агрегатов</h3>
                                                <p>мы работаем с канадскими торговыми марками
                                                    TV HUSKY, DUOVAC, SOLUVAC, CROSSVAC</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="right">
                                        <div className="ball">
                                            <div className="bullet"><h3>Продажа труб и фитингов</h3>
                                                <p>всегда в наличии необходимые комплектующие для сборки
                                                    магистралей
                                                    системы пылеудаления</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="left text-align-right">
                                        <div className="ball">
                                            <div className="bullet"><h3>Продажа аксессуаров </h3>
                                                <p>мы работаем с канадскими торговыми марками
                                                    Vroom, Wally Flex, VacPan, Hide-A-Hose</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="right">
                                        <div className="ball">
                                            <div className="bullet">
                                                <h3>Разработка проекта и монтаж системы</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="left text-align-right">
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
        )
    }


}
export default OurServices;