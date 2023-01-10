import React from 'react';
import Preloader from '../../commands/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }

    return (
    <div>
      <div className={s.imageBlock}>
        <img src="https://d.neoldu.com/gallery/2739_12.jpg" />
      </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} />
      <div className={s.profileInfo}>
        aboutMe={props.profile.aboutMe}
        <div>contacts: {props.profile.contacts.facebook}</div>
                      <div>{props.profile.contacts.vk}</div>
                      <div>{props.profile.contacts.twitter}</div>
                      <div>{props.profile.contacts.instagram}</div>
                      <div>{props.profile.contacts.github}</div>
      </div>
      ava+desc
    </div>
    </div>
  )
}
export default ProfileInfo;