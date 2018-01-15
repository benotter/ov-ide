import { UIActionTypes } from './ui-actions';

export const UIInitial = {
    
};

export function UIReducer(state = UIInitial, act)
{
    switch(act.type)
    {
        default:
            return state;
    }
}