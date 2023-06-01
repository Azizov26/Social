import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.scss'

const DialogItem = (props) => (
  <div className={styles.dialogs}>
    <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
  </div>
)

export default DialogItem;
