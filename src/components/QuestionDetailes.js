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
            {props.isAnswered && (
              <>
                <h2>{`${props.optionOneVotes} out of ${props.totalVotes}`}</h2>
                <label htmlFor='file'>
                  {((props.optionOneVotes / props.totalVotes) * 100).toFixed()}%
                </label>
                {` `}
                <progress
                  id='file'
                  value={(props.optionOneVotes / props.totalVotes) * 100}
                  max='100'
                >
                  {(props.optionOneVotes / props.totalVotes) * 100}
                </progress>
              </>
            )}
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
            {props.isAnswered && (
              <>
                <h3>{`${props.optionTwoVotes} out of ${props.totalVotes}`}</h3>
                <label htmlFor='file'>
                  {((props.optionTwoVotes / props.totalVotes) * 100).toFixed()}%
                </label>
                {` `}
                <progress
                  id='file'
                  value={(props.optionTwoVotes / props.totalVotes) * 100}
                  max='100'
                >
                  {(props.optionTwoVotes / props.totalVotes) * 100}
                </progress>
              </>
            )}
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
  const optionTwoVotes = question.optionTwo.votes.length
  const optionOneVotes = question.optionOne.votes.length
  const totalVotes = optionTwoVotes + optionOneVotes
  return {
    question,
    user,
    authedUser,
    isAnswered,
    selectedOption,
    isNotExist: false,
    totalVotes,
    optionOneVotes,
    optionTwoVotes,
  }
}

const mapDispatchToProps = { handleSaveAnswer }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailes)
