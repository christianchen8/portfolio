import React from 'react';
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
  return (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <div className={style.menuToggle}>
        <input type="checkbox" />

        <span />
        <span />
        <span />

        <ul className={style.menu}>
          <a href="#hero">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>Sobre Mí</li>
          </a>
          <a href="#projects">
            <li>Proyectos</li>
          </a>
          <a href="#contact">
            <li>Contacto</li>
          </a>
        </ul>
      </div>
    </Fade>
  );
};

export default Navbar;
