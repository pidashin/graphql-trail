import React from 'react';
import styles from './page-container.module.scss'

const PageContainer = ({ children }) => {
  return (
    <>
      <div className={styles.bar} />
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}

export default PageContainer

