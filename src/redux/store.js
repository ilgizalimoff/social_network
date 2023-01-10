import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state:
  {
      profilePage: {
        posts: [
            {id: 1, message:'Hi, how are you', likesCount: '77'},
            {id: 2, message:'Its my first post', likesCount: '21'},
            {id: 3, message:'Blabla', likesCount: '11'},
            {id: 4, message:'Dada', likesCount: '81'}
          ],
        newPostText: 'it-kamasutra.com' 
         
        },
      dialogsPage: {
        dialogs: [ 
            {id:1,name:'Dimych'},
            {id:2,name:'Andrey'},
            {id:3,name:'Sveta'},
            {id:4,name:'Sasha'},
            {id:5,name:'Viktor'},
            {id:6,name:'Valera'}
        ],  
        messages: [
            {id: 1, message:'Hi'},
            {id: 2, message:'How is your it-kamasutra'},
            {id: 3, message:'Yo'},
            {id: 4, message:'Yo'},
            {id: 5, message:'Yo'},    
        ],
        newMessageBody: 'idi na hui'
      },
      sidebar:{}
    },
  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer){
    this._callSubscriber=observer;
  },
  getState(){
    return this._state;
  },

  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar=sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}



export default store;
window.store = store; 
