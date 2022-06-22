import { Code, Image } from "phosphor-react";

import ReactLogoImg from "../../assets/reactjs-icon.svg";
import NodeLogoImg from "../../assets/nodejs-icon.svg";
import HtmlLogoImg from "../../assets/w3_html5-icon.svg";
import CSSLogoImg from "../../assets/w3_css-icon.svg";
import LaravelLogoImg from "../../assets/laravel-icon.svg";

import styles from "./styles.module.scss";

export const Skills: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <Code size={58} weight="thin" />
            Skills
          </h2>
        </header>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porta massa sed quam finibus, ut viverra neque semper. Donec lorem
            nisi, fermentum a ante tincidunt, ultrices pellentesque dui. In nec
            venenatis orci.
          </p>

          <div>
            <div>
              <img src={NodeLogoImg} alt="NodeJS Logo" />
              <h3>Node JS</h3>
            </div>
            <div>
              <img src={ReactLogoImg} alt="React Logo" />
              <h3>React JS</h3>
            </div>
            <div>
              <img src={HtmlLogoImg} alt="Html Logo" />
              <h3>HTML 5</h3>
            </div>
            <div>
              <img src={CSSLogoImg} alt="CSS 3 Logo" />
              <h3>CSS / SASS</h3>
            </div>
            <div>
              <img src={LaravelLogoImg} alt="CSS 3 Logo" />
              <h3>Laravel</h3>
            </div>
            <div>
              <Image size={128} weight="thin" />
              <h3>React JS</h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
