import React, {Component} from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import './styles.scss'
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
class ModalOrder extends Component{
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
            <div className="lol">
                <Modal isOpen={this.state.modal}
                       toggle={this.toggleModal}
                       className="normal_modal"
                >
                    <ModalHeader toggle={this.toggle}>Оставьте свои данные</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Отправить</Button>
                        {/*<Button color="secondary" onClick={this.toggle}>Тестовая кнопка</Button>*/}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalOrder;