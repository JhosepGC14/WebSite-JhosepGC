import CardProjects from "../CardProjects";
import styles from "./section.projects.module.css";

const SectionProjects = () => {
  return (
    <section className={styles.section_project} id="projects">
      <div className={styles.container_projects}>
        <div className={styles.project_text}>
          <h4>TODOS MIS</h4>
          <h2>PROYECTOS</h2>
        </div>
        <div className={styles.container_grid}>
          <CardProjects url="https://terapygoperu.com/" image="TerapyGo" />

          <CardProjects url="https://tusueldoya.com/" image="TuSueldoYa!" />

          <CardProjects url="https://regalistos.pe/" image="Regalistos" />
          {/* <!-- MODAL -->
            <!-- The Modal --> */}
          {/* <div id="modalProject1" className="modalProjecto">
              <!-- Modal content -->
              <div className="modal-content2">
                <div className="modal-header2">
                  <span id="closeModalProject1" className="closeOff"><img src="/img/icons/close.svg" alt="close"></span>
                  <div>
                    <h3>PROYECTO</h3>
                    <h3 className="text_red">
                      REGALISTOS - ECOMMERCE PARA NIÑOS
                    </h3>
                  </div>
                </div>
                <div className="modal-body2">
                  <div className="container_text_project">
                    <div>
                      <p>
                        Regalistos te brinda la facilidad de crear eventos y darle el regalo ideal a tu engreido/a -
                        cuenta con su tienda
                        virtual para que los más pequeños escojan sus regalos y así puedan llevar el presente perfecto.
                        Además, cuenta con la facilidad de escoger tarjetas de invitación y personalizarla a gusto de
                        cada usuario.
                      </p>
                    </div>
                    <div className="tech">
                      <h5>Tecnologias usadas:</h5>
                      <div className="text_social"><span>Html5</span></div>
                      <div className="text_social"><span>Css3</span></div>
                      <div className="text_social"><span>Javascript</span></div>
                      <div className="text_social"><span>Node JS</span></div>
                      <div className="text_social"><span>Express JS</span></div>
                      <div className="text_social"><span>React JS</span></div>
                      <div className="text_social"><span>Next JS</span></div>
                      <div className="text_social"><span>Redux</span></div>
                      <div className="text_social"><span>Material UI</span></div>
                      <div className="text_social"><span>Firebase</span></div>
                      <div className="text_social"><span>My-Sql</span></div>
                    </div>
                    <div className="retroespectiva">
                      <h5>Comentario:</h5>
                      <p>
                        Durante este proyecto aprendí muchísimo sobre cada tecnológia usada, personalmente fue el mejor
                        reto que he tenido hasta la actualidad debido a que el ecommerce se realizó desde cero. Propuse
                        todas las tecnológias que se usaron dentro de los cuales Redux destacó por la facilidad de uso y
                        acceso de estados a nivel global. Cuenta con una pasarella de pagos con Mercado Pago el cual fue
                        un reto implementarla.
                      </p>
                    </div>
                  </div>
                  <div><img src="/img/Regalistos.svg" alt="" /></div>
                </div>
              </div>
            </div> */}
          {/* <!-- FIN MODAL --> */}
          <CardProjects
            url="https://www.rimac.com.pe/geo/login"
            image="RimacGeo"
          />

          {/* <!-- MODAL -->
            <!-- The Modal -->
            <div id="modalProject2" className="modalProjecto">
              <!-- Modal content -->
              <div className="modal-content2">
                <div className="modal-header2">
                  <span id="closeModalProject2" className="closeOff"><img src="/img/icons/close.svg" alt="close"></span>
                  <div>
                    <h3>PROYECTO</h3>
                    <h3 className="text_red">
                      CLASSNameBOOK - WEB ADMINISTRADOR
                    </h3>
                  </div>
                </div>
                <div className="modal-body2">
                  <div className="container_text_project">
                    <div>
                      <p>
                        Web para administrar los libros, compras y ventas del Aplicativo Movíl. Además, podrás realizar
                        las asignaciones de profesores, libros, cursos para el colegio con el cual esté asociado la
                        empresa ClassNamebook.
                      </p>
                    </div>
                    <div className="tech">
                      <h5>Tecnologias usadas:</h5>
                      <div className="text_social"><span>Html5</span></div>
                      <div className="text_social"><span>Css3</span></div>
                      <div className="text_social"><span>React-Bootstrap</span></div>
                      <div className="text_social"><span>Javascript</span></div>
                      <div className="text_social"><span>React JS</span></div>
                      <div className="text_social"><span>Next JS</span></div>
                      <div className="text_social"><span>Node JS</span></div>
                      <div className="text_social"><span>Express JS</span></div>
                      <div className="text_social"><span>My-SQL</span></div>
                    </div>
                    <div className="retroespectiva">
                      <h5>Comentarios:</h5>
                      <p>
                        Esas grandes ideas sucedieron cuando se evalúo el alcance del proyecto. Dentro de este proyecto
                        se usaron tecnologías nuevas para la empresa ClassNameBook pero quedaron satisfechos por el buen uso
                        de los frameworks y experiencia de usuario en la Web. Actualmente, ellos tienen la web
                        desplegada en su servidor privado por ende no hay una URL.
                      </p>
                    </div>
                  </div>
                  <div><img src="/img/ClassNamebook.svg" alt="" /></div>
                </div>
              </div>
            </div>
            <!-- FIN MODAL --> */}
          <CardProjects
            url="https://www.rimac.com.pe/etaller/login"
            image="RimacEtaller"
          />

          <CardProjects
            url="https://asistenciavehicular.rimac.com/asistencia-vehicular/ingresa-placa"
            image="RimacAsistenciasVehicular"
          />

          <CardProjects
            url="https://corredores.rimac.com/login"
            image="RimacBrokers"
          />

          {/* <!-- MODAL -->
            <!-- The Modal -->
            <div id="modalProject3" className="modalProjecto">
              <!-- Modal content -->
              <div className="modal-content2">
                <div className="modal-header2">
                  <span id="closeModalProject3" className="closeOff"><img src="/img/icons/close.svg" alt="close"></span>
                  <div>
                    <h3>PROYECTO</h3>
                    <h3 className="text_red">
                      ROCHE FARMA - WEB CMS
                    </h3>
                  </div>
                </div>
                <div className="modal-body2">
                  <div className="container_text_project">
                    <div>
                      <p>
                        Roche ha logrado mantener una posición de liderazgo en el mercado peruano como resultado del
                        alto desempeño de sus productos y de sus colaboradores. Este proyecto es una muestra ya que esta
                        web es un CMS en el cual todos las empresas aliadas con Roche podrán publicar su contenido sobre
                        enfermadades y noticias relacionadas a la salud, todo esto desde una Web Administradora y el
                        aplicativo movíl.
                      </p>
                    </div>
                    <div className="tech">
                      <h5>Tecnologias usadas:</h5>
                      <div className="text_social"><span>Html5</span></div>
                      <div className="text_social"><span>Css3</span></div>
                      <div className="text_social"><span>Material UI</span></div>
                      <div className="text_social"><span>Javascript</span></div>
                      <div className="text_social"><span>React JS</span></div>
                      <div className="text_social"><span>Next JS</span></div>
                      <div className="text_social"><span>Node JS</span></div>
                      <div className="text_social"><span>My-Sql</span></div>

                    </div>
                    <div className="retroespectiva">
                      <h5>Comentarios:</h5>
                      <p>
                        Esas grandes ideas sucedieron sobre papel y con
                        Humberto, pondrás en evidencia su proceso de creación.
                        Para tu proyecto crearás y presentarás una idea desde
                        las bases, con ella
                      </p>
                    </div>
                  </div>
                  <div><img src="/img/RocheFarma.svg" alt="" /></div>
                </div>
              </div>
            </div>
            <!-- FIN MODAL --> */}

          {/* <!-- MODAL -->
            <!-- The Modal -->
            <div id="modalProject4" className="modalProjecto">
              <!-- Modal content -->
              <div className="modal-content2">
                <div className="modal-header2">
                  <span id="closeModalProject4" className="closeOff"><img src="/img/icons/close.svg" alt="close"></span>
                  <div>
                    <h3>PROYECTO</h3>
                    <h3 className="text_red">
                      TERAPYGO - WEB OFICIAL PERÚ
                    </h3>
                  </div>
                </div>
                <div className="modal-body2">
                  <div className="container_text_project">
                    <div>
                      <p>
                        TerapyGo te ayuda a encontrar tu terapeuta ideal, y podrás llevar a cabo las citas por medio de
                        vídeo o llamada; y los
                        planes mensuales incluyen mensajería de texto con tu psicólogo. Además, cuenta con un chat
                        personal con tu psicólogo de turno.
                      </p>
                    </div>
                    <div className="tech">
                      <h5>Tecnologias usadas:</h5>
                      <div className="text_social"><span>Html5</span></div>
                      <div className="text_social"><span>Css3</span></div>
                      <div className="text_social"><span>Material UI</span></div>
                      <div className="text_social"><span>Javascript</span></div>
                      <div className="text_social"><span>React JS</span></div>
                      <div className="text_social"><span>Next JS</span></div>
                      <div className="text_social"><span>Node JS</span></div>
                      <div className="text_social"><span>My-Sql</span></div>
                      <div className="text_social"><span>Firebase</span></div>
                      <div className="text_social"><span>Context API</span></div>
                      <div className="text_social"><span>Paypal</span></div>
                      <div className="text_social"><span>Stripe</span></div>
                    </div>
                    <div className="retroespectiva">
                      <h5>Comentarios:</h5>
                      <p>
                        Durante este proyecto se implementaron tecnológias que sirvieron de mucha utilidad, sobre todo
                        Context API para el manejo global de la aplicación e implementar las
                        pasarellas
                        de pagos para los clientes.
                      </p>
                    </div>
                  </div>
                  <div><img src="/img/TerapyGo.svg" alt="" /></div>
                </div>
              </div>
            </div>
            <!-- FIN MODAL --> */}

          {/* <!-- MODAL -->
            <!-- The Modal -->
            <div id="modalProject5" className="modalProjecto">
              <!-- Modal content -->
              <div className="modal-content2">
                <div className="modal-header2">
                  <span id="closeModalProject5" className="closeOff"><img src="/img/icons/close.svg" alt="close"></span>
                  <div>
                    <h3>PROYECTO</h3>
                    <h3 className="text_red">
                      TU SUELDO YA! - WEB EMPLEADOR, ADMINISTRADOR Y COLABORADOR
                    </h3>
                  </div>
                </div>
                <div className="modal-body2">
                  <div className="container_text_project">
                    <div>
                      <p>
                        Con TuSueldoYa! tus colaboradores podrán adelantar su sueldo por los días ya trabajados sin
                        tener que esperar el día de pago, en este proyecto se realizo la Web de tres perfiles como
                        Administrador, Colaborador y Empleador.
                      </p>
                    </div>
                    <div className="tech">
                      <h5>Tecnologias usadas:</h5>
                      <div className="text_social"><span>Html5</span></div>
                      <div className="text_social"><span>Css3</span></div>
                      <div className="text_social"><span>React Boostrap</span></div>
                      <div className="text_social"><span>Javascript</span></div>
                      <div className="text_social"><span>React JS</span></div>
                      <div className="text_social"><span>Next JS</span></div>
                      <div className="text_social"><span>Node JS</span></div>
                      <div className="text_social"><span>Express JS</span></div>
                      <div className="text_social"><span>My-Sql</span></div>
                    </div>
                    <div className="retroespectiva">
                      <h5>Comentarios:</h5>
                      <p>
                        Durante este proyecto financiero se aprendío mucho ya que la aplicación era muy delicada por
                        temas bancarios. Además cada tecnológia que se usó, destaco por su facilidad de usar y mejorar
                        la experiencia de usuario para cada perfil.
                      </p>
                    </div>
                  </div>
                  <div><img src="/img/TuSueldoYa!.svg" alt="" /></div>
                </div>
              </div>
            </div>
            <!-- FIN MODAL --> */}
        </div>
        <div className={styles.center}>
          <div className={styles.pagination}>
            <a href="#!">❮</a>
            <a href="#!" className={styles.active}>
              1
            </a>
            {/* <!-- <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a> --> */}
            <a href="#!">❯</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
