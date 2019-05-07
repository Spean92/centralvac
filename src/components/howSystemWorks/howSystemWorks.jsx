import React, {Component} from 'react';
import './styles.scss'
import {Card, CardTitle, Col, Container, Row} from "reactstrap";
import Slider from "react-slick/lib";
import ScrollableAnchor, {configureAnchors} from "react-scrollable-anchor";

class HowSystemWorks extends Component{

    componentWillMount() {
        configureAnchors({offset: -70});
    }

    render() {
        const settings = {
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 3500,
            cssEase: "linear"
        };
        return (
            <ScrollableAnchor id={'section7'}>
                <section className="text-center videoSection">
                    <h3 className="regular-header regular-header--black">Видео секция</h3>
                    <Slider {...settings}>
                        {/*                    <Card>
                        <CardTitle>
                            Принцип работы системы пылеудаления
                        </CardTitle>

                    </Card>*/}
                        <div>
                            <p>
                                Основные преимущества
                            </p>
                            <iframe width="" height="" src="https://www.youtube.com/embed/9XVd0JC3jw8" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                        {/*                    <Card>
                        <CardTitle>
                            Ролик Duovac
                        </CardTitle>
                    </Card>*/}
                        <div>
                            <p>
                                Vroom
                            </p>
                            <iframe width="" height="" src="https://www.youtube.com/embed/KH0zJ6ZcBD0" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                        <div>
                            <p>
                                Wally Flex
                            </p>
                            <iframe  src="https://www.youtube.com/embed/zMVvX0PFIJ4" frameBorder="0"
                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                        <div>
                            <p>
                                Hide-A-Hose
                            </p>
                            <iframe width="" height="" src="https://www.youtube.com/embed/-o7DSSu6yIc" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                    </Slider>

                </section>
            </ScrollableAnchor>
        )
    }
}
export default HowSystemWorks;