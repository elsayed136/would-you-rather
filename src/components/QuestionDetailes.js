import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'

export const QuestionDetailes = props => {
  console.log(props)

  if (props.isNotExist) {
    return <h1 className='center'>Question Not Found</h1>
  }
  return (
    <div className='question-detailes'>
      <div className='card'>
        <div className='avatar'>
          <img src={props.user.avatarURL} alt='elsayed' />
        </div>

        <div>
          <h1>{props.user.name}</h1>
          <h2 className='title'>Would you rather?</h2>
          <button
            disabled={props.isAnswered}
            className={
              props.selectedOption === 'optionOne' ? 'btn1 selected' : 'btn1'
            }
            onClick={() =>
              props.handleSaveAnswer(
                props.authedUser,
                props.question.id,
                'optionOne'
              )
            }
          >
            <h3>{props.question.optionOne.text}</h3>
          </button>
          <button
            disabled={props.isAnswered}
            className={
              props.selectedOption === 'optionTwo' ? 'btn2 selected' : 'btn2'
            }
            onClick={() =>
              props.handleSaveAnswer(
                props.authedUser,
                props.question.id,
                'optionTwo'
              )
            }
          >
            <h3>{props.question.optionTwo.text}</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
  const { qid } = props.match.params
  const question = questions[qid]

  if (!question) {
    return {
      isNotExist: true,
    }
  }

  const user = users[question.author]
  const isAnswered = Object.keys(users[authedUser].answers).includes(qid)
  const selectedOption = users[authedUser].answers[qid]
  return {
    question,
    user,
    authedUser,
    isAnswered,
    selectedOption,
    isNotExist: false,
  }
}

const mapDispatchToProps = { handleSaveAnswer }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailes)
