import { AddressBook, Envelope, MapPin, WhatsappLogo } from 'phosphor-react'
import styles from './styles.module.scss'

export const Contact: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <AddressBook size={64} weight="thin" />
            Contatos
          </h2>
        </header>
        <main>
          <div>
            <MapPin size={64} weight="light" />
            <p>São Paulo/SP - Brasil</p>
          </div>
          <div>
            <Envelope size={64} weight="light" />
            <a
              href="mailto:pcfordelone@gmail.com?subject=Contato via github.io"
              target="_blank"
            >
              pcfordelone@gmail.com
            </a>
            <a
              href="mailto:pc@fordelone.com.br?subject=Contato via github.io"
              target="_blank"
            >
              pc@fordelone.com.br
            </a>
          </div>
          <div>
            <WhatsappLogo size={64} weight="light" />
            <a
              href="https://api.whatsapp.com/send?phone=5511996351018&text=Ol%C3%A1%2C%20podemos%20conversar%3F"
              target="_blank"
            >
              +55 11 99635-1018
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
