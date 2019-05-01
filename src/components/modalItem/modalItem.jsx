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
            const {title, description_title, description, advantages, characteristics, image, link} = this.props.sku;
            return (
                <div className="modal-item">
                    <Modal isOpen={this.state.modal}
                           toggle={this.toggleModal}
                           className="big_modal"
                    >
                        <ModalHeader toggle={this.toggleModal}>{title && title}</ModalHeader>
                        <ModalBody>
                            <div className="block1">
                                <div className="description">
                                    <h5>{description_title && description_title}</h5>
                                    <p>{description && description}</p>
                                </div>

                                <div className="advantages">
                                    <ul>
                                        {advantages && this.renderAdvantages(advantages)}
                                    </ul>
                                </div>
                            </div>

                            <div className="block2">
                                <img className="image" src={image} alt={title} />

                                <div className="characteristics">
                                    {characteristics && this.renderCharacteristics(characteristics)}
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
export default ModalItem;