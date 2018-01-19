import { combineReducers } from 'redux';

import { MainActTypes } from './main-actions';
import { OttProject, OttWindowData } from './main-classes';
import { OttProjects } from '../ott-projects';

export interface MainState 
{
    projectList: ProjectListInitial;
    projectHistory: ProjectHistoryInitial;
}

interface ProjectListInitial extends Array<OttProject> {}
export function projectList(state: ProjectListInitial = [], act)
{
    switch(act.type)
    {
        case MainActTypes.ADD_PROJECT:
            return (state.push(new OttProject({
                name: act.name,
                fileName: act.fileName,
            }))), state.slice(0, state.length);

        case MainActTypes.SET_PROJECT:
            return state.map( p => {
                if(p.id === act.projectID)
                    return Object.assign({}, p, act.projectData);
                else
                    return p;
            });

        case MainActTypes.REM_PROJECT:
            return state.filter( p => p.id !== act.projectID );
            
        default:
            return state;
    }
}

interface ProjectHistoryInitial {
    currentProjects: string[],
}
export function projectHistory(state: ProjectHistoryInitial = {
    currentProjects: [],
}, act)
{
    switch(act.type)
    {
        default:
            return state;
    }
}

