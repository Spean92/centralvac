import React, {Component} from 'react';
import './styles.scss'
import {Card, CardTitle, Col, Container, Row} from "reactstrap";
import Slider from "react-slick/lib";

class HowSystemWorks extends Component{

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 3500,
            cssEase: "linear"
        };
        return (
            <section className="text-center videoSection">
                <h3>Видео секция</h3>
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
        )
    }
}
export default HowSystemWorks;