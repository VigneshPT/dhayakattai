import React from 'react';
import logo from './logo.svg';
import './App.css';
const _ = require('lodash');

const possibilities = [1,2,3,4,5,6,12];

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentDice: 0,
      rolling: false
    }
  }
  rollDhayakattai = () => {
    return _.sample(possibilities);
  }
  handleClickRoll = () => {
    this.setState({
      rolling:true
    })
    setTimeout(()=> {
      this.setState({
        currentDice: this.rollDhayakattai(),
        rolling: false
      })
    },500);
  }

  render() {
    const {rolling, currentDice} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {
            rolling ? (
              <p className="current-number">Rolling..</p>
            ) : (
              <p className="current-number">{currentDice}</p>
            )
          }
          
          <div>
            <button className="roll-button" onClick={this.handleClickRoll}>Roll Dhayakattai</button>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
