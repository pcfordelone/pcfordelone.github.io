import styles from './styles.module.scss'
import ProfileImg from '../../assets/profile-img.jpg'
import { UserCircle } from 'phosphor-react'
import { ForwardedRef, forwardRef } from 'react'

export const Profile = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <UserCircle size={64} weight="thin" />
            Apresentação
          </h2>
        </header>
        <main>
          <img src={ProfileImg} alt="Profile Image" />
          <p>
            Sempre atrás de um monitor. Quando criança, quando ganhei meu
            primeiro computador, na época um 486 com Windows 3.11 e DOS 6.22,
            fiquei fascinado pela tecnologia.
            <br />
            <br />
            Nesta viagem, sempre estive dividido entre design e desenvolvimento,
            caminhando principalmente pelo design. Hoje estou focado no
            desenvolvimento e a cada dia, a cada novo projeto, percebo o quão
            vasto e emocionante esta área é.
            <br />
            <br />
            Minha busca atual é encontrar um emprego estável e evoluir a cada
            dia.
          </p>

          <div>
            <ul>
              <li>
                <strong>Nome Completo:</strong> Paulo Cesar Fordelone
              </li>
              <li>
                <strong>Aniversário:</strong> 17/02/1983
              </li>
              <li>
                <strong>E-mail:</strong> pcfordelone@gmail.com
              </li>
              <li>
                <strong>Trabalho:</strong> Desenvolvedor front-end
              </li>
              <li>
                <strong>Natural de:</strong> São Paulo/SP - Brasil
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
})
