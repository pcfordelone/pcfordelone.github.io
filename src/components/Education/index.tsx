import { Student } from "phosphor-react";
import styles from "./styles.module.scss";

export const Education: React.FC = () => {
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
          <div>
            <h3>Rocketseat</h3>
            <ul>
              <li>
                <strong>course:</strong> Ignite
              </li>
              <li>
                <strong>description:</strong>
                Specialization course in React and Node JS containing the most
                modern and required technologies in the market.
              </li>
              <li>
                <strong>status:</strong> in progress
              </li>
            </ul>
          </div>
          <div>
            <h3>Full Cycle</h3>
            <ul>
              <li>
                <strong>course:</strong> Full Cycle
              </li>
              <li>
                <strong>description:</strong> Practical course aimed at creating
                a complete Application using microservices and the most
                up-to-date technologies on the market.
              </li>
              <li>
                <strong>status:</strong> in progress
              </li>
            </ul>
          </div>
          <div>
            <h3>School of Net</h3>
            <ul>
              <li>
                <strong>course:</strong> Several
              </li>
              <li>
                <strong>description:</strong> Short courses in various
                technologies such as basic to advanced in JavaScript, ES6,
                NodeJS, React, Laravel, among others.
              </li>
              <li>
                <strong>status:</strong> since 2016
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
                <strong>description:</strong> Course focused on Frameworks in
                PHP such as Laravel, Apigility and Symphony 2. Course also
                include a initial Git module.
              </li>
              <li>
                <strong>status:</strong> completed in 2016
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
                <strong>description:</strong> Course containing PHP Foundation,
                Object Orientation, Design Patterns among others.
              </li>
              <li>
                <strong>status:</strong> completed in 2015
              </li>
            </ul>
          </div>
          <div>
            <h3>Universidade Anhembi Morumbi</h3>
            <ul>
              <li>
                <strong>course:</strong> Graduation in Design Digital
              </li>
              <li>
                <strong>description: </strong> Degree in graphic design and web
                development
              </li>
              <li>
                <strong>período:</strong> Not completed
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};
