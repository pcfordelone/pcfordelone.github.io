import { Code } from "phosphor-react";

import styles from "./styles.module.scss";

import { useProfile } from "../../contexts/useProfile";
import { ProgressBar } from "../ProgressBar";
import { useListSkillsQuery } from "../../graphql/generated";

export const Skills: React.FC = () => {
  const { profile } = useProfile();
  const {data} = useListSkillsQuery()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <Code size={58} weight="thin" />
            Skills
          </h2>
        </header>
        <main>
          <p>{profile?.knowledge}</p>

          <div className={styles.skills_container}>
            { data && data.skills.map((skill) => 
              <div className={styles.skill_item} key={skill.id}>
                <img src={skill.defaultImg && skill.defaultImg?.url || undefined} alt={skill.name} />
                <h3>{skill.name}</h3>
                <ProgressBar completed={skill.level || 0} text="" />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
