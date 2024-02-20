import NavigationBar from '../components/navbar-light.jsx';
import Services from '../components/service-services1.jsx';
import Footer from '../components/footer.jsx';
import Hero from '../components/service-hero.jsx';
import Contact from '../components/contact-us.jsx';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
import '../custom.scss';
