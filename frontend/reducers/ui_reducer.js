let defaultState = {

}

const uiReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    default:
      return oldState;
  }
}

export default uiReducer;