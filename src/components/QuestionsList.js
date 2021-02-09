import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

export const QuestionsList = props => {
  const [activeTab, setActiveTab] = useState(true)

  return (
    <div>
      <div className='tab'>
        <button
          onClick={() => setActiveTab(true)}
          className={activeTab ? 'tablinks active' : 'tablinks'}
        >
          Un Answered Question
        </button>
        <button
          onClick={() => setActiveTab(false)}
          className={!activeTab ? 'tablinks active' : 'tablinks'}
        >
          Answered Question
        </button>
      </div>
      <ul className='questions-list'>
        {activeTab
          ? props.unAnsweredQuestionIds.map(id => (
              <li key={id}>
                <QuestionCard qid={id} />
              </li>
            ))
          : props.answeredQuestionsIds.map(id => (
              <li key={id}>
                <QuestionCard qid={id} />
              </li>
            ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  const user = users[authedUser]
  const answeredQuestionsIds = user.answers
    ? Object.keys(user.answers).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    : []

  const unAnsweredQuestionIds = Object.keys(questions)
    .filter(question => !answeredQuestionsIds.includes(question))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    unAnsweredQuestionIds,
    answeredQuestionsIds,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
