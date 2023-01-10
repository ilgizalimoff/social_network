import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {Route, Routes } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            element={<DialogsContainer />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/news' element={<News />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes >
      </div>
    </div>
  );
}

export default App;
