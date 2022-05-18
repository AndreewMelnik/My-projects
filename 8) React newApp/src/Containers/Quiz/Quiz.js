import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'What color is sky?',
                rightAnswerId: 2,
                answers:[
                    {text:'Question 1', id:1},
                    {text:'Question 2', id:2},
                    {text:'Question 3', id:3},
                    {text:'Question 4', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {

    }
    render() {
        return (
            <div className="Quiz">
                <div className ="QuizWrapper">
                  <h1>Quiz</h1>
                  
                    <ActiveQuiz
                      answers={this.state.quiz[0].answers}
                      question={this.state.quiz[0].question}
                      onAnswerClick={this.onAnswerClickHandler}
                      />
                </div>
            </div>
        )
    }
}

export default Quiz;