import React, {Component} from 'react';
import Slider from "react-slick/lib";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import Tabletop from "tabletop";
import './styles.scss';
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide1.png";
import slide1_pic from "../../images/slide1_pic.png";
import slide2_pic from "../../images/slide2_pic.png";
import {Slide} from "./slide";

const spreadSheetUrl = `1msuYooJ32z0ynpVAtkOWejNmzEPXF6e8BaI0mIdyxC4`;

class FirstSection extends Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
    };
    componentDidMount() {
        Tabletop.init({
            key: spreadSheetUrl,
            simpleSheet: true
        }).then(data => {
            this.setState({data: data})
        })
    }

    componentWillMount() {
        configureAnchors({offset: -80});
    }
    renderSlides = () => {
        const buttons = [
            {
                button: [{
                    href: `#section9`,
                    class: `borderedButton`,
                    text: `ЗАКАЗАТЬ ПРОСЧЕТ`
                },
                {
                    href: `#section4`,
                    class: `fillButton`,
                    text: `КАК ЭТО РАБОТАЕТ`
                }]
            },
            {
                button: [{
                    href: `#section9`,
                    class: `fillButton`,
                    text: `Начать сейчас`
                }]
            },
            {
                button: [{
                    href: `#section9`,
                    class: `fillButton`,
                    text: `НАЧАТЬ СЕЙЧАС`
                }]
            }
        ];
        const bgImages = [
            ``, slide2, slide3
        ];
        const slideImages = [
            slide1_pic, slide2_pic, ``
        ];
        return (
            this.state.data.map((item, index) => {
                return <Slide key={index}
                              textData={item}
                              backgroundImage={bgImages[index]}
                              slideImg={slideImages[index]}
                              slideButtons={buttons[index]}
                />
            })
        )
    };

    render() {
        const firstSectionSlider = {
            dots: true,
            accessibility: false,
            arrows: false,
            infinite: true,
            dotsClass: `slick-dots custom-dots`,
            speed: 1500,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            easing: `ease-in-out`
        };
        return (
            <ScrollableAnchor id={'section1'}>
                <section className="first_section">
                    <Slider {...firstSectionSlider}>
                        {this.renderSlides()}
                    </Slider>
                </section>
            </ScrollableAnchor>

        )
    }
}
export default FirstSection;