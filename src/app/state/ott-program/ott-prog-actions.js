export var OttProgActTypes;
(function (OttProgActTypes) {
    OttProgActTypes[OttProgActTypes["ADD_PROG"] = 0] = "ADD_PROG";
    OttProgActTypes[OttProgActTypes["REM_PROG"] = 1] = "REM_PROG";
    OttProgActTypes[OttProgActTypes["ADD_MODULE"] = 2] = "ADD_MODULE";
    OttProgActTypes[OttProgActTypes["REM_MODULE"] = 3] = "REM_MODULE";
    OttProgActTypes[OttProgActTypes["ADD_SCOPE"] = 4] = "ADD_SCOPE";
    OttProgActTypes[OttProgActTypes["REM_SCOPE"] = 5] = "REM_SCOPE";
    OttProgActTypes[OttProgActTypes["ADD_VAR"] = 6] = "ADD_VAR";
    OttProgActTypes[OttProgActTypes["REM_VAR"] = 7] = "REM_VAR";
    OttProgActTypes[OttProgActTypes["ADD_EXP"] = 8] = "ADD_EXP";
    OttProgActTypes[OttProgActTypes["REM_EXP"] = 9] = "REM_EXP";
    OttProgActTypes[OttProgActTypes["SET_CURRENT_PROG"] = 10] = "SET_CURRENT_PROG";
    OttProgActTypes[OttProgActTypes["SET_CURRENT_MODULE"] = 11] = "SET_CURRENT_MODULE";
    OttProgActTypes[OttProgActTypes["SET_CURRENT_SCOPE"] = 12] = "SET_CURRENT_SCOPE";
    OttProgActTypes[OttProgActTypes["SET_CURRENT_VAR"] = 13] = "SET_CURRENT_VAR";
    OttProgActTypes[OttProgActTypes["SET_CURRENT_EXP"] = 14] = "SET_CURRENT_EXP";
    OttProgActTypes[OttProgActTypes["ADD_AVAILABLE_MODULE"] = 15] = "ADD_AVAILABLE_MODULE";
    OttProgActTypes[OttProgActTypes["REM_AVAILABLE_MODULE"] = 16] = "REM_AVAILABLE_MODULE";
    OttProgActTypes[OttProgActTypes["CLEAR_AVAILABLE_MODULES"] = 17] = "CLEAR_AVAILABLE_MODULES";
    OttProgActTypes[OttProgActTypes["ADD_AVAILABLE_SCOPE"] = 18] = "ADD_AVAILABLE_SCOPE";
    OttProgActTypes[OttProgActTypes["REM_AVAILABLE_SCOPE"] = 19] = "REM_AVAILABLE_SCOPE";
    OttProgActTypes[OttProgActTypes["CLEAR_AVAILABLE_SCOPES"] = 20] = "CLEAR_AVAILABLE_SCOPES";
    OttProgActTypes[OttProgActTypes["ADD_AVAILABLE_VAR"] = 21] = "ADD_AVAILABLE_VAR";
    OttProgActTypes[OttProgActTypes["REM_AVAILABLE_VAR"] = 22] = "REM_AVAILABLE_VAR";
    OttProgActTypes[OttProgActTypes["CLEAR_AVAILABLE_VARS"] = 23] = "CLEAR_AVAILABLE_VARS";
    OttProgActTypes[OttProgActTypes["ADD_AVAILABLE_EXP"] = 24] = "ADD_AVAILABLE_EXP";
    OttProgActTypes[OttProgActTypes["REM_AVAILABLE_EXP"] = 25] = "REM_AVAILABLE_EXP";
    OttProgActTypes[OttProgActTypes["CLEAR_AVAILABLE_EXPS"] = 26] = "CLEAR_AVAILABLE_EXPS";
})(OttProgActTypes || (OttProgActTypes = {}));
;
export let OttProgActions = {
    addProgram: (programObj) => ({
        type: OttProgActTypes.ADD_PROG,
        programObj,
    }),
    remProgram: (programID) => ({
        type: OttProgActTypes.REM_PROG,
        programID,
    }),
    addModule: (moduleObj) => ({
        type: OttProgActTypes.ADD_MODULE,
        moduleObj,
    }),
    remModule: (moduleID) => ({
        type: OttProgActTypes.REM_MODULE,
        moduleID,
    }),
    addScope: (scopeObj) => ({
        type: OttProgActTypes.ADD_SCOPE,
        scopeObj,
    }),
    remScope: (scopeID) => ({
        type: OttProgActTypes.REM_SCOPE,
        scopeID,
    }),
    addVar: (varObj) => ({
        type: OttProgActTypes.ADD_VAR,
        varObj,
    }),
    remVar: (varID) => ({
        type: OttProgActTypes.REM_VAR,
        varID,
    }),
    addExp: (expObj) => ({
        type: OttProgActTypes.ADD_EXP,
        expObj,
    }),
    remExp: (expID) => ({
        type: OttProgActTypes.REM_EXP,
        expID,
    }),
    setCurrentProg: (progID) => ({
        type: OttProgActTypes.SET_CURRENT_PROG,
        programID: progID,
    }),
    setCurrentModule: (progID, moduleID) => ({
        type: OttProgActTypes.SET_CURRENT_MODULE,
        programID: progID,
        moduleID,
    }),
    setCurrentScope: (progID, moduleID, scopeID) => ({
        type: OttProgActTypes.SET_CURRENT_SCOPE,
        programID: progID,
        moduleID,
        scopeID,
    }),
    setCurrentVar: (progID, moduleID, scopeID, varID) => ({
        type: OttProgActTypes.SET_CURRENT_VAR,
        programID: progID,
        moduleID,
        scopeID,
        varID,
    }),
    setCurrentExp: (progID, moduleID, scopeID, varID, expID = null) => ({
        type: OttProgActTypes.SET_CURRENT_EXP,
        programID: progID,
        moduleID,
        scopeID,
        varID: expID !== null && varID ? varID : void 0,
        expID: expID !== null ? expID : varID,
    }),
    addAvailableModule: (moduleID) => ({
        type: OttProgActTypes.ADD_AVAILABLE_MODULE,
        moduleID,
    }),
    remAvailableModule: (moduleID) => ({
        type: OttProgActTypes.REM_AVAILABLE_MODULE,
        moduleID,
    }),
    clearAvailableModules: () => ({
        type: OttProgActTypes.CLEAR_AVAILABLE_MODULES,
    }),
    addAvailableScope: (scopeID) => ({
        type: OttProgActTypes.ADD_AVAILABLE_SCOPE,
        scopeID,
    }),
    remAvailableScope: (scopeID) => ({
        type: OttProgActTypes.REM_AVAILABLE_SCOPE,
        scopeID,
    }),
    clearAvailableScopes: () => ({
        type: OttProgActTypes.CLEAR_AVAILABLE_SCOPES,
    }),
    addAvailableVar: (varID) => ({
        type: OttProgActTypes.ADD_AVAILABLE_VAR,
        varID,
    }),
    remAvailableVar: (varID) => ({
        type: OttProgActTypes.REM_AVAILABLE_VAR,
        varID,
    }),
    clearAvailableVars: () => ({
        type: OttProgActTypes.CLEAR_AVAILABLE_VARS,
    }),
    addAvailableExp: (expID) => ({
        type: OttProgActTypes.ADD_AVAILABLE_EXP,
        expID,
    }),
    remAvailableExp: (expID) => ({
        type: OttProgActTypes.REM_AVAILABLE_EXP,
        expID,
    }),
    clearAvailableExp: () => ({
        type: OttProgActTypes.CLEAR_AVAILABLE_EXPS,
    }),
};
