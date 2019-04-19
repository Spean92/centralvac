import React, {Component} from 'react';
import './footer.scss'

import { Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="footer" className="footer-1 show-ribbon">
                    <div className="footer-main">

                        <div className="container">


                            <div className="footer-ribbon">20 years in Ukraine</div>


                            <div className="row">


                                <div className="col-md-12">

                                    <aside id="contact-info-widget-2" className="widget contact-info"><h3
                                        className="widget-title">
                                        КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>


                                    </aside>
                                </div>
                                <Col md={6}>
                                    <div className="contact-info contact-info-block">
                                        <ul className="contact-details">
                                            <li><i className="fa fa-map-marker"></i>
                                                <strong>АДРЕС:</strong> <br/>
                                                <span>04080 Киев, ул. Викентия Хвойки, 15/15/6, оф. 504</span>
                                            </li>
                                            <li><i className="fa fa-clock-o"></i>
                                                <strong>РЕЖИМ РАБОТЫ:</strong><br/>
                                                <span>пн-пт /  9.00 - 18.00 <br/> сб-вс / выходные</span>
                                            </li>


                                        </ul>
                                    </div>


                                </Col>
                                <Col md={6}>
                                    <div className="contact-info contact-info-block">
                                        <ul className="contact-details">
                                            <li><i className="fa fa-phone"></i>
                                                <strong>ТЕЛЕФОНЫ:</strong> <br/>
                                                <span>(044) 223-50-46 <br/> (067) 502-05-24 <br/> (066) 282-04-40</span>
                                            </li>
                                            <li><i className="fa fa-envelope"></i>
                                                <strong>EMAIL::</strong><br/>
                                                <span><a
                                                    href="mailto:interkonus@gmail.com">interkonus@gmail.com</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>



                            </div>


                        </div>

                    </div>


                    <div className="footer-bottom">

                        <div className="container">
                            <div className="footer-left">
                                © Встроенные пылесосные системы. 2019. Все права защищены
                            </div>
                        </div>

                    </div>


                </div>

            </footer>
        )
    }
}
export default Footer;