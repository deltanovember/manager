import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
