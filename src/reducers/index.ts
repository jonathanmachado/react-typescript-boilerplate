import { combineReducers, Reducer } from 'redux';
import test from './test';

export interface RootState {
  test: HelloWorldStoreState;
}

export default combineReducers({
  test
});
