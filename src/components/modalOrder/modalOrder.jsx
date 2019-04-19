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
                        <Form>
                            <FormGroup>
                                <Label for="exampleName">Имя</Label>
                                <Input type="text" name="name" id="exampleName" placeholder="Введите ваше Имя" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Введите ваш email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Выберите что-то</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Напишите описание</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Прикрепите файл</Label>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Краткое описание требований по файлу
                                </FormText>
                            </FormGroup>
                        </Form>
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