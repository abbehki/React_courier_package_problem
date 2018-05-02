
const poster_reducer = (state = {}, action) => {
    let newState=Object.assign({},state);
    switch (action.type) {
      case "DATA":
        newState.flag=action.data;
        return newState ;
      case "ERROR":
        return newState;
      default:
          return state
    }
  }
  
  export default poster_reducer;