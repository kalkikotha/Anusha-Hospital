import './App.css';
import Topbar from './components/Topbar';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import Hero from './components/Hero'
function App() {
  return (
    <div className="App">
      <Topbar />
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Appointment />
      <Testimonials />
      <Gallery />
      <Contact />
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
