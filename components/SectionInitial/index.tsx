import React from "react";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
import styles from "./section.initial.module.css";

const SectionInitial = () => {
  return (
    <section className={styles.section_start} id="init">
      <div className={styles.container__start}>
        <div className={styles.container__info}>
          <h3 className={styles.text_red}>HOLA,</h3>
          <h3> SOY JHOSEP GUADALUPE.</h3>
          <h1>FRONT-END DEVELOPER</h1>
          <p>Me apasiona el desarrollo de software, web, movíl y</p>
          <p>todo los relacionado con la tecnologia.</p>
          <div className={styles.container_img_rwd}>
            <figure>
              <img src="/img/img_inicio.svg" alt="logo_init" />
            </figure>
          </div>
          <div className="flex gap-6 mt-9">
            <ButtonPrimary textButton="Mis Skills" />
            <ButtonSecondary textButton="SOCIAL NETWORK" />
          </div>
        </div>
        <div className={styles.container__img}>
          <figure>
            <img src="/img/img_inicio.svg" alt="logo_init" />
          </figure>
        </div>
      </div>
      {/* <!-- MODAL -->
      <!-- The Modal --> */}
      {/* <div id="modalSocial" className="modal">
        <!-- Modal content -->
        <div className="modal-content">
          <div className="modal-header">
            <span className="closeModal"><img src="./img/icons/close.svg" alt=""></span>
            <h2>SOCIAL NETWORKS</h2>
          </div>
          <div className="modal-body">
            <div className="content_modal_icons">
              <div className="container_social">
                <img src="./img/icons/facebook.svg" alt="logofb" />
              </div>
              <div className="text_social"><a href="https://www.facebook.com/jhosep.guadalupe/" target="_blank">Facebook</a>
              </div>
            </div>
            <div className="content_modal_icons">
              <div className="container_social">
                <img src="./img/icons/instagram.svg" alt="logoinst" />
              </div>
              <div className="text_social"><a href="https://www.instagram.com/jhosep_1407/" target="_blank">Instagram</a>
              </div>
            </div>
            <div className="content_modal_icons">
              <div className="container_social">
                <img src="./img/icons/github.svg" alt="logogit" />
              </div>
              <div className="text_social"><a href="https://github.com/JhosepGC14" target="_blank">Github</a></div>
            </div>
            <div className="content_modal_icons">
              <div className="container_social">
                <img src="./img/icons/twitter.svg" alt="logotwit" />
              </div>
              <div className="text_social"><a href="">Twitter</a></div>
            </div>
            <div className="content_modal_icons">
              <div className="container_social">
                <img src="./img/icons/linkedin.svg" alt="logolink" />
              </div>
              <div className="text_social"><a href="https://www.linkedin.com/in/jhosep-adolfo-guadalupe-culqui-b0b0b7195/"
                  target="_blank">Linkedin</a></div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default SectionInitial;
