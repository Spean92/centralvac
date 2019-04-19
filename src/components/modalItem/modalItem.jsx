import React, {Component} from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
        if(!this.props.show) {
        }
        return (
            <div className="modal-item">
                <Modal isOpen={this.state.modal}
                       toggle={this.toggleModal}
                       className="big_modal"
                >
                    <ModalHeader toggle={this.toggle}>Модель товара</ModalHeader>
                    <ModalBody>
                        <iframe title="Модель товара" src="/files/husky_flex.pdf" frameborder="0" height="100%" width="100%">

                        </iframe>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}> Где купить</Button>
                        {/*<Button color="secondary" onClick={this.toggle}>Тестовая кнопка</Button>*/}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalItem;