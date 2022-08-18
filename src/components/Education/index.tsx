import { Student } from "phosphor-react";
import { useListEducationsQuery } from "../../graphql/generated";
import styles from "./styles.module.scss";

export const Education: React.FC = () => {
  const {data} = useListEducationsQuery();

  return (
    <div className={styles.wrapper}>      
      <div className={styles.container}>
        <header>
          <h2>
            <Student size={64} weight="thin" />
            Education
          </h2>
        </header>
        <main>
          {data?.educations && data.educations.map((item) =>           
            <div key={item.id}>
              <h3>{item.name}</h3>
              <ul>
                <li>
                  <strong>course:</strong> {item.course}
                </li>
                <li>
                  <strong>description:</strong>
                  {item.description}
                </li>
                <li>
                  <strong>status:</strong> {item.period}
                </li>
              </ul>
            </div>
          )}          
        </main>
      </div>
    </div>
  );
};
