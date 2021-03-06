import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBsQCNyVF3XAB-VpzDxK9R9KPNvgvk7_EU',
      authDomain: 'woven-scene-713.firebaseapp.com',
      databaseURL: 'https://woven-scene-713.firebaseio.com',
      projectId: 'woven-scene-713',
      storageBucket: 'woven-scene-713.appspot.com',
      messagingSenderId: '79026104258'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
