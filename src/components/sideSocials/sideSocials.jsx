import React, {Component} from 'react';
import './styles.scss'
import { SocialIcon } from 'react-social-icons';



class SideSocials extends Component{

    render() {
        return (
            <div className="social-wrapper">
                <div>
                    <SocialIcon target="_blank" url="https://www.facebook.com/centralvac.shop/" style={{ height: 30, width: 30 }}/>
                </div>
                <div>
                    <SocialIcon target="_blank" url="https://www.youtube.com/channel/UCHa08DiQokwW1RXlGElA4jw?view_as=subscribert" style={{ height: 30, width: 30 }}/>
                </div>
                <div>
                    <SocialIcon target="_blank" url="https://www.instagram.com/interkonuskiev/" style={{ height: 30, width: 30 }} />
                </div>
            </div>
        )
    }
}
export default SideSocials;