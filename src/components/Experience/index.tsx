import { GearSix, UserGear, Watch } from "phosphor-react";
import styles from "./styles.module.scss";

export const Experience: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <UserGear size={64} weight="thin" />
            Last Jobs
          </h2>
        </header>
        <main>
          <div>
            <h3>Fordelone Comunicação / Freelancer</h3>
            <ul>
              <li>
                <strong>
                  <Watch size={24} weight="regular" />
                  PERÍODO
                </strong>
                <p>since 2009</p>
              </li>
              <li>
                <strong>
                  <GearSix size={24} weight="regular" />
                  Description
                </strong>
                <p>
                  Development of websites, systems, graphic pieces, logos and
                  digital and printed materials of the most varied types.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Agência DezemHum</h3>
            <ul>
              <li>
                <strong>
                  <Watch size={24} weight="regular" />
                  período:
                </strong>
                <p>2019 a 2022</p>
              </li>
              <li>
                <strong>
                  <GearSix size={24} weight="regular" />
                  Description
                </strong>
                <p>
                  Freelancer em desenvolvimento de sites, sistemas, design de
                  peças publicitárias como anúncios, posts para mídias sosciais,
                  cardápios entre outros.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Moema em Revista / ALT Publicidade</h3>
            <ul>
              <li>
                <strong>
                  <Watch size={24} weight="regular" />
                  período:
                </strong>
                <p>2007 a 2009</p>
              </li>
              <li>
                <strong>
                  <GearSix size={24} weight="regular" />
                  Description
                </strong>
                <p>
                  Desenvolvimento de websites, sistemas, anúncios de revista,
                  logotipos, peças digitais e impressas diversas.
                </p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};
