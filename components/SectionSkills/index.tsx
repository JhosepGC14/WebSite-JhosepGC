import { useState } from "react";
import SkillBar from "../shared/SkillBar";
import styles from "./section.skills.module.css";
import { skillsAgile, skillsArray, skillsTools } from "../../utilities/getSkill";

const SectionSkills = () => {
  const [itemSkills] = useState(skillsArray || []);
  const [itemsAgile] = useState(skillsAgile || []);
  const [itemsTools] = useState(skillsTools || []);

  return (
    <section className={styles.section_skills} id="skills">
      <div className={styles.container_skills}>
        <div className={styles.content_text}>
          <h4>EXPERIENCIA EN</h4>
          <h2>HABILIDADES ESPECIALES</h2>
        </div>
        <div className={styles.content_skills}>
          <h3>Habilidades:</h3>
          <div className={styles.contenedor_skill}>
            {itemSkills &&
              itemSkills.map((item) => {
                return (
                  <SkillBar
                    key={`${item.name}${item.value}`}
                    nameSkill={item.name}
                    value={item.value}
                  />
                );
              })}
          </div>
        </div>
        <div className={styles.content_tools}>
          <h3>Metodologías ágiles:</h3>
          <div className={styles.scrum}>
            {itemsAgile &&
              itemsAgile.map((item) => {
                return (
                  <SkillBar
                    key={`${item.name}${item.value}`}
                    nameSkill={item.name}
                    value={item.value}
                  />
                );
              })}
          </div>
          <h3>Herramientas:</h3>
          <div className={styles.tools}>
            {itemsTools &&
              itemsTools.map((item) => {
                return (
                  <SkillBar
                    key={`${item.name}${item.value}`}
                    nameSkill={item.name}
                    value={item.value}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
