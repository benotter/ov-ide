import { UIActionTypes } from './ui-actions';

export interface UiInitialState 
{
    sideBarOpen: boolean;
    sideBarDocked: boolean;
}

export function uiState(state: UiInitialState = {
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