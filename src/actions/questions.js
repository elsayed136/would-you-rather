export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

// export function saveAnswer(id) {
//   return {
//     type: SAVE_ANSWER,
//     id,
//   }
// }

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}
export function receiceQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
