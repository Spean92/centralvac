import React, {Component} from 'react'
import './styles.scss'
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import Slider from "react-slick/lib";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import ModalAccessory from "../modalAccessory/modalAccessory";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' arrow_right'}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' arrow_left'}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}
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
                            </div>
                            <p className="item_title">{item.title}</p>

                        </div>

                    </div>
                </div>
                )
        });
    }
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return(
            <ScrollableAnchor id={'section3'}>
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