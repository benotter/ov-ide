import { combineReducers } from 'redux';

import { UIReducer} from './ui/ui-reducer';



import { OttProgReducer } from './ott-program/ott-prog-reducer';


export default combineReducers({
    ui: UIReducer,
    
    program: OttProgReducer,
});