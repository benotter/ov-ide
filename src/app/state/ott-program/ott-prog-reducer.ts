import
{
    OttProgActTypes as pActT,
} from './ott-prog-actions';

import
{
    OttProg, OttProgramID, OttProgTypes,
    OttModule, OttModuleID, OttModuleTypes,
    OttScope, OttScopeID, OttScopeTypes,
    OttVar, OttVarID, OttVarTypes,
    OttExp, OttExpID, OttExpTypes,
} from './ott-prog-classes';

export interface CurSelInitial 
{
    currentProgID: OttProgramID;
    currentModuleID: OttModuleID;
    currentScopeID: OttScopeID;
    currentVarID: OttVarID;
    currentExpID: OttExpID;
}

export function curSel (
    state = {
        currentProgID: <OttProgramID> null,
        currentModuleID: <OttModuleID> null,
        currentScopeID: <OttScopeID> null,
        currentVarID: <OttVarID> null,
        currentExpID: <OttExpID> null,
    }, act )
{
    switch ( act.type )
    {
        case pActT.SET_CURRENT_PROG:
            return Object.assign( {}, state, {
                currentProgID: act.programID,
            } );

        case pActT.SET_CURRENT_MODULE:
            return Object.assign( {}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
            } );

        case pActT.SET_CURRENT_SCOPE:
            return Object.assign( {}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
            } );

        case pActT.SET_CURRENT_VAR:
            return Object.assign( {}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
                currentVarID: act.varID,
            } );

        case pActT.SET_CURRENT_EXP:
            return Object.assign( {}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
                currentVarID: act.varID,
                currentExpID: act.expID,
            } );

        default:
            return state;
    }
}

export interface AvailModsInitial extends Array<OttModuleID>{};
export function availMods ( state = <OttModuleID[]>[], act )
{
    switch ( act.type )
    {
        case pActT.ADD_AVAILABLE_MODULE:
            return state.splice(
                state.length,
                0,
                act.moduleID,
            );

        case pActT.REM_AVAILABLE_MODULE:
            return state.filter(
                id => id !== act.moduleID,
            );

        default:
            return state;
    }
}
export interface AvailScopesInitial extends Array<OttScopeID>{};
export function availScopes ( state = <OttScopeID[]>[], act )
{
    switch ( act.type )
    {
        case pActT.ADD_AVAILABLE_SCOPE:
            return state.splice(
                state.length - 1,
                0,
                act.scopeID,
            );
        case pActT.REM_AVAILABLE_SCOPE:
            return state.filter(
                id => id !== act.scopeID,
            );
        default:
            return state;
    }
}
export interface AvailVarsInitial extends Array<OttVarID>{};
export function availVars ( state = <OttVarID[]>[], act )
{
    switch ( act.type )
    {
        case pActT.ADD_AVAILABLE_VAR:
            return state.splice(
                state.length - 1,
                0,
                act.varID,
            );

        case pActT.REM_AVAILABLE_VAR:
            return state.filter(
                id => id !== act.varID,
            );

        default:
            return state;
    }
}
export interface AvailExpsInitial extends Array<OttExpID>{};
export function availExps ( state = <OttExpID[]>[], act )
{
    switch ( act.type )
    {
        case pActT.ADD_AVAILABLE_EXP:
            return state.splice(
                state.length - 1,
                0,
                act.expID,
            );

        case pActT.REM_AVAILABLE_EXP:
            return state.filter(
                id => id !== act.expID,
            );
        default:
            return state;
    }
}

export interface ProgListInitial extends Array<OttProg>{};
export function progList(state = <OttProg[]> [], act) 
{
    switch(act.type)
    {
        case pActT.ADD_PROG:
            return state.splice(
                state.length - 1, 
                0,
                new OttProg(act.programObj)
            );

        case pActT.REM_PROG:
            return state.filter(
                v => v.id !== act.programID
            );

        default:
            return state;
    }
}

export interface ModuleListInital extends Array<OttModule>{};
export function moduleList(state = <OttModule[]>[], act)
{
    switch(act.type)
    {
        case pActT.ADD_MODULE:
            return state.splice(
                state.length - 1,
                0,
                new OttModule(act.moduleObj),
            );
        
        case pActT.REM_MODULE:
            return state.filter(
                v => v.id !== act.moduleID
            );

        default:
            return state;
    }
}

export interface ScopeListInitial extends Array<OttScope>{};
export function scopeList(state = <OttScope[]>[], act)
{ 
    switch(act.type)
    {
        case pActT.ADD_SCOPE:
            return state.splice(
                state.length - 1,
                0,
                new OttScope(act.scopeObj),
            );
        
        case pActT.REM_SCOPE:
            return state.filter(
                v => v.id !== act.scopeID
            );
            
        default:
            return state;
    }
}

export interface VarListInitial extends Array<OttVar>{};
export function varList(state = <OttVar[]>[], act)
{
    switch(act.type)
    {
        case pActT.ADD_VAR:
            return state.splice(
                state.length - 1,
                0,
                new OttVar(act.varObj),
            );
        
        case pActT.REM_VAR:
            return state.filter(
                v => v.id !== act.varID
            );
            
        default:
            return state;
    }
}

export interface ExpListInitial extends Array<OttExp>{};
export function expList(state = [], act)
{ 
    switch(act.type)
    {
        case pActT.ADD_EXP:
            return state.splice(
                state.length - 1,
                0,
                new OttExp(act.expObj),
            );
        
        case pActT.REM_EXP:
            return state.filter(
                v => v.id !== act.expID
            );
            
        default:
            return state;
    } 
}