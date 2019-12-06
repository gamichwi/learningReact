import React, { Component } from "react";
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Gavin", age: 32 },
      { name: "Pari", age: 12 },
      { name: "Rosh", age: 26 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: "Gavin Williams", age: 32 },
        { name: newName, age: 12 },
        { name: "Roshan Ghadimian", age: 45 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Gavin Williams", age: 32 },
        { name: event.target.value, age: 28 },
        { name: "Roshan Ghadimian", age: 45 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Paritosh Dhebar")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Trail-Blazer-Flame-Emoji")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
