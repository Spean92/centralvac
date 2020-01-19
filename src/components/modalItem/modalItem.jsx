import React, {Component} from 'react'

import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './styles.scss'

class ModalItem extends Component{
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
    render() {
        if (this.state.modal && this.props.sku) {
            const {title, file, link} = this.props.sku;
            return (
                <div className="modal-item">
                    <Modal isOpen={this.state.modal}
                           toggle={this.toggleModal}
                           className="absolute_modal"
                    >
                        {title &&
                        <ModalHeader toggle={this.toggleModal}>{title}</ModalHeader>
                        }
                        <ModalBody>
                            <div className="block">
                                <iframe src={file} frameBorder="0" title={title ? title : 'sku'}/>
                            </div>
                        </ModalBody>
                        {link &&
                        <ModalFooter>
                            <a className="where-to-buy" id="skuLinkModal" href={link}>
                                <span>Где купить</span>
                            </a>
                        </ModalFooter>
                        }
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
export default ModalItem;