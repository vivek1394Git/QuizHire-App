import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import registerReducer from './register/registerReducer'

const rootReducer = combineReducers({
  register: registerReducer,
  user: userReducer
})

export default rootReducer
