import { handleActions } from 'redux-actions';
import * as Actions from "../constants/actions";

const initialState: HelloWorldStoreState = [{
  id: 0,
  text: "test"
}];

export default handleActions<HelloWorldStoreState, HelloWorldData>({
  [Actions.HELLO_WORLD]: (state, action) => {
    return [{
      id: state.reduce((maxId, test) => Math.max(test.id, maxId), -1) + 1,
      ...action.payload
    }, ...state];
  }
}, initialState);
