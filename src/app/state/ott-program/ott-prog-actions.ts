export enum OttProgActTypes 
{
    SET_CURRENT_PROG = "SET_CURRENT_PROG",
    SET_CURRENT_MODULE = "SET_CURRENT_MODULE",
    SET_CURRENT_SCOPE = "SET_CURRENT_SCOPE",
    SET_CURRENT_VAR = "SET_CURRENT_VAR",
    SET_CURRENT_EXP = "SET_CURRENT_EXP",

    ADD_AVAILABLE_MODULE = "ADD_AVAILABLE_MODULE",
    REM_AVAILABLE_MODULE = "REM_AVAILABLE_MODULE",
    CLEAR_AVAILABLE_MODULES = "CLEAR_AVAILABLE_MODULES",

    ADD_AVAILABLE_SCOPE = "ADD_AVAILABLE_SCOPE",
    REM_AVAILABLE_SCOPE = "REM_AVAILABLE_SCOPE",
    CLEAR_AVAILABLE_SCOPES = "CLEAR_AVAILABLE_SCOPES",

    ADD_AVAILABLE_VAR = "ADD_AVAILABLE_VAR",
    REM_AVAILABLE_VAR = "REM_AVAILABLE_VAR",
    CLEAR_AVAILABLE_VARS = "CLEAR_AVAILABLE_VARS",

    ADD_AVAILABLE_EXP = "ADD_AVAILABLE_EXP",
    REM_AVAILABLE_EXP = "REM_AVAILABLE_EXP",
    CLEAR_AVAILABLE_EXPS = "CLEAR_AVAILABLE_EXPS",

    ADD_PROG = "ADD_PROG",
    REM_PROG = "REM_PROG",

    ADD_MODULE = "ADD_MODULE",
    REM_MODULE = "REM_MODULE",

    ADD_SCOPE = "ADD_SCOPE",
    REM_SCOPE = "ADD_SCOPE",

    ADD_VAR = "ADD_VAR",
    REM_VAR = "REM_VAR",

    ADD_EXP = "ADD_EXP",
    REM_EXP = "REM_EXP"
};

export let OttProgActions = {
    setCurrentProg: (progID)=>({
        type: OttProgActTypes.SET_CURRENT_PROG,
        programID: progID,
    }),
    setCurrentModule: (progID, moduleID)=>({
        type: OttProgActTypes.SET_CURRENT_MODULE,
        programID: progID,
        moduleID,
    }),
    setCurrentScope: (progID, moduleID, scopeID)=>({
        type: OttProgActTypes.SET_CURRENT_SCOPE,
        programID: progID,
        moduleID,
        scopeID,
    }),
    setCurrentVar: (progID, moduleID, scopeID, varID)=>({
        type: OttProgActTypes.SET_CURRENT_VAR,
        programID: progID,
        moduleID,
        scopeID,
        varID,
    }),
    setCurrentExp: (progID, moduleID, scopeID, varID, expID = null)=>({
        type: OttProgActTypes.SET_CURRENT_EXP,
        programID: progID,
        moduleID,
        scopeID,
        varID: expID !== null && varID ? varID : void 0,
        expID: expID !== null ? expID : varID,
    }),


    addAvailableModule: (moduleID)=>({
        type: OttProgActTypes.ADD_AVAILABLE_MODULE,
        moduleID,
    }),
    remAvailableModule: (moduleID)=>({
        type: OttProgActTypes.REM_AVAILABLE_MODULE,
        moduleID,
    }),
    clearAvailableModules: ()=>({
        type: OttProgActTypes.CLEAR_AVAILABLE_MODULES,
    }),


    addAvailableScope: (scopeID)=>({
        type: OttProgActTypes.ADD_AVAILABLE_SCOPE,
        scopeID,
    }),
    remAvailableScope: (scopeID)=>({
        type: OttProgActTypes.REM_AVAILABLE_SCOPE,
        scopeID,
    }),
    clearAvailableScopes: ()=>({
        type: OttProgActTypes.CLEAR_AVAILABLE_SCOPES,
    }),


    addAvailableVar: (varID)=>({
        type: OttProgActTypes.ADD_AVAILABLE_VAR,
        varID,
    }),
    remAvailableVar: (varID)=>({
        type: OttProgActTypes.REM_AVAILABLE_VAR,
        varID,
    }),
    clearAvailableVars: ()=>({
        type: OttProgActTypes.CLEAR_AVAILABLE_VARS,
    }),


    addAvailableExp: (expID)=>({
        type: OttProgActTypes.ADD_AVAILABLE_EXP,
        expID,
    }),
    remAvailableExp: (expID)=>({
        type: OttProgActTypes.REM_AVAILABLE_EXP,
        expID,
    }),
    clearAvailableExp: ()=>({
        type: OttProgActTypes.CLEAR_AVAILABLE_EXPS,
    }),


    addProgram: (programObj)=>({
        type: OttProgActTypes.ADD_PROG,
        programObj,
    }),
    remProgram: (programID)=>({
        type: OttProgActTypes.REM_PROG,
        programID,
    }),


    addModule: (moduleObj)=>({
        type: OttProgActTypes.ADD_MODULE,
        moduleObj,
    }),
    remModule: (moduleID)=>({
        type: OttProgActTypes.REM_MODULE,
        moduleID,
    }),


    addScope: (scopeObj)=>({
        type: OttProgActTypes.ADD_SCOPE,
        scopeObj,        
    }),
    remScope: (scopeID)=>({
        type: OttProgActTypes.REM_SCOPE,
        scopeID,
    }),


    addVar: (varObj)=>({
        type: OttProgActTypes.ADD_VAR,
        varObj,
    }),
    remVar: (varID)=>({
        type: OttProgActTypes.REM_VAR,
        varID,
    }),

    
    addExp: (expObj)=>({
        type: OttProgActTypes.ADD_EXP,
        expObj,
    }),
    remExp: (expID)=>({
        type: OttProgActTypes.REM_EXP,
        expID,
    }),
};