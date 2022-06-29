import { FileCode, GithubLogo, Link } from "phosphor-react";
import styles from "./styles.module.scss";

import Project03Img from "../../assets/project-receitaria.gif";

export const Projects: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <FileCode size={64} weight="thin" />
            Featured Projects
          </h2>
        </header>
        <main>
          <div>
            <img src="" alt="" />
            <h3>Sistek IT Services</h3>
            <p>
              Software using ReactJS, NodeJS, TypeScript, to control company
              employees.
            </p>
            <button>
              <GithubLogo size={24} />
              Github
            </button>
          </div>
          <div>
            <img src="" alt="" />
            <h3>Receitaria Escola Gourmet</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              impedit numquam!
            </p>
            <button>
              <Link size={24} />
              https://receitaria.com
            </button>
          </div>
          <div>
            <h3>Receitaria Escola Gourmet</h3>
            <p>Ecommerce to sell courses of gastronomy using Laravel.</p>
            <button>
              <Link size={24} />
              https://receitaria.com
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
