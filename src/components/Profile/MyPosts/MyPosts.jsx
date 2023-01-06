import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import { PureComponent } from 'react';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field name={"newPostText"} component={Textarea}
                     validate={[required, maxLength10]} placeholder={"Post message"}/>
          </div>
          <div>
              <button>Add post</button>
          </div>
      </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = React.memo(props => {

    let postsElements = props.posts.map( p => <Post post={p.post} likesCount={p.likesCount}/> )

    let newPostEl = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;
