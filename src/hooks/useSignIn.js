import { useApolloClient, useMutation } from '@apollo/client'
import useAuthStorage from './useAuthStorage'
import { AUTHENTICATE_USER } from '../graphql/mutations'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [authenticate, result] = useMutation(AUTHENTICATE_USER)

  const signIn = async ({ username, password }) => {
    const { data } = await authenticate({
      variables: {
        credentials: { username, password },
      },
    })

    const accessToken = data.authenticate.accessToken

    if (accessToken) {
      await authStorage.setAccessToken(accessToken)
      apolloClient.resetStore()
    }

    return data
  }

  return [signIn, result]
}

export default useSignIn
