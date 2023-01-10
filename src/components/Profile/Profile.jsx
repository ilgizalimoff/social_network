import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return <div > 
    <ProfileInfo profile={props.profile}/>
    <MyPostsContainer />   
            
  </div>
}
export default Profile; 