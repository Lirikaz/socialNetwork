import profilePageReducer, {addPostActionCreator, deletePost} from "./profilePageReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, post: 'Hi, how are you', likesCount: 2},
        {id: 2, post: 'Good morning, boy', likesCount: 4},
    ]
}

it('new post should be added', () => {

    let action = addPostActionCreator("YOYO");
    let newState = profilePageReducer(state, action);
    expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {

    let action = addPostActionCreator("YOYO");
    let newState = profilePageReducer(state, action);
    expect(newState.posts[2].post).toBe("YOYO");
})

it('length of messages should be decrement after deleting', () => {

    let action = deletePost(1);
    let newState = profilePageReducer(state, action);
    expect(newState.posts.length).toBe(1);
})

it(`length of messages shouldn't be decrement after deleting if ID is incorrect`, () => {

    let action = deletePost(1000);
    let newState = profilePageReducer(state, action);
    expect(newState.posts.length).toBe(2);
})