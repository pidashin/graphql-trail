import React from 'react'
import { Link } from 'react-router-dom';
import styles from './menu-item.module.scss'

const MenuItem = (props) => <Link className={styles.menuItem} {...props} />

export default MenuItem;