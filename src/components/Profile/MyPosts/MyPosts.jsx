import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post post={p.post} likesCount={p.likesCount}/> )

    let newPostEl = React.useRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostEl} 
                                value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
