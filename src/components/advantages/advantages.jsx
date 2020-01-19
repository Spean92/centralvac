import React, {Component} from 'react';

import { Container, Col, Row } from 'reactstrap';
import place from "../../images/place.jpg";
import ScrollAnimation from "react-animate-on-scroll";

import './styles.scss';

class Advantages extends Component{
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
    renderList(data) {
        return data.map((item, i) => {
            return <ScrollAnimation animateIn="fadeIn" delay={(i+1)*250} duration={1} animateOnce={true}>
                <div className="listNumber">{i+1}</div>
                <div className="listText">
                    <p className="listBigText">{item.bigText}</p>
                    <p className="listSmallText">{item.smallText}</p>
                </div>
            </ScrollAnimation>
        });
    }
    render(){
        const data = [
            {
                bigText: "Больше здоровья",
                smallText: "Микропыль и аллергены выбрасываются за пределы помещения"
            },
            {
                bigText: "Больше спокойствия",
                smallText: "Пылесос находится в гараже - это исключает шум при уборке"
            },
            {
                bigText: "Больше времени",
                smallText: "Подключите шланг к пневморозетке в стене и все готово"
            },
            {
                bigText: "Больше комфорта",
                smallText: "Используйте легкий шланг с управлением на рукоятке"
            },
            {
                bigText: "Больше уверенности",
                smallText: "Вы не рискуете ничем с 25-летней гарантией на систему!"
            },
        ];
        return (
            <section className="advantages">
                <p className="bigText">ПРЕИМУЩЕСТВА ВСТРОЕННЫХ ПЫЛЕСОСОВ</p>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={place} alt="Преймущества"/>
                        </Col>
                        <Col md={6}>
                            <div className="listOfWork">
                                {this.renderList(data)}
                            </div>
                            <ScrollAnimation animateIn="fadeIn" delay={1250} duration={1} animateOnce={true}>
                                <p className="underlistText">Покупая встроенный пылесос<br/> Вы получаете БОЛЬШЕ!</p>
                                <a href="#section9" className="fillButton">ЗАКАЗАТЬ ПРОСЧЕТ</a>
                            </ScrollAnimation>

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}
export default Advantages;