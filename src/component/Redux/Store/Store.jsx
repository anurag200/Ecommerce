import user from '../Reducer/index'
import { combineReducers, createStore } from 'redux'

const rootseleter = combineReducers({
  infodata: user,
})
const Store = createStore(rootseleter)
export default Store
