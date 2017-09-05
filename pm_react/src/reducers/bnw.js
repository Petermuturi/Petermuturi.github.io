import * as Const from '../utils/constants';

const bnwReducer = (state={}, action)=> {
  switch (action.type) {
    case Const.SET_BNW:
      return {...state, ...action.data}
    default:
      return state;
  }
}

export default bnwReducer;
