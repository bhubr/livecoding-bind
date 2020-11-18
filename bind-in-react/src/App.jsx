import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showThis = this.showThis.bind(this);
  }

  showThis() {
    // Sans le bind, le console.log va afficher `undefined`
    // quand on appuie sur le bouton pour provoquer l'appel
    // de showThis
    console.log(this);
  }

  // Avec cette syntaxe, pas besoin de bind
  showThisArrow = () => {
    console.log(this);
  }

  render() {
    this.showThis();
    return (
      <div className="App">
        Hello
        <button type="button" onClick={this.showThis}>Show this</button>
        <button type="button" onClick={this.showThisArrow}>Show this (arrow func)</button>
      </div>
    );
  }
}

export default App;
