import { GearSix, UserGear, Watch } from "phosphor-react";
import { useListJobsQuery } from "../../graphql/generated";

import styles from "./styles.module.scss";

export const Experience: React.FC = () => {
  const { data } = useListJobsQuery();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <UserGear size={64} weight="thin" />
            Últimos Trabalhos:
          </h2>
        </header>
        <main>
          {data?.jobs && data?.jobs.map((item) =>
            <div key={item.id} className={styles.item_container}>
              <h3>{item.name}</h3>
              <ul>
                <li>
                  <p>
                    <UserGear size={24} weight="regular" />
                    <strong>
                      LOCAL:
                    </strong>
                    {item.place}
                  </p>
                </li>
                <li>
                  <p>
                    <Watch size={24} weight="regular" />
                    <strong>
                      PERÍODO:
                    </strong>
                    {item.period}
                  </p>
                </li>
                <li>
                  <p>
                    <GearSix size={24} weight="regular" />
                    <strong>DESCRIÇÃO</strong>
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: item.description?.html || "" }}></div>
                </li>
              </ul>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};
