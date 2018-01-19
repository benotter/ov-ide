"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_actions_1 = require("./main-actions");
const main_classes_1 = require("./main-classes");
function projectList(state = [], act) {
    switch (act.type) {
        case main_actions_1.MainActTypes.ADD_PROJECT:
            return (state.push(new main_classes_1.OttProject({
                name: act.name,
                fileName: act.fileName,
            }))), state.slice(0, state.length);
        case main_actions_1.MainActTypes.SET_PROJECT:
            return state.map(p => {
                if (p.id === act.projectID)
                    return Object.assign({}, p, act.projectData);
                else
                    return p;
            });
        case main_actions_1.MainActTypes.REM_PROJECT:
            return state.filter(p => p.id !== act.projectID);
        default:
            return state;
    }
}
exports.projectList = projectList;
function projectHistory(state = {
        currentProjects: [],
    }, act) {
    switch (act.type) {
        default:
            return state;
    }
}
exports.projectHistory = projectHistory;
//# sourceMappingURL=main-reducers.js.map