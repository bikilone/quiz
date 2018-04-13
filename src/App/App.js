import React, { Component } from 'react';
import './App.css';

import html from "../Data/html";


const length = html.length;

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      i: 0,
      p: false
    }
  }

nextPage = (e) => {
    if (this.state.i === length-1) {
      this.setState((prevState, props) => {
        return {i: prevState.i,  p: !prevState.p}
      })
    } else {
    this.setState((prevState, props) => {
      return {i: prevState.i + 1,  p: !prevState.p}
    })
} }
// showAnswer = (e) => {
//     this.setState((prevState, props) => {p: !prevState.p}
//     )
// }

showAnswer = (e) => {
  this.setState({
    p: !this.state.p
  })
}

renderAnswer = () => {
  if ( this.state.p ) {
    return html[this.state.i].answer;
  } else {
    return "";
  }
}
previousPage = () => {
  if (this.state.i === 0) {
    this.setState((prevState, props) => {
      return {i: prevState.i,  p: !prevState.p}
    })
  } else {
  this.setState((prevState, props) => {
    return {i: prevState.i - 1,  p: !prevState.p}
  })
}}

  render() {
    console.log(this.state.p);
    console.log(this.state.i);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BIT-QUIZ</h1>
        </header>
        <div className="question">
          <p>{html[this.state.i].question}</p>
        </div>
        <div className="answer">
          <textarea name="" id="" cols="30" rows="10" placeholder="Write your answer here!"></textarea>
        </div>
        <button className="check-answer" onClick={this.showAnswer}>Submit</button>
        <div className="correct-answer">
          <p>{this.renderAnswer()}</p>
        </div>
        <button onClick={this.previousPage}>Go back!</button>
        <button className="next-question" onClick={this.nextPage}>Next question</button>
      </div>
    );
  }
}

export default App;
