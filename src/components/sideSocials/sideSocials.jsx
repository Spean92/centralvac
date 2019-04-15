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
                    <SocialIcon target="_blank" url="https://www.facebook.com/centralvac.shop/" />
                </div>
                <div>
                    <SocialIcon target="_blank" url="https://www.youtube.com/channel/UCHa08DiQokwW1RXlGElA4jw?view_as=subscribert" />
                </div>
                <div>
                    <SocialIcon target="_blank" url="https://www.instagram.com/interkonuskiev/" />
                </div>
            </div>
        )
    }
}
export default SideSocials;