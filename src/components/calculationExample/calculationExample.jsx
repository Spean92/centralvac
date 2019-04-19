import React, {Component} from 'react';
import './styles.scss'
import ScrollableAnchor from "react-scrollable-anchor";



class CalculationExample extends Component {
    render() {
        return (
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
                                <div><img src="./img/houses/Кварт70м.jpg" alt="1"/></div>
                            </div>
                            <div>
                                <p>Дом 100м2

                                </p>
                                <div><img src="./img/houses/Дом%20100м.jpg" alt="2"/></div>
                            </div>

                            <div>
                                <p>Дом 250м2

                                </p>
                                <div><img src="./img/houses/Дом%20250м.jpg" alt="3"/></div>
                            </div>
                            <div>
                                <p>Дом 350м2

                                </p>
                                <div><img src="./img/houses/Дом%20350м.jpg" alt="4"/></div>
                            </div>
                            <div>
                                <p> Дом 500м2

                                </p>
                                <div><img src="./img/houses/Дом%20500м.jpg" alt="5"/></div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }


}
export default CalculationExample;