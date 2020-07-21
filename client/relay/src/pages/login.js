import React from 'react'
import { useMutation } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'
import { AUTH_TOKEN } from '../constants'

import Loading from '../components/loading'
import LoginForm from '../components/login-form'

const LOGIN_USER = graphql`
  mutation loginMutation($email: String!) {
    login(email: $email)
  }
`

console.log(useMutation)

const Login = () => {
  // const client = useApolloClient()

  // const [login, { loading, error }] = useMutation(LOGIN_USER, {
  //   onCompleted({ login }) {
  //     localStorage.setItem(AUTH_TOKEN, login)
  //     client.writeData({ data: { isLoggedIn: true } })
  //   }
  // })

 

  const [commit, isInFlight] = useMutation(LOGIN_USER)

  const handleLogin = (email) => {
    const mutationConfig = {
      variables: { email },
      onCompleted({ login }, err) {
        localStorage.setItem(AUTH_TOKEN, login)
      }
    }

    commit(mutationConfig)
  }


  if (isInFlight) {
    return <Loading />
  }

  return <LoginForm login={handleLogin} />
}

export default Login