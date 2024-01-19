import { Lightbulb, RocketLaunch } from "phosphor-react";
import styles from "./styles.module.scss";

export const ProfileInfo: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1>Tecnologias e conceitos usados neste projeto:</h1>
        <ul>
          <li>
            <RocketLaunch size={32} /> React
          </li>
          <li>
            <RocketLaunch size={32} /> TypeScript
          </li>
          <li>
            <RocketLaunch size={32} /> GraphQL
          </li>
          <li>
            <RocketLaunch size={32} /> Graph CMS
          </li>
          <li>
            <RocketLaunch size={32} /> Vite
          </li>
          <li>
            <RocketLaunch size={32} /> Apollo Client
          </li>
          <li>
            <RocketLaunch size={32} /> SASS
          </li>
        </ul>
        <ul>
          <li>
            <Lightbulb size={32} /> React Hooks
          </li>
          <li>
            <Lightbulb size={32} /> CSS-Modules
          </li>
          <li>
            <Lightbulb size={32} /> Git
          </li>
          <li>
            <Lightbulb size={32} /> Github Pages
          </li>
        </ul>
      </div>
    </section>
  );
};
