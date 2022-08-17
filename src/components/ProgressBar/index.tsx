import styles from "./styles.module.scss";

interface ProgressBarProps {
  completed: number;
  text?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  text,
}: ProgressBarProps) => {
  const progressBarLenght = [];

  for (let i = 1; i <= completed; i++) {
    progressBarLenght.push(<span className={styles.step} key={i}></span>);
  }

  return <div className={styles.progress_bar}>{progressBarLenght}</div>;
};
