import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.scss';

const Profile = (props) => (
  <>
    <div className={styles.content}>
      <div className={styles.imgProfile} />
      <div>
            ava + desc
      </div>
      <MyPosts posts={props.posts} />
    </div>
  </>
)

export default Profile;
