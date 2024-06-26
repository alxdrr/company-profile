import NavigationBar from '../components/navbar.jsx';
import Hero from '../components/hero.jsx';
import About from '../components/about.jsx';
import Services from '../components/services.jsx';
import Contact from '../components/contact-us.jsx';
import Portfolio from '../components/portfolio.jsx';
import Footer from '../components/footer-2.jsx';
import Faq from '../components/faq.jsx';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
import '../custom.scss';
