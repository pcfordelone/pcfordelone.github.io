import styles from "./styles.module.scss";

import {
  ArrowDown,
  GithubLogo,
  LinkedinLogo,
  User,
  UserCircle,
} from "phosphor-react";
import CoverBackgroundImg from "../../assets/cover-background.png";

export const Cover: React.FC = () => {
  return (
    <section className={styles.section}>
      <img
        className={styles.backgroundImg}
        src={CoverBackgroundImg}
        alt="Cover Background Image"
      />
      <div className={styles.container}>
        <main>
          <img
            src="https://avatars.githubusercontent.com/u/7582747?v=4"
            alt="Profile Logo"
          />
          <h1>Paulo César Fordelone</h1>
          <p>Software Developer</p>

          <button>
            <User size={24} />
            About Me
            <ArrowDown />
          </button>
        </main>

        <footer>
          <button>
            <GithubLogo size={48}></GithubLogo>
          </button>
          <button>
            <LinkedinLogo size={48}></LinkedinLogo>
          </button>
        </footer>
      </div>
    </section>
  );
};
