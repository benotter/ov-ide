"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainActTypes;
(function (MainActTypes) {
    MainActTypes[MainActTypes["ADD_PROJECT"] = 0] = "ADD_PROJECT";
    MainActTypes[MainActTypes["SET_PROJECT"] = 1] = "SET_PROJECT";
    MainActTypes[MainActTypes["REM_PROJECT"] = 2] = "REM_PROJECT";
    MainActTypes[MainActTypes["SET_LAST_PROJECT"] = 3] = "SET_LAST_PROJECT";
    MainActTypes[MainActTypes["ADD_CUR_PROJ"] = 4] = "ADD_CUR_PROJ";
    MainActTypes[MainActTypes["REM_CUR_PROJ"] = 5] = "REM_CUR_PROJ";
})(MainActTypes = exports.MainActTypes || (exports.MainActTypes = {}));
exports.MainActions = {
    addProject: (name, fileName) => ({
        type: MainActTypes.ADD_PROJECT,
        name,
        fileName,
    }),
    setProject: (id, data) => ({
        type: MainActTypes.SET_PROJECT,
        projectID: id,
        projectData: data,
    }),
    remProject: (id) => ({
        type: MainActTypes.REM_PROJECT,
        projectID: id,
    }),
    setLastProject: (id) => ({
        type: MainActTypes.SET_LAST_PROJECT,
        projectID: id,
    }),
    addCurProj: (id) => ({
        type: MainActTypes.ADD_CUR_PROJ,
        projectID: id,
    }),
    remCurProj: (id) => ({
        type: MainActTypes.REM_CUR_PROJ,
        projectID: id,
    }),
};
//# sourceMappingURL=main-actions.js.map