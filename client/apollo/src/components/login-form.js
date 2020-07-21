import React, { useRef } from 'react';
import styles from './login-form.module.scss'

import Button from './button';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Curve } from '../assets/curve.svg';
import { ReactComponent as Rocket } from '../assets/rocket.svg';


const LoginForm = ({ login }) => {
  const inputRef = useRef()
  const handleLogin = (e) => {
    e.preventDefault()
    const email = inputRef.current.value
    login({
      variables: { email }
    })
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Curve className={styles.curve} />
        <Logo className={styles.logo} />
      </header>
      <Rocket className={styles.rocket} />
      <h1 className={styles.heading}>Space Explorer</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <input
          className={styles.input}
          required
          type="email"
          name="email"
          placeholder="Email"
          data-testid="login-input"
          ref={inputRef}
        />
        <Button type="submit">Log in</Button>
      </form>
    </div>
  )
}

export default LoginForm