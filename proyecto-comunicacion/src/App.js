import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

//function App() {
//  return (
//    <h2>Paginita</h2>
//  );
//}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default App;