import React, {Component} from 'react';


import './sass/main.scss';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import FirstSection from "./components/firstSection/firstSection";
import SecondSection from "./components/secondSection/secondSection";
import SideSocials from "./components/sideSocials/sideSocials";
import HowItWorks from "./components/howItWorks/howItWorks";
import ThirdSection from "./components/thirdSection/thirdSection";
import NumbersSection from "./components/numbersSection/numbersSection";
import ThesisSection from "./components/thesisSection/thesisSection";
import OurServices from "./components/ourServices/ourServices";
import OurConfidence from "./components/ourConfidence/ourConfidence";
import LineSection from "./components/lineSection/lineSection";
import HowSystemWorks from "./components/howSystemWorks/howSystemWorks";
import CalculationExample from "./components/calculationExample/calculationExample";
import {Col, Container, Row} from "reactstrap";

class App extends Component {
    render() {


        return (
            <div className="App" onScroll={this.detectHash}>
                {/*        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
                <Header />
                <main>
                    <FirstSection />
                    <NumbersSection />
                    <section className="company_section">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <h3>Компания «Интерконус Киев» с 2000 г. является региональным<br/>
                                        дистрибьютором встроенных пылесосов: HUSKY, DUOVAC, SOLUVAC в Украине.</h3>
                                    <p>На протяжении этого времени реализовано более 4000 проектов, в 52 городах Украины<br/>
                                        в тесной совместной работе не менее чем с 80-ю монтажными организациями.
                                    </p>
                                </Col>

                            </Row>
                        </Container>
                    </section>

                    <OurServices />

                    <HowItWorks/>
                    <SecondSection />
                    <ThirdSection/>

                    <ThesisSection {...{img: '/img/bg/Husky_aspirationPlancher_1.jpg', text: 'Вкладывая в встроенный пылесос, Вы вкладываете в свое здоровье и здоровье Ваших близких'}}/>

                    <LineSection />


                    <OurConfidence />


                    <CalculationExample />

                    <ThesisSection {...{img: '/img/bg/Husky_aspirationCanape_2.jpg', text: 'Центральный пылесос - повышает оценочную стоимость и престиж Вашей недвижимости'}}/>


                    <HowSystemWorks />
                </main>

                <Footer />
            </div>
    );
    }
}

export default App;

