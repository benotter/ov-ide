export const OttModuleTypes = {
    Internal: "INTERNAL",
    External: "EXTERNAL",
};

export class OttModule 
{
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

export const OttVarTypes = {
    Var: "VAR",
    Let: "LET",
    Const: "CONST",
    
};

export class OttVar 
{
    constructor({
        id = "",
        name = "",

        ownerScopeID = "",
        ownerModuleID = "",


    })
    {

    }
}