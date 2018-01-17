export var OttProgTypes;
(function (OttProgTypes) {
    OttProgTypes[OttProgTypes["Program"] = 0] = "Program";
    OttProgTypes[OttProgTypes["Library"] = 1] = "Library";
})(OttProgTypes || (OttProgTypes = {}));
;
export class OttProg {
    constructor({ id = "", name = "", type = OttProgTypes.Program, modulesOwned = [], exportModules = [], }) {
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
export var OttScopeTypes;
(function (OttScopeTypes) {
    OttScopeTypes[OttScopeTypes["Module"] = 0] = "Module";
})(OttScopeTypes || (OttScopeTypes = {}));
export class OttScope {
    constructor({ id = "", name = "", type = OttScopeTypes.Module, ownerModuleID = "", ownedVariables = [], exportedVariables = [], }) {
        this.id = id;
        this.name = name;
        this.type = type;
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
export var OttExpTypes;
(function (OttExpTypes) {
    OttExpTypes[OttExpTypes["Undefined"] = 0] = "Undefined";
    OttExpTypes[OttExpTypes["Bool"] = 1] = "Bool";
    OttExpTypes[OttExpTypes["Number"] = 2] = "Number";
    OttExpTypes[OttExpTypes["String"] = 3] = "String";
    OttExpTypes[OttExpTypes["Object"] = 4] = "Object";
    OttExpTypes[OttExpTypes["Array"] = 5] = "Array";
    OttExpTypes[OttExpTypes["Function"] = 6] = "Function";
    OttExpTypes[OttExpTypes["Class"] = 7] = "Class";
    OttExpTypes[OttExpTypes["Regex"] = 8] = "Regex";
    OttExpTypes[OttExpTypes["Null"] = 9] = "Null";
    OttExpTypes[OttExpTypes["Reference"] = 10] = "Reference";
})(OttExpTypes || (OttExpTypes = {}));
;
export class OttExp {
    constructor({ id = "", name = "", type = OttExpTypes.Undefined, rawValue = void 0, }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rawValue = rawValue;
    }
}
