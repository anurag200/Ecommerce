const initalReducer = {
  user: [],
}
export default (state = initalReducer, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let temp = state.user
      temp.push(action.payload)
      console.log(temp)
      return {
        ...state,
        user: temp,
      }
    case 'DELETE_DATA':
      let temps = state.user
      let filterData = temps.filter((cur) => {
        return cur.id != action.payload
      })

      return {
        ...state,
        user: filterData,
      }
    default:
      return state
  }
}
