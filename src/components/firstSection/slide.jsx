import {Col, Container, Row} from "reactstrap";
import { Animated } from "react-animated-css";
import React from "react";


export const Slide = (props) => {
    const { textData, backgroundImage, slideImg, slideButtons: { button } } = props;
    return (<div className="slide">
                <div className="sliderBgImg"
                     style={backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : null}/>
                <div className="textBlock">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Animated animationIn="fadeIn" animationInDelay={500} animationInDuration={1500}>
                                    <p className="textTop">{textData.text_top}</p>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDelay={1000} animationInDuration={1500}>
                                    <p className="textBig" dangerouslySetInnerHTML={{__html: textData.text_big}}/>
                                </Animated>
                                {textData.text_bottom &&
                                <Animated animationIn="fadeIn" animationInDelay={1500} animationInDuration={1500}>
                                    <p className="textBottom" dangerouslySetInnerHTML={{__html: textData.text_bottom}}/>
                                </Animated>
                                }
                                <Animated animationIn="zoomIn" animationInDelay={2500} animationInDuration={1800}>
                                    {button.map((item, i) => {
                                        return <a key={i}
                                                  href={item.href}
                                                  className={item.class}>
                                            {item.text}
                                        </a>

                                    })}
                                </Animated>
                            </Col>
                            <Col md={6} className="text-center">
                                <Animated animationIn="zoomIn" animationInDelay={500} animationInDuration={1500}>
                                    <img src={slideImg} alt=""/>
                                </Animated>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>)
}