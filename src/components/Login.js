import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

function Login(props) {
  const refContainer = useRef(props.users[0].id)

  return (
    <div className='login-container'>
      <div className='login'>
        <div className='form'>
          <h2>Login Form</h2>
          {props.users.length !== 0 && (
            <select ref={refContainer} className='selection-box'>
              {props.users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={() => props.setAuthedUser(refContainer.current.value)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  }
}

export default connect(mapStateToProps, { setAuthedUser })(Login)
