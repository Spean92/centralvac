import React, {Component} from 'react'

import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import './styles.scss'
class ModalAccessory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    renderCharacteristics(characteristics) {
        let innerTable;
        innerTable = characteristics.map((value) => {
            return (<tr key={value.id}><td>{value.title}</td><td>{value.value}</td></tr>)
        });

        return (<Table><tbody>{innerTable}</tbody></Table>)
    }

    render() {
        if (this.state.modal && this.props.accessory) {
            const {title, description_title, description, characteristics, image, link} = this.props.accessory;
            return (
                <div className="modal-item">
                    <Modal isOpen={this.state.modal}
                           toggle={this.toggleModal}
                           className="accessory_modal"
                    >
                        <ModalHeader toggle={this.toggleModal}>{title && title}</ModalHeader>
                        <ModalBody>
                            <div className="modal_wrapper">
                                <div className="block1">
                                    <img className="image" src={image} alt={title} />
                                </div>
                                <div className="block2">
                                    <div className="description">
                                        <h5>{description_title && description_title}</h5>
                                        <p>{description && description}</p>
                                    </div>
                                    <div className="characteristics">
                                        {characteristics && this.renderCharacteristics(characteristics)}
                                    </div>
                                </div>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <a className="where-to-buy" id="skuLinkModal" href={link}>
                                <span>Где купить</span>
                            </a>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        } else {
            return (
                <div className="modal-item">
                    <Modal isOpen={this.state.modal}
                           toggle={this.toggleModal}
                    >
                        <ModalHeader toggle={this.toggle}>По данной моделе нету данных</ModalHeader>
                    </Modal>
                </div>
            )
        }
    }
}
export default ModalAccessory;