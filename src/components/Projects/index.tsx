import { FileCode, GithubLogo, Link } from 'phosphor-react'
import styles from './styles.module.scss'

import ProjectImg from '../../assets/projects-receitaria.png'

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
          <div className={styles.projectContainer}>
            <img src={ProjectImg} alt="Print - Receitaria Escola Gourmet" />
            <h3>Sistek IT Services</h3>
            <p>
              Software using ReactJS, NodeJS, TypeScript, to control company
              employees.
            </p>
            <div>
              <button>
                <GithubLogo size={24} />
                Github
              </button>
              <button>
                <Link size={24} />
                Site
              </button>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src={ProjectImg} alt="Print - Receitaria Escola Gourmet" />
            <h3>Receitaria Escola Gourmet</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              impedit numquam!
            </p>
            <div>
              <button>
                <GithubLogo size={24} />
                Github
              </button>
              <button>
                <Link size={24} />
                Site
              </button>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src={ProjectImg} alt="Print - Receitaria Escola Gourmet" />
            <h3>Receitaria Escola Gourmet</h3>
            <p>Ecommerce to sell courses of gastronomy using Laravel.</p>
            <div>
              <button>
                <GithubLogo size={24} />
                Github
              </button>
              <button>
                <Link size={24} />
                Site
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
