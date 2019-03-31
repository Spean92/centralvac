import React, {Component} from 'react';
import './header.scss';


class Header extends Component {
    render() {
        return (
            <header>
                <nav className="container">
                    <ul className="nav">
                        <li><a href="#section1">Секция 1</a></li>
                        <li><a href="#section2">Секция 2</a></li>
                        <li><a href="#section3">Секция 3</a></li>
                        <li><a href="#section4">Секция 4</a></li>
                        <li><a href="#section5">Секция 5</a></li>
                        <li><a href="#section6">Секция 6</a></li>
                    </ul>
                </nav>
            </header>
        )
    }

}
export default Header;