import { Student } from 'phosphor-react'
import styles from './styles.module.scss'

export const Education: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <Student size={64} weight="thin" />
            Education
          </h2>
        </header>
        <main>
          <div>
            <h3>Rocketseat</h3>
            <ul>
              <li>
                <strong>curso:</strong> Ignite
              </li>
              <li>
                <strong>descrição:</strong>
                Curso voltado a especialização em React e Node JS contendo as
                tecnologias mais modernas e exigidas no mercado.
              </li>
              <li>
                <strong>período:</strong> em andamento
              </li>
            </ul>
          </div>
          <div>
            <h3>Full Cycle</h3>
            <ul>
              <li>
                <strong>curso:</strong> Full Cycle
              </li>
              <li>
                <strong>descrição:</strong>
                Curso prático voltado a criação de um Aplicativo completo
                utilizando microsserviços e as tecnologias mais atuais e
                utilizadas no mercado.
              </li>
              <li>
                <strong>período:</strong> em andamento
              </li>
            </ul>
          </div>
          <div>
            <h3>Universidade Anhembi Morumbi</h3>
            <ul>
              <li>
                <strong>curso:</strong> Design Digital
                <strong>descrição: </strong> Curso superior focado em design e
                devolvimento de sistemas
                <strong>período:</strong> incompleto
              </li>
            </ul>
          </div>
          <div>
            <h3>Nossa Senhora do Rosário</h3>
            <ul>
              <li>
                <strong>curso:</strong> Ensino Médio
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
