import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const helloWorld = createAction<HelloWorldData>(Actions.HELLO_WORLD);
