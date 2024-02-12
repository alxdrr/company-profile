import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "../style/hero.css";
import ornament from "../assets/ornament.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="Hero bg-secondary">
        <motion.div layout transition={{ duration: 1, type: "spring", bounce: 0.5 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="copy">
          <div className="header">
            <h1 className="hero-header text-primary">Inspiring</h1>
            <h1 className="hero-header text-light">Digital Innovation</h1>
          </div>
          <p className="hero-desc text-light">
            Welcome to Kori Barak Tech, the Innovative Software House to Bring Your Ideas to Life. We are your trusted partner in web, mobile, and software development. With a strong track record and a history of successful projects, we are
            ready to help turn any concept into a robust technological solution.
          </p>
          <Button variant="primary">Consult with our expert for free</Button>{" "}
        </motion.div>
        <img className="hero-ornament" src={ornament} alt="" />
      </div>
    </>
  );
}