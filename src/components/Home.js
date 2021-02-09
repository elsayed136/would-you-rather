import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logoutAuthedUser } from '../actions/authedUser'

import QuestionsList from './QuestionsList'

export class Home extends Component {
  render() {
    return (
      <div>
        <QuestionsList />
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

const mapDispatchToProps = { logoutAuthedUser }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
