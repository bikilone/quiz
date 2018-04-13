import React, { Component } from 'react';
import './App.css';

import html from "../Data/html"

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      i: 0,
      p: false
    }
  }

changeState = (e) => {
    this.setState((prevState, props) => {
      return {i: prevState.i ++,  p: !prevState.p}
    })
} 
// showAnswer = (e) => {
//     this.setState((prevState, props) => {p: !prevState.p}
//     )
// }

showAnswer = (e) => {
  this.setState({
    p: !this.state.p
  })
}

showAnsweR = () => {
  if ( this.state.p ) {
    return html[this.state.i].answer;
  } else {
    return "";
  }
}

  render() {
    console.log(this.state.p);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BIT-QUIZ</h1>
        </header>
        <div className="question">
          <p>{html[this.state.i].question}</p>
        </div>
        <div className="answer">
          <p>Odgovor</p>
        </div>
        <button className="check-answer" onClick={this.showAnswer}>Submit</button>
        <div className="correct-answer">
          <p>{this.showAnsweR()}</p>
        </div>
        <button className="next-question" onClick={this.changeState}>Next question</button>
      </div>
    );
  }
}

export default App;
