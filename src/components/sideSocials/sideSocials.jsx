import React, {Component} from 'react';
import './styles.scss'
import { SocialIcon } from 'react-social-icons';



class SideSocials extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social-wrapper">
                <div>
                    <SocialIcon target="_blank" url="https://facebook.com/jaketrent" />
                </div>
                <div>
                    <SocialIcon target="_blank" url="https://instagram.com/jaketrent" />
                </div>
                <div>
                    <SocialIcon target="_blank" url="https://twitter.com/jaketrent" />
                </div>
            </div>
        )
    }
}
export default SideSocials;