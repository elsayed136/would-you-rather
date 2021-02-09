import { receiceUsers, setQuestionToUser } from './users'
import { receiceQuestions, addQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/_DATA'

import { showLoader, hideLoader } from '../actions/loading'

export const SAVE_ANSWER = 'SAVE_ANSWER'

const AUTHED_ID = 'tylermcginnis'

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then(question => {
      dispatch(addQuestion(question))
      dispatch(setQuestionToUser(question))
    })
  }
}

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoader())
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiceUsers(users))
        dispatch(receiceQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoader())
      }
    )
  }
}

export function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return dispatch => {
    dispatch(showLoader())
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveAnswer({ authedUser, qid, answer }))
      dispatch(hideLoader())
    })
  }
}
