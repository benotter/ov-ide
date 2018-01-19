export enum MainActTypes 
{
    ADD_PROJECT,
    SET_PROJECT,
    REM_PROJECT,

    SET_LAST_PROJECT,

    ADD_CUR_PROJ,
    REM_CUR_PROJ,
}

export const MainActions = {
    addProject: (name, fileName)=>({
        type: MainActTypes.ADD_PROJECT,
        name,
        fileName,
    }),
    setProject: (id, data)=>({
        type: MainActTypes.SET_PROJECT,
        projectID: id,
        projectData: data,
    }),
    remProject: (id)=>({
        type: MainActTypes.REM_PROJECT,
        projectID: id,
    }),

    setLastProject: (id)=>({
        type: MainActTypes.SET_LAST_PROJECT,
        projectID: id,
    }),

    addCurProj: (id)=>({
        type: MainActTypes.ADD_CUR_PROJ,
        projectID: id,
    }),
    remCurProj: (id)=>({
        type: MainActTypes.REM_CUR_PROJ,
        projectID: id,
    }),
};