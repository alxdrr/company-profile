import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "../style/services.css";
import web from "../assets/icons/desktop.svg";
import mobile from "../assets/icons/mobile.svg";
import cpu from "../assets/icons/CPU.svg";
import right from "../assets/icons/right.svg";
import { motion } from "framer-motion";

const componentsAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  initial2: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
  viewport: {
    once: true,
  },
};

export default function Services() {
  return (
    <>
      <div className="services d-flex flex-column">
        <motion.div variants={componentsAnimation} initial="initial2" whileInView="animate" viewport={{ once: true }} className="services-copy">
          <h1 className="services-header text-secondary">Our Services</h1>
          <p className="services-desc text-secondary">We offer comprehensive web, mobile, and system development services.</p>
        </motion.div>
        <motion.div variants={componentsAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} className="services-card">
          <div className="cards">
            <div className="cards-header">
              <img src={web} alt="" />
              <h2 className="headers text-primary">Web Development</h2>
            </div>
            <p className="card-desc">With a website, your business could be improved by having a stronger brand-awareness, reaching more market like never before.</p>
            <button className="btn-services">
              Learn More <img src={right} alt="" />
            </button>
          </div>
          <div className="cards">
            <div className="cards-header">
              <img src={mobile} alt="" />
              <h2 className="headers text-primary">Mobile Development</h2>
            </div>
            <p className="card-desc">With an app, your business could be enabled and scaled infinitely as onboarding customers via app is much more scalable.</p>
            <button className="btn-services">
              Learn More <img src={right} alt="" />
            </button>
          </div>
          <div className="cards">
            <div className="cards-header">
              <img src={cpu} alt="" />
              <h2 className="headers text-primary">System Development</h2>
            </div>
            <p className="card-desc">With a system, your business processes could be automated and streamlined, resulting in a reduced cost, and higher net-profits.</p>
            <button className="btn-services">
              Learn More <img src={right} alt="" />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
