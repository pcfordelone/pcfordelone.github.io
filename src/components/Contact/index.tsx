import { AddressBook, Envelope, MapPin, WhatsappLogo } from 'phosphor-react'
import styles from './styles.module.scss'

export const Contact: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <AddressBook size={64} weight="thin" />
            Contact
          </h2>
        </header>
        <main>
          <div>
            <MapPin size={64} weight="light" />
            <p>São Paulo/SP - Brazil</p>
          </div>
          <div>
            <Envelope size={64} weight="light" />
            <a href="#">pcfordelone@gmail.com</a>
            <a href="#">pc@fordelone.com.br</a>
          </div>
          <div>
            <WhatsappLogo size={64} weight="light" />
            <a href="#">11 99635-1018</a>
          </div>
        </main>
      </div>
    </div>
  )
}
