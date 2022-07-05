import { ProfilePage } from './pages/ProfilePage'

import '../src/styles/global.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { ProfileProvider } from './contexts/ProfileContext'

function App() {
  return (
    <ApolloProvider client={client}>
      <ProfileProvider>
        <ProfilePage />
      </ProfileProvider>
    </ApolloProvider>
  )
}

export default App
