import React from 'react'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { logoutAuthedUser } from '../actions/authedUser'

export const Navbar = props => {
  return (
    <div className='topnav'>
      <div>{props.user.name}</div>
      <div>
        <NavLink activeClassName='active' exact to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' to='/leaderboard'>
          Leaderboard
        </NavLink>
        <NavLink activeClassName='active' to='/new-question'>
          New Question
        </NavLink>
      </div>
      <div className='logout' onClick={props.logoutAuthedUser}>
        Log Out
      </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser],
})

const mapDispatchToProps = { logoutAuthedUser }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
