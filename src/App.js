import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.react'
import Dashboard from './Pages/Dashboard'
import Timeline from './Pages/Timeline'
import Media from './Pages/Media'
import Card from './Pages/Card'
import Footer from './Pages/Footer'





class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CBN THAILAND</h1>
        </header>
        <Timeline/>
        <p className="App-intro">
          นี่เป็นไซต์ <code>สนับสนุนเรา</code> ของเราในการหัดโปรแกรมต่างๆ.
        </p>
        <Header/>
        <Dashboard/>
        <p></p>
        <Media/>
        <br></br>
        <Card/>
        <Footer/>
      </div>
    );
  }
}

export default App;
