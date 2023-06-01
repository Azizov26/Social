import React from 'react';
import styles from './MessageItem.module.scss'

const MessageItem = (props) => (
  <div className={styles.message}>
    {props.message}
  </div>
);

export default MessageItem;
