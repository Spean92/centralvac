import React, {Component} from 'react'
import './styles.scss'
import {Col, Container, Row} from "reactstrap";
import ListComponent from "./listComponent/listComponent";

class ThirdSection extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapseFirst: false };
        this.state = { collapseSecond: false };
    }

    toggle(top) {
        // if(top ===  `first`) {
        //     this.setState(state => ({collapseFirst : !state.collapseFirst}))
        // } else {
            this.setState(state => ({collapseSecond: !state.collapseSecond}))
        // }
    }



    render() {
        const data = [
            [
                'Уборочные наборы',
                'Ваккумые пневморозетки',
                'Уборочные насадки',
                'Монтажные наборы',
                'Трубы и фитинги',
                'Фильтры и запчасти'
            ],
            [
                'Vroom',
                'Vally Flex',
                'VacPan',
                'Hide-A-Hose',
                'LeoVac',
                'Сепараторы'
            ]
            ];

        return(
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 className="regular-header">Аксессуары и принадлежности</h3>
                        </Col>
                    </Row>
                    {data.map((val, index) =>
                    <ListComponent text={val} key={index} />
                    )
                    }

                </Container>


            </section>
        )
    }
}
export default ThirdSection;