import React, { Component } from "react"
import "./styles.scss"
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";
import {Container, Row, Col} from "reactstrap";

class LineSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            formStep: 1,
            formState: 1
        };
        this.toggle = this.toggle.bind(this);
    }
    componentWillMount() {
        configureAnchors({offset: -70});
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return(
            <ScrollableAnchor id={'section6'}>
                <section className="six_section">

                    <div className="line">
                        <Container>
                            <Row>
                                <Col md={9}>
                                    <p className="vc_custom_heading">
                                        Вкладывая в встроенный пылесос, Вы вкладываете в свое здоровье и здоровье Ваших близких
                                    </p>
                                </Col>
                                <Col md={3}>
                                    <a className="order" href="#section9">ЗАКАЗАТЬ ПРОСЧЕТ</a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}
export default LineSection;