import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Loader from './Loader'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar'
import Leaderboard from './Leaderboard'

import { Switch, Route } from 'react-router-dom'
import QuestionDetailes from './QuestionDetailes'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    console.log('login page:', this.props)

    return this.props.loading ? (
      <Loader />
    ) : this.props.authedUser === null ? (
      <Login />
    ) : (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />

          <Route path='/questions/:qid' component={QuestionDetailes} />

          <Route path='/new-question' component={NewQuestion} />
        </Switch>
      </>
    )
  }
}
function mapStateToProps({ loading, authedUser }) {
  return {
    loading,
    authedUser,
  }
}

export default connect(mapStateToProps, { handleInitialData })(App)
