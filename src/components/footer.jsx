import '../style/footer.css';
import igLogo from '../assets/igLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import brand from '../assets/logo.svg';
import ornament from '../assets/ornament.svg';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      <div className="footer bg-dark">
        <div className="element">
          <div className="links">
            <div className="social d-flex flex-column">
              <h2 className="text-primary navigator">Follow Us</h2>
              <div className="icon d-flex">
                <a
                  href="http://www.instagram.com/koribarak.technology"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={igLogo} alt="instagram logo" />
                </a>
                <a
                  href="http://www.linkedin.com/company/koribarak-tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinLogo} alt="linkedin logo" />
                </a>
              </div>
            </div>
            <div className="explore">
              <h2 className="text-primary navigator">Explore</h2>
              <div className="direct d-flex flex-column">
                <a href="" className="text-light direct">
                  About Us
                </a>
                <a href="" className="text-light direct">
                  Services
                </a>
                <a href="" className="text-light direct">
                  FAQ
                </a>
              </div>
            </div>
            <div className="contacts">
              <h2 className="text-primary navigator">Contact Us</h2>
              <div className="direct d-flex flex-column">
                <a href="" className="text-light contact">
                  +62 821-3875-4680
                </a>
                <a href="" className="text-light contact">
                  koribaraktechnology@gmail.com
                </a>
              </div>
            </div>
            <div className="address">
              <h2 className="text-primary navigator">Address</h2>
              <div className="direct">
                <a href="" className="text-light office">
                  Jl. Ir. Sutami, Kemenuh, Kabupaten Gianyar, Bali
                </a>
              </div>
            </div>
          </div>
          <div className="brand">
            <h2 className="tag ">Digital Dreams, Real Results</h2>
            <a href="https://www.koribaraktechnology.com">
              <img className="brand-logo" src={brand} alt="Brand" />
            </a>
          </div>
          <img className="footer-ornament" src={ornament} alt="" />
        </div>
        <motion.div
          animate={{
            width: ['80%', '100%', '80%'],
          }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="divider-line"
        ></motion.div>
        <p className="copyright text-light">
          © 2024 Kori Barak Technology, All Rights Reserved.
        </p>
      </div>
    </>
  );
}
