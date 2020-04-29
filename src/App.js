import React from 'react';
import logo from './logo.svg';
import './App.css';
const _ = require('lodash');

const possibilities = [
  { numValue: 1, value : "●" }, 
  { numValue: 2, value: "●                              ●" },
  { numValue: 3, value: "●               ●              ●"}, 
  { numValue: 6, value:  " "}
];


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentFirstDhayam: 0,
      currentSecondDhayam: 0,
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
        currentFirstDhayam: this.rollDhayakattai(),
        currentSecondDhayam: this.rollDhayakattai(),
        rolling: false
      })
    },1000);
  }

  render() {
    const {rolling, currentFirstDhayam, currentSecondDhayam} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {
            rolling ? (
              <div className="dhayams-container">
                {/* <p className="current-number">Rolling..</p> */}
                <div className="dhayakattai-box box-one">rolling</div>
                <div className="dhayakattai-box box-two">rolling</div>
              </div>
            ) : (
              <div className="dhayams-container">
                {/* <p className="current-number">{currentDice}</p> */}

                <div className="dhayakattai-box box-one">{currentFirstDhayam.value}</div>
                <div className="dhayakattai-box box-two">{currentSecondDhayam.value}</div>
              </div>
            )
          }
          
          <div>
            <button className="roll-button" disabled={rolling} onClick={this.handleClickRoll}>Roll Dhaya kattai</button>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
