import { GearSix, UserGear, Watch } from 'phosphor-react'
import styles from './styles.module.scss'

export const Experience: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <UserGear size={64} weight="thin" />
            Last Jobs
          </h2>
        </header>
        <main>
          <div>
            <h3>Freelancer</h3>
            <ul>
              <li>
                <strong>
                  <Watch size={24} weight="regular" />
                  PERÍODO
                </strong>
                <p>2009 até os tempos atuais</p>
              </li>
              <li>
                <strong>
                  <GearSix size={24} weight="regular" />
                  JOB
                </strong>
                <p>
                  Desenvolvimento de websites, sistemas, peças gráficas,
                  logotipos e materiais digitais e impressos dos mais variados
                  tipos.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Moema em Revista / ALT Publicidade</h3>
            <ul>
              <li>
                <strong>
                  <Watch size={24} weight="regular" />
                  período:
                </strong>
                <p>2007 a 2009</p>
              </li>
              <li>
                <strong>
                  <GearSix size={24} weight="regular" />
                  JOB
                </strong>
                <p>
                  Desenvolvimento de websites, anúncios de revista, logotipos,
                  peças digitais diversas
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>EdukSempre</h3>
            <ul>
              <li>
                <strong>
                  <Watch size={24} weight="regular" />
                  período:
                </strong>
                <p>2005</p>
              </li>
              <li>
                <strong>
                  <GearSix size={24} weight="regular" />
                  JOB
                </strong>
                <p>
                  Design de conteúdo para plataforma de E-learning, desde
                  páginas em HTML e CSS, a aulas completas em Flash e
                  ActionScript
                </p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
