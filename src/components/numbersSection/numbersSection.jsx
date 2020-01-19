import React, {Component} from 'react';
import AnimatedNumber from 'react-animated-number';

import './styles.scss'

class NumbersSection extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className="number_section">
                <div className="counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 text-md-center">
                                <div className="stats-desc">
                                    <div className="stats-number">
                                        <AnimatedNumber value={18}
                                                        duration={1000}
                                                        formatValue={n => n.toFixed(0)}
                                        />
                                    </div>
                                    <div className="stats-text">
                                        Лет на рынке <br/> Украины
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 text-md-center">
                                <div className="stats-desc">
                                    <div className="stats-number">
                                        <AnimatedNumber value={4000}
                                                        duration={3000}
                                                        formatValue={n => n.toFixed(0)}
                                                        />
                                        </div>
                                    <div className="stats-text">
                                        Реализованных<br/> проектов
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-md-center">
                                <div className="stats-desc">
                                    <div className="stats-number">
                                        <AnimatedNumber value={4000}
                                                        duration={3000}
                                                        formatValue={n => n.toFixed(0)}
                                        />
                                        </div>
                                    <div className="stats-text">
                                        Благодарных<br/> клиентов
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-md-center">
                                <div className="stats-desc">
                                    <div className="stats-number">
                                        <AnimatedNumber value={855}
                                                        duration={2000}
                                                        formatValue={n => n.toFixed(0)}
                                        />
                                        </div>
                                    <div className="stats-text">
                                        Сервисных<br/> обслуживаний
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default NumbersSection;