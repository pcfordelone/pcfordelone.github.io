import { Student } from "phosphor-react";
import styles from "./styles.module.scss";

export const Education: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <Student size={64} weight="thin" />
            Educação / Cursos
          </h2>
        </header>
        <main>
          <div>
            <h3>Rocketseat</h3>
            <ul>
              <li>
                <strong>curso:</strong> Ignite
              </li>
              <li>
                <strong>descrição:</strong> Curso voltado a especialização em
                React e Node JS contendo as tecnologias mais modernas e exigidas
                no mercado.
              </li>
              <li>
                <strong>período:</strong> em andamento
              </li>
            </ul>
          </div>
          <div>
            <h3>Full Cycle</h3>
            <ul>
              <li>
                <strong>curso:</strong> Full Cycle
              </li>
              <li>
                <strong>descrição:</strong> Curso prático voltado a criação de
                um Aplicativo completo utilizando microsserviços e as
                tecnologias mais atuais e utilizadas no mercado.
              </li>
              <li>
                <strong>período:</strong> Em andamento
              </li>
            </ul>
          </div>
          <div>
            <h3>School of Net</h3>
            <ul>
              <li>
                <strong>curso:</strong> Diversos
              </li>
              <li>
                <strong>descrição:</strong> Mini cursos em várias tecnologias
                como básico a avançado em JavaScript, ES6, NodeJS, React,
                Laravel, entre outros.
              </li>
              <li>
                <strong>período:</strong> 2016 até o momento
              </li>
            </ul>
          </div>
          <div>
            <h3>Code Education</h3>
            <ul>
              <li>
                <strong>curso:</strong> Trilhando o caminho com Frameworks
              </li>
              <li>
                <strong>descrição:</strong> Curso voltado a Frameworks em PHP
                como Laravel, Apigility e Symphony 2. Curso incluir também um
                módulo inicial de Git.
              </li>
              <li>
                <strong>período:</strong> Concluído em 2016
              </li>
            </ul>
          </div>
          <div>
            <h3>Code Education</h3>
            <ul>
              <li>
                <strong>curso:</strong> Trilhando caminho com PHP
              </li>
              <li>
                <strong>descrição: </strong> Curso contendo PHP Foundation,
                Orientação a Objetos, Design Patterns entre outros.
              </li>
              <li>
                <strong>período:</strong> Concluído em 2015
              </li>
            </ul>
          </div>
          <div>
            <h3>Universidade Anhembi Morumbi</h3>
            <ul>
              <li>
                <strong>curso:</strong> Superior Design Digital
              </li>
              <li>
                <strong>descrição: </strong> Curso superior focado em design e
                devolvimento de sistemas
              </li>
              <li>
                <strong>período:</strong> Não concluído
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};
