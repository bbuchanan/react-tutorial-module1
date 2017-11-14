import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!</p>
      <Person name="Max" age="39"/>
      <Person name="Annie" age="33">My Hobbies: Racing</Person>
      <Person name="Bitchassslutasswhore" age="23" />
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
