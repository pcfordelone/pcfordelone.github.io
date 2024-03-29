import { FileCode, GithubLogo, Link, PlusCircle } from "phosphor-react";
import styles from "./styles.module.scss";

import { Profile } from "../../graphql/generated";

interface IProjectsProps {
  profile: Profile | undefined;
}

export const Projects = ({ profile }: IProjectsProps) => {
  console.log(profile?.projects)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <FileCode size={64} weight="thin" />
            Projetos em Destaque
          </h2>
        </header>
        <main>
          {profile?.projects.map((project) => (
            <div className={styles.projectContainer} key={project.slug}>
              {project.defaultImg?.url && (
                <img src={project.defaultImg?.url} alt={profile.name} />
              )}

              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.linkButtons}>
                  {project.github && (
                    <a
                      href={`https://github.com/pcfordelone/${project.github}`}
                      target="_blank"
                    >
                      <GithubLogo size={24} />
                      Github
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank">
                      <Link size={24} />
                      URL
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
