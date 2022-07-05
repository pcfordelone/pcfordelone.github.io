import styles from './styles.module.scss'

import { ArrowDown, GithubLogo, LinkedinLogo, User } from 'phosphor-react'
import CoverBackgroundImg from '../../assets/cover-background.png'
import { Profile } from '../../graphql/generated'

interface ICoverProps {
  scrollToProfile: () => void
  profileData: Profile | undefined
}

export const Cover: React.FC<ICoverProps> = ({
  scrollToProfile,
  profileData,
}: ICoverProps) => {
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
          <h1>{profileData?.name}</h1>
          <p>{profileData?.job}</p>

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
