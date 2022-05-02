import styles from "./skill.bar.module.css";

interface PropsSkillBar {
  nameSkill: string;
  value: number;
}

const SkillBar = ({ nameSkill, value }: PropsSkillBar) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skill_name}>{nameSkill || "-"}</div>
      <div className={styles.skill_bar}>
        <div
          className={styles.skill_per}
          style={{
            width: `${value}%` || "0%",
          }}
          data-content={`${value}%` || "0%"}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
