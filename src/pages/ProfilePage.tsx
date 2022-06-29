import { Cover } from '../components/Cover'
import { Experience } from '../components/Experience'
import { Profile } from '../components/Profile/index'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Education } from '../components/Education/index'
import { useListProfileWithProjectsQuery } from '../graphql/generated'
import { Contact } from '../components/Contact'

export const ProfilePage: React.FC = () => {
  const { data, loading } = useListProfileWithProjectsQuery({
    variables: {
      id: 'cl4urdvh6uicg0dkdc51du7ld',
    },
  })

  console.log(data?.profile)

  return (
    <>
      <Cover />
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}
