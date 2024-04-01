import NavigationBar from '../components/navbar.jsx';
import Hero from '../components/portfolio-hero.jsx';
import Portfolio from '../components/portfolio-list.jsx';
import Contact from '../components/contact-us.jsx';
import Footer from '../components/footer-2.jsx';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
import '../custom.scss';
