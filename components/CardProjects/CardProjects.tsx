import { FC } from "react";

//styles
import styles from "./card.projects.module.css";

//types
import { PropsCardProjects } from './types';

const CardProjects: FC<PropsCardProjects> = ({ url, image }) => {
  return (
    <div className={styles.content_project}>
      <img src={`/img/${image}.svg`} alt="project1" />
      <div className={styles.url_container}>
        <div className={styles.direction}>
          <img src="/img/icons/points.svg" alt="arrow" />
          <a
          // onclick="openModalProject('modalProject1', 'closeModalProject1')"
          >
            {url || "-"}
          </a>
        </div>
        <div className={styles.rectangule}>
          <img src="/img/icons/arrow_top.svg" alt="points" />
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
