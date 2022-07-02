import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container__nav}>
        <div className={styles.container__logo}>
          <img className={styles.logo_img} src="/img/logo.svg" alt="" />
          <ul>
            <li>
              <a href="#init">Inicio</a>
            </li>
            <li>
              <a href="#aboutme">Acerca de mi</a>
            </li>
            <li>
              <a href="#skills">Mis Skills</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#education">Educacion</a>
            </li>
          </ul>
        </div>
        {/* <div className={styles.container__diurno}>
          <span>Modo diurno</span>
          <button className="dark_version" id="switch">
            <span className="item_light">
              <i className="far fa-sun"></i>
            </span>
            <span className="item_dark">
              <i className="far fa-moon"></i>
            </span>
          </button>
        </div> */}
        <button className={styles.btn_menu} data-pushbar-target="pushbar-menu">
          <img src="/img/icons/bars.svg" alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
