import React, {Component} from 'react'
import './styles.scss'
import {Col, Row, Collapse} from "reactstrap";


class ListComponent extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({collapse: !state.collapse}))
    }


    render() {
        const tempImg = `https://via.placeholder.com/150x150`;
        const {text} = this.props;
        return (
            <Row className="bottom-align">
                {text.map((val, index) => {
                    return (<Col md={2} key={index}>
                        <div className="item-wrapper">
                            <div className="itemText">{val}</div>
                            <img className="previewImg" src={tempImg} alt="alt"/>
                        </div>
                    </Col>)
                })}
                <Col md={12} >
                    <Collapse isOpen={this.state.collapse}>
                        <div className="collapse-img">
                            <img src={tempImg} alt="alt"/>
                            <img src={tempImg} alt="alt"/>
                            <img src={tempImg} alt="alt"/>
                            <img src={tempImg} alt="alt"/>
                            <img src={tempImg} alt="alt"/>
                            <img src={tempImg} alt="alt"/>
                        </div>
                    </Collapse>

                </Col>
            </Row>

        )
    }

}
export default ListComponent;