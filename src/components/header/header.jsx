import React, {Component} from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: ``
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        this.setState({hash: window.location.hash});
    };


    createMenu = () => {
        let menu = [];
        for (let i = 1; i <= 6; i++) {
            menu.push(<li key={i}><a className={this.state.hash === `#section${i}` ? `active` : null} href={`#section${i}`}>{`Секция ${i}`}</a></li>)
        }
        return menu
    };


    render() {
        return (
            <header >
                <nav>
                    <Container>
                        <Row>
                            <Col md="1">
                                <a href="/" className="logo">
                                    <img src="/img/logo.jpg" alt="centralvac"/>
                                </a>
                            </Col>
                            <Col md="11">
                                <ul className="nav">
                                    {this.createMenu()}
                                </ul>
                            </Col>
                        </Row>


                    </Container>
                </nav>
            </header>
        )
    }

}
export default Header;