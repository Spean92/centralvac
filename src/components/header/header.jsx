import React, {Component} from 'react';
import './header.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: ``,
            dropdownOpen: false

        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
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


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }
    createMenu = (menuItems) => {
        let menu = [];
        for (let i = 0; i <= menuItems.length; i++) {
            menu = [
                ...menu,
                (<li key={i}>
                    <a className={this.state.hash === `#section${i+1}` ? `active` : null}
                        href={`#section${i+1}`}>
                        {Array.isArray(menuItems[i]) ? this.createDropDown(menuItems[i]) : menuItems[i]}
                    </a>
                </li>)
            ]
        }
        return menu
    };
    createDropDown(subMenuItems) {
        let subMenu = [];
        for(let j = 1; j<= subMenuItems.length; j++) {
            subMenu = [
                ...subMenu,
                (<DropdownItem key={j}>
                    {subMenuItems[j]}
                </DropdownItem>)
            ]
        }

        return (<Dropdown className="d-inline-block"
                          onMouseOver={this.onMouseEnter}
                          onMouseLeave={this.onMouseLeave}
                          isOpen={this.state.dropdownOpen}
                          toggle={this.toggle}>
        <DropdownToggle caret>{subMenuItems[0]}</DropdownToggle>
                <DropdownMenu>{subMenu}</DropdownMenu>
        </Dropdown>)
    }

    render() {
        const menuItems = [`Как это работает`, [`Пылесосы`, `Husky`, `Duovac`, `Soluvac`], `Аксесуары`, `Примеры расчетов`, `Сервис`, `Заказать расчет`, `Видео`, `Контакты`];
        return (
            <header >
                <nav>
                    {/*<Col md="1">*/}
                    {/*    <a href="/" className="logo">*/}
                    {/*        <img src="/img/logo.jpg" alt="centralvac"/>*/}
                    {/*    </a>*/}
                    {/*</Col>*/}
                    <Container>
                        <Row>

                            <Col md="12">
                                <ul className="nav">
                                    {this.createMenu(menuItems)}
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