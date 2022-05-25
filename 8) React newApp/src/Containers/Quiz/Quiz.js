import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
      results: {}, // { [id]: 'success' 'error' }
      isFinished: false,
      activeQuestion: 0,
      answerState: null, // { [id]: 'success' 'error' }
        quiz: [
            {
                question: 'What color is sky?',
                rightAnswerId: 2,
                id: 1,
                answers:[
                          {text:'Question 1', id:1},
                          {text:'Question 2', id:2},
                          {text:'Question 3', id:3},
                          {text:'Question 4', id:4}
                ]
            },
            {
                question: 'In what year was St. Petersburg founded?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                  {text: '1700', id: 1},
                  {text: '1702', id: 2},
                  {text: '1703', id: 3},
                  {text: '1803', id: 4}
              ]
            }
        ]
    }
        


    onAnswerClickHandler = answerId => {
      const question = this.state.quiz[this.state.activeQuestion]
      const results = this.state.results
      if (question.rightAnswerId === answerId) {
        if (!results[question.id]) {
          results[question.id] = '__success'
        }
        this.setState({
          answerState: {[answerId]: '__success'},
          results
        })
  
        const timeout = window.setTimeout(() => {
          if (this.isQuizFinished()) {
            this.setState({
              isFinished: true
            })
          } else {
            results[question.id] ='__error'
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              answerState: null
            })
          }
          window.clearTimeout(timeout)
        }, 1000)
      } else {
        results[question.id] = '__error'
        this.setState({
          answerState: {[answerId]: '__error'},
          results
        })
      }

      
    }

    isQuizFinished() {
      return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    
    retryHandler = () => {
      this.setState({
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {}
      })
    }

    render() {
        return (
            <div className="Quiz">
                <div className ="QuizWrapper">
                  <h1>Quiz</h1>
                  {
                      this.state.isFinished
                      ? <FinishedQuiz
                          results={this.state.results}
                          quiz={this.state.quiz}
                          onRetry={this.retryHandler}
                          />
                      : <ActiveQuiz
                      answers={this.state.quiz[this.state.activeQuestion].answers}
                      question={this.state.quiz[this.state.activeQuestion].question}
                      onAnswerClick={this.onAnswerClickHandler}
                      quizLength={this.state.quiz.length}
                      answerNumber={this.state.activeQuestion + 1}
                      state={this.state.answerState}
                      />
                  }
                </div>
            </div>
        )
    }
}

export default Quiz;