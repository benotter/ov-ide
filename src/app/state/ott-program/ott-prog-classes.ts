
export type OttProgramID = string;
export type OttModuleID = string;
export type OttScopeID = string;
export type OttVarID = string;
export type OttExpID = string;


export class OttProg 
{
    public id: OttProgramID;
    public name: string;
    public type: string;
    public modulesOwned: string[];
    public exportModules: string[];

    constructor({
        id = "",
        name = "",
        type = "",
        modulesOwned = [],
        exportModules = [],
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

export class OttScope 
{
    public id: OttScopeID;
    public name: string;
    public ownerModuleID: string;
    public ownedVariables: string[];
    public exportedVariables: string[];

    constructor({
        id = "",
        name = "",
    
        ownerModuleID = "",
    
        ownedVariables = [],

        exportedVariables = [],
    })
    {
        this.id = id;
        this.name = name;

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