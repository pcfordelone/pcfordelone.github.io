import styles from "./styles.module.scss";
import ProfileImg from "../../assets/profile-img.jpg";
import { UserCircle } from "phosphor-react";

export const Profile: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <UserCircle size={64} weight="thin" />
            Profile
          </h2>
        </header>
        <main>
          <img src={ProfileImg} alt="Profile Image" />
          <p>
            Always behind a monitor. As a child, when I got my first computer,
            at the time a 486 with Windows 3.11 and DOS 6.22, I was fascinated
            by technology.
            <br />
            <br />
            On this trip, I was always torn between design and development,
            walking primarily through design. Today I'm focused on development
            and every day, with each new project, I realize how vast and
            exciting this area is.
            <br />
            <br />
            My current quest is to find a steady job and evolve every day.
          </p>

          <div>
            <ul>
              <li>
                <strong>FullName:</strong> Paulo Cesar Fordelone
              </li>
              <li>
                <strong>Birthday:</strong> 17/02/1983
              </li>
              <li>
                <strong>E-mail:</strong> pcfordelone@gmail.com
              </li>
              <li>
                <strong>Job:</strong> Software Developer
              </li>
              <li>
                <strong>Natural from:</strong> São Paulo/SP
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};
