import { ProfilePage } from './pages/ProfilePage'

import '../src/styles/global.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

function App() {
  return (
    <ApolloProvider client={client}>
      <ProfilePage />
    </ApolloProvider>
  )
}

export default App
