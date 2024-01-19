import LoadingImg from '../../assets/loading.svg'

import styles from './styles.module.scss'

export const Loading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={LoadingImg} alt="Loading Image" />
        <h3>Carregando...</h3>
      </div>
    </div>
  )
}
