import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <div> <NavLink to="/profile">Profile</NavLink></div>
      <div> <NavLink to="/messages">Messages</NavLink></div>
      <div> <NavLink to="/music">Music</NavLink></div>
      <div> <NavLink to="">Settings</NavLink></div>
    </nav>
  </>
)

export default Navbar;
