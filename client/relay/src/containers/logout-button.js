import React from 'react'
// import { useApolloClient } from '@apollo/react-hooks'
import styles from './logout-button.module.scss'

import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg'


const LogoutButton = () => {
  // const client = useApolloClient()

  return (
    <button
      className={styles.logoutBtn}
      onClick={() => {
        localStorage.clear()
        // client.writeData({ data: { isLoggedIn: false } })
      }}
    >
      <ExitIcon />
      Logout
    </button>
  )
}

export default LogoutButton