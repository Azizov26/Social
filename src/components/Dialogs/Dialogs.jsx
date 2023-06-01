import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.scss'
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => (
  <div className={styles.dialogsWrapper}>
    <div className={styles.dialogsWrapper__dialogs}>
      {props.people.map((user) => <DialogItem name={user.name} id={user.id} key={user.id} />)}
    </div>
    <div className={styles.dialogWrapper__messages}>
      {props.messages.map((item) => <MessageItem message={item.message} key={item.id} />)}
    </div>
  </div>
)

export default Dialogs;
