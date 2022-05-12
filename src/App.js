import './App.css';
import About from './Components/About/About';
import Achivement from './Components/Achivement/Achivement';
import Blog from './Components/blog/Blog';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import LandSection from './Components/Land Section/LandSection';
import NavbarSection from './Components/Navbar/NavbarSection';
import Team from './Components/our team/Team';
import Services from './Components/services/Services';

function App() {
  return (
    <div className="App">
     <NavbarSection/>
     <LandSection/>
     <About/>
     <Services/>
     <Achivement/>
     <Team/>
     <Blog/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
