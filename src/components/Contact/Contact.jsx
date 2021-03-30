import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contacto" />
        <Fade bottom duration={1000} delay={400} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
          {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div> */}
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
