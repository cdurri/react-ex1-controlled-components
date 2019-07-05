import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    saying: ''
  }

  updateScreenText = (saying) => {
  	this.setState(() => ({
    	saying: saying
    }))
  }

  render() {
    const { saying } = this.state;

	const showSaying = saying;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
            type="text" 
            placeholder="Say Something"
            value={saying}
			onChange={(event) => this.updateScreenText(event.target.value)} />
          <p className="echo">Echo:</p>
          <p>{showSaying}</p>
        </div>
      </div>
    );
  }
}

export default App;
