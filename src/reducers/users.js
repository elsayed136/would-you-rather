import { RECEIVE_USER, SET_QUESTION_TO_USER } from '../actions/users'

import { SAVE_ANSWER } from '../actions/shared'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        ...action.users,
      }

    case SET_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      }

    case SAVE_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      }

    default:
      return state
  }
}
