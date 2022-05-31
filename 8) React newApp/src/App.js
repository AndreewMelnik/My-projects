import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Routes} from "react-router-dom";
import Quiz from './Containers/Quiz/Quiz'
import QuizList from './Containers/QuizList/QuizList'
import Auth from './Containers/Auth/Auth'
import QuizCreator from './Containers/QuizCreator/QuizCreator'


class App extends Component {
  render() {
    return (
      <Layout>
         <Routes>
            <Route path="/auth" component={Auth}/>
            <Route path="/quiz-creator" component={QuizCreator}/>
            <Route path="/quiz/:id" component={Quiz}/>
            <Route path="/" component={QuizList}/>
         </Routes>
      </Layout>
    )
  }
}


export default App
