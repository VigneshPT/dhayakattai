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

  total = (firstNumber, secondNumber) => {
    
    if(firstNumber === 6 && secondNumber === 6){
      return 12;
    } else if(firstNumber === 6){
      return secondNumber;
    } else if(secondNumber === 6){
      return firstNumber;
    } else {
      return firstNumber + secondNumber;
    }
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
                <div className="dhayam-total">Rolling</div>
                <div className="dhayakattai-box box-one"><img style={{height:'100%'}} src={logo}/></div>
                <div className="dhayakattai-box box-two"><img style={{height:'100%'}} src={logo}/></div>
              </div>
            ) : (
            
              <div className="dhayams-container">
                {/* <p className="current-number">{currentDice}</p> */}
                <div className="dhayam-total">{this.total(currentFirstDhayam.numValue,currentSecondDhayam.numValue) || "Lets Roll"}</div>
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
