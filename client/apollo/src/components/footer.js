import React from 'react'
import styles from './footer.module.scss'

import MenuItem from './menu-item';
import LogoutButton from '../containers/logout-button';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';


const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.inner}>
      <MenuItem to="/">
        <HomeIcon />
          Home
        </MenuItem>
      <MenuItem to="/cart">
        <CartIcon />
          Cart
        </MenuItem>
      <MenuItem to="/profile">
        <ProfileIcon />
          Profile
        </MenuItem>
      <LogoutButton />
    </div>
  </footer>
);

export default Footer