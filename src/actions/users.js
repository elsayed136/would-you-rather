export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_QUESTION_TO_USER = 'SET_QUESTION_TO_USER'

export function setQuestionToUser(question) {
  return {
    type: SET_QUESTION_TO_USER,
    question,
  }
}
export function receiceUsers(users) {
  return {
    type: RECEIVE_USER,
    users,
  }
}
