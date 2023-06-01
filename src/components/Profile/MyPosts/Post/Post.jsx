import React from 'react';
import styles from './Post.module.scss'

const Post = (props) => (
  <>
    <div className={styles.postContent}>
      <div className={styles.postContent__post} />
      <div className={styles.postContent__content}>
        <div> {props.message}</div>
        <span>{props.like} like</span>
      </div>
    </div>
  </>
)

export default Post;
