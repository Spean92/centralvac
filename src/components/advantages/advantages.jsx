import React, {Component} from 'react';

import './styles.scss';
import { Container, Col, Row } from 'reactstrap';
import place from "../../images/place.jpg";


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

    render(){
        return (
            <section className="advantages">
                <p className="bigText">ПРЕИМУЩЕСТВА ВСТРОЕННЫХ ПЫЛЕСОСОВ</p>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={place} alt="Преймущества"/>
                        </Col>
                        <Col md={6}>
                            <ol className="listOfWork">
                                <li>
                                    <p className="listBigText">Больше здоровья</p>
                                    <p className="listSmallText">Микропыль и аллергены выбрасываются за пределы помещения</p>
                                </li>
                                <li>
                                    <p className="listBigText">Больше спокойствия</p>
                                    <p className="listSmallText">Пылесос находится в гараже - это исключает шум при уборке</p>
                                </li>
                                <li>
                                    <p className="listBigText">Больше времени</p>
                                    <p className="listSmallText">Подключите шланг к пневморозетке в стене и все готово</p>
                                </li>
                                <li>
                                    <p className="listBigText">Больше комфорта</p>
                                    <p className="listSmallText">Используйте легкий шланг с управлением на рукоятке</p>
                                </li>
                                <li>
                                    <p className="listBigText">Больше уверенности</p>
                                    <p className="listSmallText">Вы не рискуете ничем с 25-летней гарантией на систему!</p>
                                </li>
                            </ol>
                            <p className="underlistText">Покупая встроенный пылесос<br/> Вы получаете БОЛЬШЕ!</p>
                            <a href="#" className="fillButton">ЗАКАЗАТЬ ПРОСЧЕТ</a>
                        </Col>
                    </Row>

                </Container>

            </section>
        )
    }

}
export default Advantages;