import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';
import SideSocials from "../sideSocials/sideSocials";
import './header.scss';
import logo from '../../images/logo.jpg'

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
        return menuItems.map((item, i) => {
            return <li key={i} className="oneMenuItem">
                    <a className={`menu-item ` + (this.state.hash === item.link ? `active` : null)}
                       href={item.link}>
                        {item.title}
                    </a>
            </li>
        });
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
            {
                title:`Главная`,
                link  : `/`
            },
            {
                title :`Услуги`,
                link  : `#services`
            },
            {
                title :`Cервис`,
                link  : `#service`
            },
            {
                title :`Агрегаты`,
                link  : `#hoovers`
            },
            {
                title :`Аксессуары`,
                link  : `#accessories`
            },
            {
                title :`Стоимость`,
                link  : `#cost`
            },
            {
                title :`Контакты`,
                link  : `#contacts`
            }];
        return (
            <header >
                <div className={`menu__burger ${this.state.mobileMenu ? "active" : ""}`} onClick={e => this.menuToggle()}/>
                <nav className={`${this.state.mobileMenu ? "active" : ""}`}>
                <a href="/" className="logo">
                    {/*<img src={logo} alt="Встроенные пылесосы"/>*/}
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