import { combineReducers } from 'redux';
import * as uiReduce from './ui/ui-reducer';
import * as ottReduce from './ott-program/ott-prog-reducer';
export default combineReducers(Object.assign({}, uiReduce, ottReduce));
export * from './ui/ui-reducer';
export * from './ott-program/ott-prog-reducer';
