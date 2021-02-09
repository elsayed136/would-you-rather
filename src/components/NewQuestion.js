import { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

export const NewQuestion = props => {
  const optionOne = useRef('')
  const optionTwo = useRef('')

  function submit() {
    props.handleAddQuestion(
      optionOne.current.value,
      optionTwo.current.value,
      props.authedUser
    )
  }
  return (
    <div className='new-question'>
      <div className='imgcontainer'>
        {/* <img src="img_avatar2.png" alt="Avatar" className="avatar"> */}
      </div>

      <h1 className='center'>would you rather?</h1>
      <div className='container'>
        <label htmlFor='uname'>
          <b>Option one</b>
        </label>
        <input
          ref={optionOne}
          type='text'
          placeholder='Enter Option one'
          name='uname'
          required
        />

        <label htmlFor='psw'>
          <b>Option Two</b>
        </label>
        <input
          ref={optionTwo}
          type='text'
          placeholder='Enter Option Two'
          name='psw'
          required
        />

        <Link to='/'>
          <button type='submit' onClick={submit}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

const mapDispatchToProps = { handleAddQuestion }

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
