export class OttProg {
    constructor({ id = "", name = "", type = "", modulesOwned = [], exportModules = [], }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.modulesOwned = modulesOwned;
        this.exportModules = exportModules;
    }
}
export var OttModuleTypes;
(function (OttModuleTypes) {
    OttModuleTypes["Internal"] = "INTERNAL";
    OttModuleTypes["External"] = "EXTERNAL";
})(OttModuleTypes || (OttModuleTypes = {}));
;
export class OttModule {
    constructor({ id = "", name = "", type = OttModuleTypes.Internal, varsOwned = [], scopesOwned = [], modulesOwned = [], exportVars = [], exportScopes = [], exportModules = [], }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.varsOwned = varsOwned;
        this.scopesOwned = scopesOwned;
        this.modulesOwned = modulesOwned;
        this.exportVars = exportVars;
        this.exportScopes = exportScopes;
        this.exportModules = exportModules;
    }
}
export class OttScope {
    constructor({ id = "", name = "", ownerModuleID = "", ownedVariables = [], exportedVariables = [], }) {
        this.id = id;
        this.name = name;
        this.ownerModuleID = ownerModuleID;
        this.ownedVariables = ownedVariables;
        this.exportedVariables = exportedVariables;
    }
}
export var OttVarTypes;
(function (OttVarTypes) {
    OttVarTypes["Var"] = "VAR";
    OttVarTypes["Let"] = "LET";
    OttVarTypes["Const"] = "CONST";
})(OttVarTypes || (OttVarTypes = {}));
;
export class OttVar {
    constructor({ id = "", name = "", type = OttVarTypes.Var, ownerScopeID = "", ownerModuleID = "", }) {
        this.id = id;
        this.name = name;
        this.ownerScopeID = ownerScopeID;
        this.ownerModuleID = ownerModuleID;
    }
}
