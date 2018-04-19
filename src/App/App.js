import React, { Component } from 'react';
import './App.css';

import finalData from "../Data/html";


const length = finalData.length;

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      i: 0,
      p: false,
      answer: ""
    }
  }

nextPage = (e) => {
    if (this.state.i === length-1) {
      this.setState((prevState, props) => {
        return {i: prevState.i,  p: !prevState.p}
      })
    } else {
    this.setState((prevState, props) => {
      return {i: prevState.i + 1,  p: false, answer: ""}
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
    return finalData[this.state.i][1];
  } else {
    return "";
  }
}

answer = (e) => {
  this.setState({
    answer: e.target.value
  })
}
previousPage = () => {
  if (this.state.i === 0) {
    this.setState((prevState, props) => {
      return {i: prevState.i,  p: !prevState.p}
    })
  } else {
  this.setState((prevState, props) => {
    return {i: prevState.i - 1,  p: false}
  })
}}

onKeyUp = (e) => {

  if (e.keyCode === 39) {
    this.nextPage();
  } else if (e.keyCode === 13) {
    this.showAnswer();
  } else if (e.keyCode === 37) {
    this.previousPage()
  }
}



componentDidMount() {
  document.addEventListener("keyup", this.onKeyUp);
}

removeQuestion = ()=> {
  var questions = localStorage.getItem("questions") || "[]";
  questions = JSON.parse(questions);
  questions.push(finalData[this.state.i][2]);
  questions = JSON.stringify(questions);
   localStorage.setItem("questions", questions)
   this.nextPage();
}

  render() {
    
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BIT-QUIZ</h1>
        </header>
        <p>{(this.state.i/finalData.length)*100 + "%"}</p>
        <div className="question">
          <p>{"#" + finalData[this.state.i][2] + "\n"  + finalData[this.state.i][0]}</p>
        </div>
        <div className="answer">
          <textarea name="" id="" cols="30" rows="10" placeholder="Write your answer here!" value={this.state.answer} onChange={this.answer}></textarea>
        </div>
        <button className="check-answer" onClick={this.showAnswer}>Submit</button>
        <button onClick={this.removeQuestion}>I don't want to se this question ever again!!!</button>
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
