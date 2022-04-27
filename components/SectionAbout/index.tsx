import React, { useState } from "react";
import { calculateAge } from "../../utilities/getAge";
import { itemsInterestArray } from "../../utilities/itemsInterest";
import ItemInterest from "../ItemInterest";
import ButtonPrimary from "../shared/ButtonPrimary";
import styles from "./sectionAbout.module.css";

const SectionAbout = () => {
  const age = calculateAge("14/07/1998");
  const [itemsInterest] = useState(itemsInterestArray);

  return (
    <section className={styles.section_aboutme} id="aboutme">
      <div className={styles.container_aboutme}>
        <div className={styles.aboutme__text}>
          <h4 className="wow animate__animated animate__fadeInLeft">TODO</h4>
          <h2 className="wow animate__animated animate__fadeInLeft">
            ACERCA DE MI
          </h2>
          <p className="wow animate__animated animate__zoomIn animate__slow">
            <strong>Hola Soy Jhosep Guadalupe,</strong> Desarrollador Frontend
            en Javascript, actualmente estoy estudiando en la Universidad
            Tecnologica del Perú y en CodiGo-TECSUP. Me apasiona la programación
            Back-End, Front-End, Mobile y todo lo relacionado con la tecnologia,
            muchas gracias por visitar mi pagina.
          </p>
        </div>
        <div className={styles.container__info__personal}>
          <div
            className={`${styles.aboutme__info} wow animate__animated animate__backInUp`}
          >
            <h3 className="mb-8">Datos personales:</h3>
            <div className={styles.container__icon}>
              <div className={styles.icon__aboutme}>
                <img src="/img/icons/hourglass.svg" alt="" />
              </div>
              <span>{age || "-"} años</span>
            </div>
            <div className={styles.container__icon}>
              <div className={styles.icon__aboutme}>
                <img src="/img/icons/combined-shape.svg" alt="" />
              </div>
              <span>+51993541937</span>
            </div>
            <div className={styles.container__icon}>
              <div className={styles.icon__aboutme}>
                <img src="/img/icons/multimedia.svg" alt="" />
              </div>
              <span>jhosepgc14@gmail.com</span>
            </div>
            <div className={styles.container__icon}>
              <div className={styles.icon__aboutme}>
                <img src="/img/icons/group-31.svg" alt="" />
              </div>
              <span>
                Calle Gral. Juan Antonio Pezet 184
                <br />
                Urb. Retablo I Etapa - Comas
              </span>
            </div>
          </div>
          <div
            className={`${styles.skills__interest} wow animate__animated animate__backInUp`}
          >
            <div className={styles.container__interest}>
              <h3 className="mb-8">Me interesa:</h3>
              <div className="flex flex-wrap gap-4">
                {itemsInterest.map((item, index) => {
                  return <ItemInterest key={item.id} text={item.value} />;
                })}
              </div>
            </div>
            <div className={styles.container__interest2}>
              <h3 className="mb-8">Idiomas:</h3>
              <div className="flex">
                <span>Español:</span>
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star.svg" alt="" />
              </div>
              <div className="flex">
                <span style={{ paddingRight: 4 }}>English:</span>
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star.svg" alt="" />
                <img src="/img/icons/star-noactive.svg" alt="" />
                <img src="/img/icons/star-noactive.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-9">
          <ButtonPrimary textButton="DESCARGAR CV" />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
