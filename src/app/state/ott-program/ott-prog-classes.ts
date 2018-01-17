
export type OttProgramID = string;
export type OttModuleID = string;
export type OttScopeID = string;
export type OttVarID = string;
export type OttExpID = string;


export enum OttProgTypes {
    Program,
    Library,
};

export class OttProg 
{
    public id: OttProgramID;
    public name: string;
    public type: OttProgTypes;

    public modulesOwned: string[];
    public exportModules: string[];

    constructor({
        id = "",
        name = "",
        type = OttProgTypes.Program,

        modulesOwned = <string[]>[],
        exportModules = <string[]>[],
    })
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.modulesOwned = modulesOwned;
        this.exportModules = exportModules;
    }
}


export enum OttModuleTypes 
{
    Internal = "INTERNAL",
    External = "EXTERNAL",
};

export class OttModule 
{
    public id: OttModuleID;

    public name: string;
    public type: OttModuleTypes;

    public varsOwned: OttVarID[];
    public scopesOwned: OttScopeID[];
    public modulesOwned: OttModuleID[];

    public exportVars: OttVarID[];
    public exportScopes: OttScopeID[];
    public exportModules: OttModuleID[];

    constructor({
        id = "", 
        name = "", 
        type = OttModuleTypes.Internal,

        varsOwned = [], 
        scopesOwned = [], 
        modulesOwned = [],

        exportVars = [], 
        exportScopes = [],
        exportModules = [],
    })
    {
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

export enum OttScopeTypes 
{
    Module,
}

export class OttScope 
{
    public id: OttScopeID;
    public name: string;
    public type: OttScopeTypes;

    public ownerModuleID: string;
    public ownedVariables: string[];
    public exportedVariables: string[];

    constructor({
        id = "",
        name = "",
        type = OttScopeTypes.Module,
        
        ownerModuleID = "",
        ownedVariables = [],
        exportedVariables = [],
    })
    {
        this.id = id;
        this.name = name;
        this.type = type;

        this.ownerModuleID = ownerModuleID;
        this.ownedVariables = ownedVariables;

        this.exportedVariables = exportedVariables;
    }
}

export enum OttVarTypes
{
    Var = "VAR",
    Let = "LET",
    Const = "CONST",
};

export class OttVar 
{
    public id: OttVarID;
    public name: string;

    public type: OttVarTypes;
    
    public ownerScopeID: OttScopeID;
    public ownerModuleID: OttModuleID;

    constructor({
        id = "",
        name = "",
        type = OttVarTypes.Var,
        ownerScopeID = "",
        ownerModuleID = "",
    })
    {
        this.id = id;
        this.name = name;
        this.ownerScopeID = ownerScopeID;
        this.ownerModuleID = ownerModuleID;
    }
}

export enum OttExpTypes 
{
    Undefined,
    Bool,
    Number,
    String,
    Object,
    Array,
    Function,
    Class,
    Regex,
    Null,
    Reference,
};

export class OttExp 
{
    public id: OttExpID;
    public name: string;
    public type: OttExpTypes;

    public rawValue: any;
    
    constructor({
        id = "",
        name = "",
        type = OttExpTypes.Undefined,
        rawValue = void 0,
    })
    {
        this.id = id;
        this.name = name;
        this.type = type;

        this.rawValue = rawValue;
    }
}