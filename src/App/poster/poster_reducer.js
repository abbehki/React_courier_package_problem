
const poster_reducer = (state = {}, action) => {
    let newState=Object.assign({},state);
    switch (action.type) {
    case "DATA":
    newState.flag=action.data;
    return newState ;
    case "ERROR":
    console.log(action.data)
    return newState;
      default:
        return state
    }
  }
  
  export default poster_reducer;