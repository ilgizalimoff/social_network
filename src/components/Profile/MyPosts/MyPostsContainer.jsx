import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProsp=(state)=>{
  return {
      posts: state.profilePage.posts, 
      newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
      addPost: () => {
        dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
        let action =updateNewPostTextActionCreator(text);
        dispatch(action);      
      }
  }
}

const MyPostsContainer=connect(mapStateToProsp, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;