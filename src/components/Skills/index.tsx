import { Code } from "phosphor-react";

import ReactLogoImg from "../../assets/reactjs-icon.svg";
import NodeLogoImg from "../../assets/nodejs-icon.svg";
import HtmlLogoImg from "../../assets/w3_html5-icon.svg";
import CSSLogoImg from "../../assets/w3_css-icon.svg";
import LaravelLogoImg from "../../assets/laravel-icon.svg";
import PrismaLogoImg from "../../assets/prisma-icon.svg";
import GraphQlLogoImg from "../../assets/graphql-icon.svg";
import JavascriptLogoImg from "../../assets/javascript-icon.svg";
import MuiLogoImg from "../../assets/mui-icon.svg";
import TailwindCssLogoImg from "../../assets/tailwind-css-icon.svg";
import SassLogoImg from "../../assets/sass-icon.svg";
import MySqlLogoImg from "../../assets/mysql-icon.svg";

import styles from "./styles.module.scss";
import { useProfile } from "../../contexts/useProfile";

export const Skills: React.FC = () => {
  const { profile } = useProfile();

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
          <p>{profile?.knowledge}</p>

          <div>
            <div>
              <img src={HtmlLogoImg} alt="Html Logo" />
              <h3>HTML 5</h3>
            </div>
            <div>
              <img src={CSSLogoImg} alt="CSS 3 Logo" />
              <h3>CSS</h3>
            </div>
            <div>
              <img src={SassLogoImg} alt="CSS 3 Logo" />
              <h3>SASS</h3>
            </div>
            <div>
              <img src={JavascriptLogoImg} alt="CSS 3 Logo" />
              <h3>JavaScript</h3>
            </div>
            <div>
              <img src={MySqlLogoImg} alt="CSS 3 Logo" />
              <h3>MySQL</h3>
            </div>
            <div>
              <img src={ReactLogoImg} alt="React Logo" />
              <h3>React JS</h3>
            </div>

            <div>
              <img src={TailwindCssLogoImg} alt="NodeJS Logo" />
              <h3>TailwindCSS</h3>
            </div>
            <div>
              <img src={MuiLogoImg} alt="NodeJS Logo" />
              <h3>MUI</h3>
            </div>
            <div>
              <img src={GraphQlLogoImg} alt="NodeJS Logo" />
              <h3>GraphQL</h3>
            </div>
            <div>
              <img src={NodeLogoImg} alt="NodeJS Logo" />
              <h3>Node JS</h3>
            </div>
            <div>
              <img src={LaravelLogoImg} alt="CSS 3 Logo" />
              <h3>Laravel</h3>
            </div>
            <div>
              <img
                className={styles.whiteLogo}
                src={PrismaLogoImg}
                alt="CSS 3 Logo"
              />
              <h3>Prisma</h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
