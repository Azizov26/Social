import React, {useRef} from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  const textValue = useRef()

  const onAddPost = () => {
    const text = textValue.current.value

    alert(text)
  }

  return (
    <div>
      <div>
        <textarea ref={textValue} />
        <button onClick={onAddPost}> Add </button>
      </div>
      <div className="content">
        {props.posts.map((post) => <Post message={post.messagePost} like={post.likeCount} key={post.id} />)}
      </div>
    </div>
  )
}

export default MyPosts;
