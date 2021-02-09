import { SHOW_LOADER, HIDE_LOADER } from '../actions/loading'

export default function loading(state = true, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return true
    case HIDE_LOADER:
      return false
    default:
      return state
  }
}
