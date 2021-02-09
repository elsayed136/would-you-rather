import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const QuestionCard = props => {
  return (
    <div className='card'>
      <img
        src={props.user.avatarURL}
        alt='elsayed'
        style={{ width: '100%', height: '200px' }}
      />
      <h1>{props.user.name}</h1>
      <p className='title'>Would you rather?</p>
      <p>{props.question.optionOne.text}</p>
      <p>
        <Link to={`questions/${props.question.id}`}>
          <button>View Question</button>
        </Link>
      </p>
    </div>
  )
}

const mapStateToProps = ({ users, questions }, { qid }) => {
  const question = questions[qid]
  const user = users[question.author]
  return {
    question,
    user,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard)
