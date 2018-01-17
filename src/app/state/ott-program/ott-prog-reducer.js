import { OttProgActTypes as pActT, } from './ott-prog-actions';
import { OttProg, OttModule, OttScope, OttVar, OttExp, } from './ott-prog-classes';
export function curSel(state = {
        currentProgID: null,
        currentModuleID: null,
        currentScopeID: null,
        currentVarID: null,
        currentExpID: null,
    }, act) {
    switch (act.type) {
        case pActT.SET_CURRENT_PROG:
            return Object.assign({}, state, {
                currentProgID: act.programID,
            });
        case pActT.SET_CURRENT_MODULE:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
            });
        case pActT.SET_CURRENT_SCOPE:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
            });
        case pActT.SET_CURRENT_VAR:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
                currentVarID: act.varID,
            });
        case pActT.SET_CURRENT_EXP:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
                currentVarID: act.varID,
                currentExpID: act.expID,
            });
        default:
            return state;
    }
}
;
export function availMods(state = [], act) {
    switch (act.type) {
        case pActT.ADD_AVAILABLE_MODULE:
            return state.splice(state.length, 0, act.moduleID);
        case pActT.REM_AVAILABLE_MODULE:
            return state.filter(id => id !== act.moduleID);
        default:
            return state;
    }
}
;
export function availScopes(state = [], act) {
    switch (act.type) {
        case pActT.ADD_AVAILABLE_SCOPE:
            return state.splice(state.length - 1, 0, act.scopeID);
        case pActT.REM_AVAILABLE_SCOPE:
            return state.filter(id => id !== act.scopeID);
        default:
            return state;
    }
}
;
export function availVars(state = [], act) {
    switch (act.type) {
        case pActT.ADD_AVAILABLE_VAR:
            return state.splice(state.length - 1, 0, act.varID);
        case pActT.REM_AVAILABLE_VAR:
            return state.filter(id => id !== act.varID);
        default:
            return state;
    }
}
;
export function availExps(state = [], act) {
    switch (act.type) {
        case pActT.ADD_AVAILABLE_EXP:
            return state.splice(state.length - 1, 0, act.expID);
        case pActT.REM_AVAILABLE_EXP:
            return state.filter(id => id !== act.expID);
        default:
            return state;
    }
}
;
export function progList(state = [], act) {
    switch (act.type) {
        case pActT.ADD_PROG:
            return state.splice(state.length - 1, 0, new OttProg(act.programObj));
        case pActT.REM_PROG:
            return state.filter(v => v.id !== act.programID);
        default:
            return state;
    }
}
;
export function moduleList(state = [], act) {
    switch (act.type) {
        case pActT.ADD_MODULE:
            return state.splice(state.length - 1, 0, new OttModule(act.moduleObj));
        case pActT.REM_MODULE:
            return state.filter(v => v.id !== act.moduleID);
        default:
            return state;
    }
}
;
export function scopeList(state = [], act) {
    switch (act.type) {
        case pActT.ADD_SCOPE:
            return state.splice(state.length - 1, 0, new OttScope(act.scopeObj));
        case pActT.REM_SCOPE:
            return state.filter(v => v.id !== act.scopeID);
        default:
            return state;
    }
}
;
export function varList(state = [], act) {
    switch (act.type) {
        case pActT.ADD_VAR:
            return state.splice(state.length - 1, 0, new OttVar(act.varObj));
        case pActT.REM_VAR:
            return state.filter(v => v.id !== act.varID);
        default:
            return state;
    }
}
;
export function expList(state = [], act) {
    switch (act.type) {
        case pActT.ADD_EXP:
            return state.splice(state.length - 1, 0, new OttExp(act.expObj));
        case pActT.REM_EXP:
            return state.filter(v => v.id !== act.expID);
        default:
            return state;
    }
}
