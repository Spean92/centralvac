import React, {Component} from 'react'

import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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

    renderAdvantages(advantages){
        return advantages.map((value) => {
            return (
                <li key={value.id}>{value.text}</li>
            )
        })
    }
    renderCharacteristics(characteristics) {
        let innerTable;
        innerTable = characteristics.map((value) => {
            return (<tr key={value.id}><td>{value.title}</td><td>{value.value}</td></tr>)
        });

        return (<Table><tbody>{innerTable}</tbody></Table>)
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
                                <iframe src={file} frameBorder="0"/>
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