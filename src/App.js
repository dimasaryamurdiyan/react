import React, { Component } from 'react';
import Navbar from './MyAppBar.js';
import Map from './SimpleMap';
import { Link } from 'react-router-dom';
import Main from './components/page/Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/home'> Home </Link>&nbsp;&nbsp;
        <Link to='/profile'> Profile </Link>&nbsp;&nbsp;
        <Link to='/portofolio'> Portofolio </Link>&nbsp;&nbsp;
        <Link to='/contact'> Contact </Link>&nbsp;&nbsp;
        <hr/>
        <Main/>
      </div>
    );
  }
}

export default App;
