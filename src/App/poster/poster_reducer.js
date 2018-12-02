
import ACTION from '../../actionConstant';
const poster_reducer = (state = {}, action) => {
    let newState=Object.assign({},state);
    switch (action.type) {
      case ACTION.CHECK.LOAD_DATA:
        newState.data=action.data.data;
        return newState ;
      case "ERROR":
        return newState;
      default:
          return state
    }
  }
  
  export default poster_reducer;