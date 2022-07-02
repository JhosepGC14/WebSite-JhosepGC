import React from "react";

//styles
import styles from "./section.education.module.css";

const SectionEducation = () => {
  return (
    <section id="education" className={styles.container_section}>
      {/* MI EDUCACION  */}
      <div className={styles.section_education}>
        <div>
          <h4>LINEA DE TIEMPO DE</h4>
          <h2>MI EDUCACIÓN</h2>
        </div>
        <div className={styles.container_box_education}>
          <div className={styles.container_educaction}>
            <div className={styles.oval}>
              <img src="./img/img-educacion.svg" alt="" />
            </div>
            <div className={styles.text_education}>
              <div className={styles.card_education}>
                <div className={styles.circle1}></div>
                <h5>Universidad Tecnologica del Perú</h5>
                <p>
                  Estudiando la carrera de Ingenieria de Sistemas e Informatica
                  - Cursando el Ciclo II.
                </p>
                <span>Ciclo de tiempo:</span>
                <p className={styles.fecha}>2019 - Actualidad</p>
              </div>
              <div className={styles.card_education}>
                <div className={styles.circle2}></div>
                <h5>Instituto TECSUP</h5>
                <p>
                  Estudiando el Curso de Desarrollo Web con Python y Javascript
                  (Full-Stack) en el cual he obtenido conocimientos en las Áreas
                  de Front-End, Back-End y en Metodologías Agiles con SCRUM.
                </p>
                <span>Ciclo de tiempo:</span>
                <p className={styles.fecha}>Octubre 2019 - Junio 2020</p>
              </div>
              <div className={styles.card_education}>
                <div className={styles.circle3}></div>
                <h5>Universidad Privada del Norte</h5>
                <p>
                  Carrera de Ingenieria de Sistemas Computacionales, cursado
                  hasta el Ciclo VI.
                </p>
                <span>Ciclo de tiempo:</span>
                <p className={styles.fecha}>2015 - 2018</p>
              </div>
              {/* <div className={styles.show_more}>
                <a href="">Mostrar más</a>
                <img src="./img/icons/shape.svg" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEducation;
