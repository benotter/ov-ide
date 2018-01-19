"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ott_prog_actions_1 = require("./ott-prog-actions");
const ott_prog_classes_1 = require("./ott-prog-classes");
function curSel(state = {
        currentProgID: null,
        currentModuleID: null,
        currentScopeID: null,
        currentVarID: null,
        currentExpID: null,
    }, act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.SET_CURRENT_PROG:
            return Object.assign({}, state, {
                currentProgID: act.programID,
            });
        case ott_prog_actions_1.OttProgActTypes.SET_CURRENT_MODULE:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
            });
        case ott_prog_actions_1.OttProgActTypes.SET_CURRENT_SCOPE:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
            });
        case ott_prog_actions_1.OttProgActTypes.SET_CURRENT_VAR:
            return Object.assign({}, state, {
                currentProgID: act.programID,
                currentModuleID: act.moduleID,
                currentScopeID: act.scopeID,
                currentVarID: act.varID,
            });
        case ott_prog_actions_1.OttProgActTypes.SET_CURRENT_EXP:
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
exports.curSel = curSel;
;
function availMods(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_AVAILABLE_MODULE:
            return state.splice(state.length, 0, act.moduleID);
        case ott_prog_actions_1.OttProgActTypes.REM_AVAILABLE_MODULE:
            return state.filter(id => id !== act.moduleID);
        default:
            return state;
    }
}
exports.availMods = availMods;
;
function availScopes(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_AVAILABLE_SCOPE:
            return state.splice(state.length - 1, 0, act.scopeID);
        case ott_prog_actions_1.OttProgActTypes.REM_AVAILABLE_SCOPE:
            return state.filter(id => id !== act.scopeID);
        default:
            return state;
    }
}
exports.availScopes = availScopes;
;
function availVars(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_AVAILABLE_VAR:
            return state.splice(state.length - 1, 0, act.varID);
        case ott_prog_actions_1.OttProgActTypes.REM_AVAILABLE_VAR:
            return state.filter(id => id !== act.varID);
        default:
            return state;
    }
}
exports.availVars = availVars;
;
function availExps(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_AVAILABLE_EXP:
            return state.splice(state.length - 1, 0, act.expID);
        case ott_prog_actions_1.OttProgActTypes.REM_AVAILABLE_EXP:
            return state.filter(id => id !== act.expID);
        default:
            return state;
    }
}
exports.availExps = availExps;
;
function progList(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_PROG:
            return state.splice(state.length - 1, 0, new ott_prog_classes_1.OttProg(act.programObj));
        case ott_prog_actions_1.OttProgActTypes.REM_PROG:
            return state.filter(v => v.id !== act.programID);
        default:
            return state;
    }
}
exports.progList = progList;
;
function moduleList(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_MODULE:
            return state.splice(state.length - 1, 0, new ott_prog_classes_1.OttModule(act.moduleObj));
        case ott_prog_actions_1.OttProgActTypes.REM_MODULE:
            return state.filter(v => v.id !== act.moduleID);
        default:
            return state;
    }
}
exports.moduleList = moduleList;
;
function scopeList(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_SCOPE:
            return state.splice(state.length - 1, 0, new ott_prog_classes_1.OttScope(act.scopeObj));
        case ott_prog_actions_1.OttProgActTypes.REM_SCOPE:
            return state.filter(v => v.id !== act.scopeID);
        default:
            return state;
    }
}
exports.scopeList = scopeList;
;
function varList(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_VAR:
            return state.splice(state.length - 1, 0, new ott_prog_classes_1.OttVar(act.varObj));
        case ott_prog_actions_1.OttProgActTypes.REM_VAR:
            return state.filter(v => v.id !== act.varID);
        default:
            return state;
    }
}
exports.varList = varList;
;
function expList(state = [], act) {
    switch (act.type) {
        case ott_prog_actions_1.OttProgActTypes.ADD_EXP:
            return state.splice(state.length - 1, 0, new ott_prog_classes_1.OttExp(act.expObj));
        case ott_prog_actions_1.OttProgActTypes.REM_EXP:
            return state.filter(v => v.id !== act.expID);
        default:
            return state;
    }
}
exports.expList = expList;
