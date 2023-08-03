import './App.css';
import About from './components/About';
import Consult from './components/Consult';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Figures from './components/Figures';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';

function App() {
  document.body.style.overflowX = "hidden";
  return (
    <>
      <NavBar />
      <Hero />
      <Content1 />
      <Content2 />
      <Figures />
      <About />
      <Testimonials />
      <Consult />
      <Footer />
    </>
  );
}

export default App;
