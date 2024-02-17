import { Button, Stack } from 'react-bootstrap';
import '../style/about.css';
import imageWeb from '../assets/web-asset.svg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <div id="about-us" className=" container d-flex about bg-light">
        <motion.div
          layout
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-copy"
        >
          <h1 className="about-header text-dark">Website Development</h1>
          <p className="about-desc text-dark">
            Elevate your online presence with our bespoke web development
            solutions. Our team of expert developers crafts visually stunning
            and user-friendly websites tailored to your unique business needs.
            From responsive designs to seamless user experiences, we ensure that
            your website stands out in the digital landscape.
          </p>
          <Stack gap={3}>
            <h2 className="heading-2 text-primary">
              Highlight Features
            </h2>
            <Stack
              gap={3}
              direction="horizontal"
              className="justify-conter-center"
            >
              <i
                className="fa-solid fa-user fa-2xl"
                style={{ color: '#D64923' }}
              ></i>
              <p className="about-desc mb-0">User Friendly</p>
            </Stack>
            <Stack
              gap={3}
              direction="horizontal"
              className="justify-conter-center"
            >
              <i
                className="fa-brands fa-searchengin fa-2xl"
                style={{ color: '#D64923' }}
              ></i>
              <p className="about-desc mb-0">SEO Optimizaion</p>
            </Stack>
          </Stack>
          <Button
            href="https://wa.me/6282138754680"
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Contact Us
          </Button>{' '}
        </motion.div>
        <motion.img
          fluid
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-image"
          src={imageWeb}
          alt=""
        />
      </div>
    </>
  );
}
