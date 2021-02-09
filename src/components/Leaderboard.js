import React from 'react'
import { connect } from 'react-redux'

export const Leaderboard = props => {
  return (
    <table className='content-table'>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Questions</th>
          <th>Answers</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td className='center-text'>{user.questions.length}</td>
            <td>{Object.keys(user.answers).length}</td>
            <td>{user.questions.length + Object.keys(user.answers).length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = ({ users }) => {
  const usersSortWithRank = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  )

  return {
    users: usersSortWithRank,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
