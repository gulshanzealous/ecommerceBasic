import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import { TopBar } from './Components'

class App extends Component {

  componentWillMount(){
    // firebase.initializeApp({
    //         apiKey: "AIzaSyD8LXVPLzfcfyYqxxFfUoWxKDQtm6ISea0",
    //         authDomain: "one-commerce.firebaseapp.com",
    //         databaseURL: "https://one-commerce.firebaseio.com",
    //         projectId: "one-commerce",
    //         storageBucket: "one-commerce.appspot.com",
    //         messagingSenderId: "765957086133"
    // })
  }

  render() {
    return (
      <div>
        <TopBar />
        { this.props.children }

      </div>
    );
  }
}

export default App;
