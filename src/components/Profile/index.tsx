import styles from './styles.module.scss'
import ProfileImg from '../../assets/profile-img.jpg'
import { UserCircle } from 'phosphor-react'
import { forwardRef } from 'react'
import { Profile as ProfileData } from '../../graphql/generated'
import { format } from 'date-fns'

interface IProfileProps {
  profile: ProfileData | undefined
}

export const Profile = forwardRef<HTMLDivElement, IProfileProps>(
  ({ profile }, ref) => {
    return (
      <div ref={ref} className={styles.wrapper}>
        <div className={styles.container}>
          <header>
            <h2>
              <UserCircle size={64} weight="thin" />
              Apresentação
            </h2>
          </header>
          <main>
            <img src={ProfileImg} alt="Profile Image" />
            <p>{profile?.presentation}</p>

            <div>
              <ul>
                <li>
                  <strong>Nome Completo:</strong> {profile?.name}
                </li>
                <li>
                  <strong>Aniversário:</strong>{' '}
                  {format(
                    new Date(
                      new Date(`${profile?.birthday.toString()}${'T12:00'}`),
                    ),
                    'dd/MM/yyyy',
                  )}
                </li>
                <li>
                  <strong>E-mail:</strong> {profile?.email}
                </li>
                <li>
                  <strong>Trabalho:</strong> {profile?.job}
                </li>
                <li>
                  <strong>Natural de:</strong> {profile?.from}
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    )
  },
)
