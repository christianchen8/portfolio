import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import style from './Navbar.module.css';

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     document.getElementById('navbar').style.backgroundColor = 'black';
//     document.getElementById('navbar').style.height = '8vh';
//   } else {
//     document.getElementById('navbar').style.backgroundColor = '';
//   }
// }

// window.onscroll = function () {
//   scrollFunction();
// };

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
  console.log(style.menuToggle);

  return (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <div className={style.menuToggle}>
        <input
          type="checkbox"
          checked={open}
          onClick={() => {
            setOpen(!open);
          }}
        />

        <span />
        <span />
        <span />

        <ul className={style.menu}>
          <Link
            to="hero"
            smooth
            duration={1000}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Home</li>
          </Link>

          <Link
            to="about"
            smooth
            duration={1000}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Sobre Mí</li>
          </Link>
          <Link
            to="projects"
            smooth
            duration={1000}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Proyectos</li>
          </Link>
          <Link
            to="contact"
            smooth
            duration={1000}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
    </Fade>
  );
};

export default Navbar;
