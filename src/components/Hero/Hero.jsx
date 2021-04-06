import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom, Bounce } from 'react-reveal';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, sub1, sub2, sub3, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1 className="hero-title">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            {title}
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
            <span className="text-color-main">{name}</span>
          </Fade>

          <br />
          {isDesktop ? (
            <Zoom right cascade>
              {subtitle}
            </Zoom>
          ) : (
            <>
              <Zoom right cascade>
                {sub1}
              </Zoom>
              <Zoom right cascade>
                {sub2}
              </Zoom>
              <Zoom right cascade>
                {sub3}
              </Zoom>
            </>
          )}
        </h1>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
