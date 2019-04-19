import React, {Component} from 'react';
import './styles.scss'

class ThesisSection extends Component{

    render() {
        const {img, text} = this.props;
        return (
            <section className="thesis_section">
                <div className="bg" style={{backgroundImage: `url(${img})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="thesis">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default ThesisSection;