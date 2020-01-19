import React, {Component} from 'react';


import './sass/main.scss';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import FirstSection from "./components/firstSection/firstSection";
import SecondSection from "./components/secondSection/secondSection";
import HowItWorks from "./components/howItWorks/howItWorks";
import ThirdSection from "./components/thirdSection/thirdSection";
import NumbersSection from "./components/numbersSection/numbersSection";
import OurServices from "./components/ourServices/ourServices";
import OurConfidence from "./components/ourConfidence/ourConfidence";
import LineSection from "./components/lineSection/lineSection";
import CalculationExample from "./components/calculationExample/calculationExample";
import Advantages from "./components/advantages/advantages";
import FeedbackForm from "./components/feedbackForm/feedbackForm";

class App extends Component {
    render() {


        return (
            <div className="App" onScroll={this.detectHash}>
                <Header />
                <main>
                    <FirstSection />
                    <NumbersSection />
                    <OurServices />
                    <HowItWorks/>
                    <Advantages/>
                    <SecondSection />
                    <ThirdSection/>
                    <LineSection />
                    <CalculationExample />

                    <OurConfidence />

                    <FeedbackForm/>
                </main>

                <Footer />
            </div>
        );
    }
}

export default App;

