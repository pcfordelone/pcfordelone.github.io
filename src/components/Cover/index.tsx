import styles from './styles.module.scss'

import { ArrowDown, GithubLogo, LinkedinLogo, User } from 'phosphor-react'
import CoverBackgroundImg from '../../assets/cover-background.png'

interface ICoverProps {
  scrollToProfile: () => void
}

export const Cover: React.FC<ICoverProps> = ({
  scrollToProfile,
}: ICoverProps) => {
  // const scrollTo: () => void = () => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: 'smooth',
  //   })
  // }

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
          <p>Front-end Developer</p>

          <button onClick={scrollToProfile}>
            <User size={24} />
            Sobre mim
            <ArrowDown />
          </button>
        </main>

        <footer>
          <a href="https://github.com/pcfordelone" target="_blank">
            <GithubLogo size={48}></GithubLogo>
          </a>
          <a href="https://www.linkedin.com/in/pcfordelone/" target="_blank">
            <LinkedinLogo size={48}></LinkedinLogo>
          </a>
        </footer>
      </div>
    </section>
  )
}
