import { useState } from "react";
import NavigationBar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
