import { useState } from "react";
import NavigationBar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
