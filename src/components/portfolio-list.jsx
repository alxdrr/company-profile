import { motion } from 'framer-motion';
import project1 from '../assets/portfolio/tmekar.png';
import project2 from '../assets/portfolio/elitesBible.svg';
import project3 from '../assets/portfolio/helicam.svg';
import project4 from '../assets/portfolio/koribarakFilms.svg';
import project5 from '../assets/portfolio/artha.png';

const cardStyle = {
  width: '45%',
  flex: '1 300px',
  height: '50%',
  margin: '32px',
};
const copyStyle = {
  height: 'auto',
  flex: '1 300px',
  width: '30%',
  margin: '32px',
};

export default function Portfolio() {
  return (
    <div
      id="our-services"
      className="container services d-flex flex-column p-5"
    >
      <div className="d-flex flex-wrap flex-row justify-content-between align-items-center py-5">
        <motion.div
          initial={{ background: 'rgba(231, 57, 0, 0)' }}
          whileHover={{
            background: 'rgba(231, 57, 0, 0.7)',
          }}
          style={cardStyle}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Timbul Mekar</h2>
          <img style={{ width: '70%' }} src={project1} />
          <h2 className="project-type text-white">Web Company</h2>
        </motion.div>
        <motion.div
          className="px-5 portfolio-text display-4 d-flex align-items-center text-primary"
          style={copyStyle}
        >
          behold the convergence of artistry and technology
        </motion.div>
      </div>
      <div className="d-flex flex-wrap flex-row justify-content-between align-items-center py-5">
        <motion.div
          initial={{ background: 'rgba(231, 57, 0, 0)' }}
          whileHover={{
            background: 'rgba(231, 57, 0, 0.7)',
          }}
          style={{}}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Elites Bible</h2>
          <img style={{ width: '70%' }} src={project2} />
          <h2 className="text-white project-type">Web Application</h2>
        </motion.div>
        <motion.div
          initial={{ background: 'rgba(231, 57, 0, 0)' }}
          whileHover={{
            background: 'rgba(231, 57, 0, 0.7)',
          }}
          style={cardStyle}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Helicam</h2>
          <img style={{ width: '70%' }} src={project3} />
          <h2 className="text-white project-type">Web Application</h2>
        </motion.div>
      </div>
      <div className="d-flex flex-wrap flex-row justify-content-between align-items-center py-5">
        <motion.div
          className="text-primary display-4 text-center"
          style={{ width: '100%' }}
        >
          digital dreams, real result
        </motion.div>
      </div>
      <div className="d-flex flex-wrap flex-row justify-content-between align-items-center py-5">
        <motion.div
          initial={{ background: 'rgba(231, 57, 0, 0)' }}
          whileHover={{
            background: 'rgba(231, 57, 0, 0.7)',
          }}
          style={{ width: '100%', height: '60vh' }}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Kori Barak Films</h2>
          <img style={{ height: 'auto' }} src={project4} />
          <h2 className="text-white project-type">Website Company</h2>
        </motion.div>
      </div>
      <div className="d-flex flex-wrap flex-row justify-content-between align-items-center py-5">
        <motion.div
          className="text-primary display-4 d-flex align-items-center"
          style={copyStyle}
        >
          embody creativity, functionality, and excellence
        </motion.div>
        <motion.div
          initial={{ background: 'rgba(231, 57, 0, 0)' }}
          whileHover={{
            background: 'rgba(231, 57, 0, 0.7)',
          }}
          style={cardStyle}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Bali Artha Jaya</h2>
          <img style={{ width: '70%' }} src={project5} />
          <h2 className="text-white project-type">E-Commerce Web</h2>
        </motion.div>
      </div>
    </div>
  );
}
