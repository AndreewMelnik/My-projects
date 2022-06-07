import React, {Component} from 'react'
import'./QuizList.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import axios from 'axios'

export default class QuizList extends Component {

  state = {
    quizes: [],
    loading: true
  }

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }
  // Для обращения к бэкенду мы всегда используем "componentDidMount"
  async componentDidMount() {
    try {
      const response = await axios.get('https://react-quiz-a171e-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')

      const quizes = []

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test №${index + 1}`
        })
      })

      this.setState({
        quizes, loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={'QuizList'}>
        <div>
          <h1>Quiz list</h1>

          {
            this.state.loading
              ? <Loader />
              : <ul>
                  { this.renderQuizes() }
                </ul>
          }

        </div>
      </div>
    )
  }
}