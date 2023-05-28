import './App.css';
import Navbar from '../src/Components/Page components/Navbar/Navbar'
import Header from '../src/Components/Page components/Header/Header'
import About from '../src/Components/Page components/About/About'
import Services from './Components/Page components/Services /Services'
import Team from './Components/Page components/Team/Team'
import Contact from './Components/Page components/Contact/Contact'
import Footer from './Components/Page components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
