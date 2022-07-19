import { AddressBook, Envelope, MapPin, WhatsappLogo } from "phosphor-react";
import { useProfile } from "../../contexts/useProfile";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  const { profile } = useProfile();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <h2>
            <AddressBook size={64} weight="thin" />
            Contacts
          </h2>
        </header>
        <main>
          <div>
            <MapPin size={64} weight="light" />
            <p>{profile?.from}</p>
          </div>
          <div>
            <Envelope size={64} weight="light" />
            <a
              href="mailto:pcfordelone@gmail.com?subject=Contato via github.io"
              target="_blank"
            >
              {profile?.email}
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
              {profile?.whatsapp}
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};
