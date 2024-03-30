import '../style/services.css';
import tmekar from '../assets/tmekar.png';
import artha from '../assets/artha.png';
import kopi from '../assets/kopi.png';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

const componentsAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const servicesProvided = [
  {
    id: 1,
    image: tmekar,
    name: 'Timbul Mekar',
  },
  {
    id: 2,
    image: artha,
    name: 'Bali Artha Jaya',
  },
  {
    id: 3,
    image: kopi,
    name: 'Kopi Gunung Sari',
  },
];

export default function Services() {
  return (
    <>
      <div id="our-services" className="container services d-flex flex-column">
        <motion.div
          variants={componentsAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="services-copy"
        >
          <h1 className="services-header text-secondary">Recent Projects</h1>
          <p className="services-desc text-secondary">
            Browse through our portfolio of completed projects.
          </p>
        </motion.div>
        <div className="services-card d-flex flex-row pb-5">
          {servicesProvided.map((service, index) => (
            <motion.div
              variants={componentsAnimation}
              initial="initial"
              whileInView="animate"
              key={index}
              viewport={{ once: true }}
              transition={{ delay: 0.4 * index }}
              className="cards"
            >
              <h2 className="headers text-secondary">{service.name}</h2>
              <img src={service.image} />
            </motion.div>
          ))}
        </div>
        <Button
          href="/portfolio"
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="m-auto"
          style={{ width: 232 }}
        >
          View Our Works
        </Button>
      </div>
    </>
  );
}
