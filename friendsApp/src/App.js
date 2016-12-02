import React, { Component } from 'react';
import './App.css';
// import Friend from './components/Friend.js';
import FriendsList from './components/FriendsList.js';


class App extends Component {
  render() {
    return (
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
        <div className="friends">
          <FriendsList/>
        </div>
      </div>
    );
  }
}

export default App;
