import { FileCode, GithubLogo, Link } from 'phosphor-react'
import styles from './styles.module.scss'

import Project01Img from '../../assets/projects-sistek_adm.png'
import Project02Img from '../../assets/projects-receitaria.png'
import Project03Img from '../../assets/projects-ignite_lab.png'
import Project04Img from '../../assets/projects-nlw8.png'
import { forwardRef } from 'react'

export const Projects = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <FileCode size={64} weight="thin" />
            Projetos em destaque
          </h2>
        </header>
        <main>
          <div className={styles.projectContainer}>
            <img src={Project01Img} alt="Print - Receitaria Escola Gourmet" />
            <h3>Sistek IT Services</h3>
            <p>
              Painel administrativo para controle de funcionários e holerites,
              com painel com painel de acesso restrito e controle de permissões
              para usuários e administradores. Projeto realizado utilizando
              React, NodeJS e Prisma.
            </p>
            <div>
              <a
                href="https://github.com/pcfordelone/sistek-admin2022"
                target="_blank"
              >
                <GithubLogo size={24} />
                Github
              </a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src={Project02Img} alt="Print - Receitaria Escola Gourmet" />
            <h3>Receitaria Escola Gourmet</h3>
            <p>
              E-commerce para escola de gastronomia com sistema de pagamento,
              blog, dashboard para administração de conteúdo e pedidos. Projeto
              realizado com PHP, Laravel, HTML5, CSS e JavaScript
            </p>
            <div>
              <a href="https://receitaria.com" target="_blank">
                <Link size={24} />
                Acesse
              </a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src={Project03Img} alt="Print - Receitaria Escola Gourmet" />
            <h3>Ignite Lab - Rocketseat</h3>
            <p>
              Projeto realizado em semana Ignite Lab da Rocketseat na criação de
              uma plataforma de vídeos com página para cadastro. Criado com
              React, Graphql, Graph CMS e TailwindCSS.
            </p>
            <div>
              <a
                href="https://github.com/pcfordelone/ignite-lab-pcfordelone"
                target="_blank"
              >
                <GithubLogo size={24} />
                Github
              </a>
              <a href="https://ignite-lab-pcfordelone.vercel.app/">
                <Link size={24} />
                Acesse
              </a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src={Project04Img} alt="Print - Receitaria Escola Gourmet" />
            <h3>Next Level Week - Rocketseat</h3>
            <p>
              Participação na Next Level Week promovida pela Rocketseat. O
              projeto foi um sistema de notificação de bugs com captura de tela,
              utilizando NodeJS para back-end, React e React Native para Mobile.
            </p>
            <div>
              <a
                href="https://github.com/pcfordelone/nlw8-react_module"
                target="_blank"
              >
                <GithubLogo size={24} />
                Github
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
})
