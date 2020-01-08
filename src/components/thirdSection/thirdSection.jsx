import React, {Component} from 'react'
import './styles.scss'
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import ModalAccessory from "../modalAccessory/modalAccessory";

class ThirdSection extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {

        }
    }
    componentWillMount() {
        axios
            .get(`data/accessories.json`)
            .then(res => res.data)
            .then(res => {
                this.setState({
                    accessories : res.map((item) => item)
                });
            })
            .catch(err => console.error(err));
        configureAnchors({offset: -70});
    }
    toggleModal() {
        this.modal.toggleModal();
    }
    openModal(id, type){
        const one_accessory = this.state.accessories.filter((item) => (item.id == id && item.type == type));
        this.setState({accessory: one_accessory[0]});
        this.toggleModal();
    }
    createSlides() {
        return this.state.accessories.map((item, iterator) => {
            return(
                <div className="one_accessory" key={iterator}>
                    <div className="one_accessory_wrapper">
                        <div className="item_image_block">
                            {/*<div className="hover_block">
                                <div className="info_button" onClick={(e) => this.openModal(item.id, item.type)}><span>Подробнее</span></div>
                                <a href={item.link} className="link_button"><span>Где купить</span></a>
                            </div>*/}
                            <div className="item_image">
                                <img src={item.image} alt=""/>
                                <div className="accessory_buttons">
                                    <div className="accessory_video" onClick={(e) => this.openModal(item.id, item.type)}><svg width="46" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.636 1.102C4.128-1.483.474.635.474 5.83v38.336c0 5.2 3.654 7.316 8.162 4.733l33.508-19.217c4.51-2.586 4.51-6.777 0-9.363L8.636 1.102z" fill="#2F80ED"/></svg></div>
                                    <div className="accessory_about" onClick={(e) => this.openModal(item.id, item.type)}>Подробнее</div>
                                    <a className="accessory_link" href={item.link}>Купить</a>
                                </div>
                            </div>
                            <p className="item_title">{item.title}</p>

                        </div>

                    </div>
                </div>
                )
        });
    }
    render() {
        return(
            <ScrollableAnchor id={'accessories'}>
                <section className="thirdSection">
                    <ModalAccessory ref={(ref) => {
                                        this.modal = ref
                                    }}
                                    accessory={this.state.accessory}
                    />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h3 className="regular-header">АКСЕССУАРЫ И ПРИНАДЛЕЖНОСТИ</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="accessory_list">
                                    {this.state.accessories && this.createSlides()}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollableAnchor>
        )
    }
}
export default ThirdSection;