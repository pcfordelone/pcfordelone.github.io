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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porta massa sed quam finibus, ut viverra neque semper. Donec lorem
            nisi, fermentum a ante tincidunt, ultrices pellentesque dui. In nec
            venenatis orci.
            <br />
            <br />
            Nulla dictum in ligula et feugiat. Cras sapien justo, vulputate sed
            scelerisque sit amet, cursus id diam. Sed placerat, nibh eu lacinia
            molestie, libero risus dignissim purus, eu accumsan sem purus in
            lacus. Integer id dignissim urna. Morbi ac nisl ut quam congue
            bibendum. Maecenas porta magna sapien, ut feugiat sem semper ut.
            Curabitur lorem nisi, tempor id eleifend eget, sagittis id sem.
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
