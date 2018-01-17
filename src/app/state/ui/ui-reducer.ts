import { UIActionTypes } from './ui-actions';

export function uiState(state = {
    sideBarOpen: true,
    sideBarDocked: true,
}, act)
{
    switch(act.type)
    {
        default:
            return state;
    }
}