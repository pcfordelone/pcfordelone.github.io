import styles from "./styles.module.scss";

import {
  ArrowDown,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  User,
} from "phosphor-react";

import CoverBackgroundImg from "../../assets/cover-background.png";
import LogoImg from "../../assets/logo.png";

import { Profile } from "../../graphql/generated";

interface ICoverProps {
  scrollToProfile: () => void;
  profileData: Profile | undefined;
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
          <img src={LogoImg} alt="Profile Logo" />
          <h1>{profileData?.name}</h1>
          <p>{profileData?.job}</p>

          <div>
            <button onClick={scrollToProfile}>
              <User size={24} />
              About me
              <ArrowDown />
            </button>
            <a href="curriculo-paulo_cesar_fordelone-2022.pdf" target="_blank">
              <FilePdf size={24} />
              PDF version
              <ArrowDown />
            </a>
          </div>
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
  );
};
