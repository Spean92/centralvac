import React, {Component} from 'react';
import {Animated} from "react-animated-css";

import './styles.scss';
import { Container, Row, Col } from 'reactstrap';


class HowItWorks extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.toggle = this.toggle.bind(this);

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render(){
        return (
            <div>
                <div className="line">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="leftText">
                                <p className="bigText"><i>Встроенные пылесосы решают</i></p>
                                <p className="smallText">проблему чистого воздуха, шума, веса, сокращает время на уборку</p>
                                <p className="smallText">И это время можно потратить на то что нравится</p>
                            </div>
                            <div className="previewButton" onClick={this.toggle}>Как это работает</div>
                        </div>
                    </Container>
                    <div className={`dropDown-container ${this.state.dropdownOpen ? `shown`: ''}`}>
                        <Container>
                            <img src="/img/howItWorks.png" alt="Как это работает"/>
                            <p>Вся система состоит из труб воздуховодов , которые скрываются в стенах , полу , за подвесным потолком или прячутся в декоративных коробах . Все трубы ведут к пылесосу ,который расположен вне жилого помещения . Это  обеспечивает максимальную тишину при уборке . Воздуховоды заканчиваются пневморозетками , которые вмонтированы в стену . Чтобы начать уборку , достаточно просто соединить шланг с пневморозеткой и нажать включатель на рукоятке шланга . Пыль и сор , поступающие в центральную установку , остаются в мусорном баке , а струя очищенного воздуха выбрасывается за пределы помещения . Таким образом , микрочастицы и бактерии , содержащиеся в воздухе , а также пыль полностью удаляются из жилища , причем в помещении возникает разряжение , которое привлекает приток свежего воздуха . Система пылеудаления HUSKY  долговечна : агрегаты рассчитаны на 15-20 лет эксплуатации, а срок службы трубопроводов приравнивается к сроку эксплуатации самого здания .</p>
                        </Container>

                    </div>
                </div>
            </div>
        )
    }

}
export default HowItWorks;