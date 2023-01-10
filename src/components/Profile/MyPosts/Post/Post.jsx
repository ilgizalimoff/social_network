import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
      <img src='https://bruevanatalia.ru/wp-content/uploads/2017/05/129_james-cameron_avatar-1000x600.jpg'/>
        {props.message}
        <div>
        <span>{props.likesCount}</span>
        </div>
      </div>
    
}
export default Post;