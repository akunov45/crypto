import './App.css';
import Benefits from './components/benefits/benefits';
import Header from './components/header';
import SectionFour from './components/section-four/section-four';
import SectionTwo from './components/section-two/section-two';
import Implementation from './components/implementation';

function App() {
    return (
        <>
            <Header />
            <SectionTwo />
            <Benefits />
            <SectionFour />
            <Implementation />
        </>
    );
}

export default App;
