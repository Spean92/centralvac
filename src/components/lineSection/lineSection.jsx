import React, { Component } from "react"
import "./styles.scss"
import ScrollableAnchor from "react-scrollable-anchor";
import ModalOrder from "../modalOrder/modalOrder";

class LineSection extends Component{
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);

    }
    toggleModal() {
        this.modal.toggleModal();
    };

    render() {
        return(
            <ScrollableAnchor id={'section6'}>
                <section className="six_section">
                    <ModalOrder  ref={(ref) => {
                        this.modal = ref
                    }}/>
                    <div className="line">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 style={{color: `#ffffff`}}
                                        className="vc_custom_heading m-b-none m-t-sm align-left">
                                        Вы хотите знать сколько стоит центральный пылесос в ваш дом?

                                    </h2>
                                    <p style={{fontSize: `17px`}}
                                       className="vc_custom_heading lead align-left">Закажите расчет стоимости
                                        встроенного пылесоса
                                        ответив всего на несколько вопросов</p>
                                </div>


                                <div className="order" onClick={this.toggleModal}><span>Заказать расчет</span></div>
                            </div>
                        </div>
                    </div>

                </section>
            </ScrollableAnchor>
        )
    }
}
export default LineSection;