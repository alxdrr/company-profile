import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "../style/about.css";
import image from "../assets/about.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div id="about-us" className="about bg-light">
        <motion.div layout transition={{ duration: 1 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="copy">
          <h1 className="about-header text-dark">Unlock Your Development Potential with Us</h1>
          <p className="about-desc text-dark">
            At our software house, we offer a range of services in web, mobile, and system development. With our expertise and dedication, we provide tailored solutions to meet your unique needs and help you achieve your goals.
          </p>
          <Button variant="primary">Contact Us</Button>{" "}
        </motion.div>
        <motion.img layout transition={{ duration: 1 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-image" src={image} alt="" />
      </div>
    </>
  );
}
