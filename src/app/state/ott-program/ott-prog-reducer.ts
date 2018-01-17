import { 
    OttProgActTypes
 } from './ott-prog-actions';

export const OttProgInitial = {
    currentProgID: null,

    currentModuleID: null,
    currentScopeID: null,
    currentVarID: null,
    currentExpID: null,

    currentAvailableModules: [],
    currentAvailableScopes: [],
    currentAvailableVars: [],
    currentAvailableExps: [],

    progList: [],
    
    moduleList: [],
    scopeList: [],
    varList: [],
    expList: [],
};

export function OttProgReducer(state = OttProgInitial, act)
{
    switch(act.type)
    {
        default:
            return state;
    }
}