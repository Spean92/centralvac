import React, {Component} from 'react';
import './header.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';
import SideSocials from "../sideSocials/sideSocials";


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: ``,
            dropdownOpen: false,
            mobileMenu: false

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
        for (let i = 0; i < menuItems.length; i++) {
            menu = [
                ...menu,
                (<li key={i} className="oneMenuItem">
                    {Array.isArray(menuItems[i]) ?
                        <a className={(this.state.hash === `#section${i+1}` ? `active` : null)}
                           href={`#section${i+1}`}>
                            {this.createDropDown(menuItems[i])}
                        </a>
                         :
                        <a className={`menu-item ` + (this.state.hash === `#section${i+1}` ? `active` : null)}
                           href={`#section${i+1}`}>
                            {menuItems[i]}
                        </a>
                        }

                </li>)
            ]
        }
        return menu
    };
    createDropDown(subMenuItems) {
        let subMenu = [];
        for(let j = 1; j< subMenuItems.length; j++) {
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
    menuToggle(){
        this.setState(prevState => ({
            mobileMenu: !prevState.mobileMenu
        }))
    }
    render() {
        const menuItems = [
            `Главная`,
            `Услуги`,
            `Cервис`,
            `Агрегаты`,
            `Аксессуары`,
            `Стоимость`,
            `Контакты`
        ];
        return (
            <header >
                <div className={`menu__burger ${this.state.mobileMenu ? "active" : ""}`} onClick={e => this.menuToggle()}/>
                <nav className={`${this.state.mobileMenu ? "active" : ""}`}>
                <a href="/" className="logo">
                    <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2F80ED" d="M0 0h26v26H0z"/><path fill="#fff" d="M11 5h4v16h-4z"/><path fill="#fff" d="M8 5h10v4H8zM8 17h10v4H8z"/></svg>
                </a>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <ul className="nav">
                                    {this.createMenu(menuItems)}
                                </ul>
                            </Col>
                        </Row>

                    </Container>

                <SideSocials />
                </nav>
            </header>
        )
    }

}
export default Header;