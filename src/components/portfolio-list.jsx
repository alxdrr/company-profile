import { motion } from 'framer-motion';
import project1 from '../assets/portfolio/tmekar.png';
import project2 from '../assets/portfolio/elitesBible.svg';
import project3 from '../assets/portfolio/helicam.svg';
import project4 from '../assets/portfolio/koribarakFilms.svg';
import project5 from '../assets/portfolio/artha.png';

const cardStyle = { width: '45%', height: '50vh' };
const copyStyle = { height: '50vh', width: '30%' };

export default function Portfolio() {
  return (
    <div
      id="our-services"
      className="container services d-flex flex-column p-5"
    >
      <div className="services-card d-flex flex-row justify-content-between align-items-center py-5">
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
          <img src={project1} />
          <h2 className="text-white">Web Company</h2>
        </motion.div>
        <motion.div
          className="text-primary display-4 d-flex align-items-center"
          style={copyStyle}
        >
          behold the convergence of artistry and technology
        </motion.div>
      </div>
      <div className="services-card d-flex flex-row justify-content-between align-items-center py-5">
        <motion.div
          initial={{ background: 'rgba(231, 57, 0, 0)' }}
          whileHover={{
            background: 'rgba(231, 57, 0, 0.7)',
          }}
          style={cardStyle}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Elites Bible</h2>
          <img src={project2} />
          <h2 className="text-white">Web Application</h2>
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
          <img src={project3} />
          <h2 className="text-white">Web Application</h2>
        </motion.div>
      </div>
      <div className="services-card d-flex flex-row justify-content-between align-items-center py-5">
        <motion.div
          className="text-primary display-4 d-flex"
          style={{ width: '100%' }}
        >
          behold the convergence of artistry and technology
        </motion.div>
      </div>
      <div className="services-card d-flex flex-row justify-content-between align-items-center py-5">
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
          <img src={project4} />
          <h2 className="text-white">Website Company</h2>
        </motion.div>
      </div>
      <div className="services-card d-flex flex-row justify-content-between align-items-center py-5">
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
            '& h2:first-child': {
              // Menggunakan "&" untuk menunjukkan selector CSS di dalam properti whileHover
              background: 'white !important',
            },
          }}
          style={cardStyle}
          className="cards"
          transition={{ duration: '0.2' }}
        >
          <h2 className="text-secondary">Bali Artha Jaya</h2>
          <img src={project5} />
          <h2 className="text-white">E-Commerce Web</h2>
        </motion.div>
      </div>
    </div>
  );
}
