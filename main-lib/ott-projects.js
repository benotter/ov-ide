"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONST = require("../APP_CONST");
class OttProjects {
    constructor(projL = []) {
        for (let proj of projL)
            this.add(proj);
    }
    add(projObj) {
        this.projects.push(new OttProject(projObj));
    }
}
exports.OttProjects = OttProjects;
class OttProject {
    constructor(projObj = null) {
        let { id = "", name = "", fileName = "", windowData = null, } = projObj || {};
        this.projObj = projObj;
        this.id = id;
        this.name = name;
        this.fileName;
        this.windowData = windowData || {
            width: CONST.VALUES.DEF_WIN_WIDTH,
            height: CONST.VALUES.DEF_WIN_HEIGHT,
            xPos: CONST.VALUES.DEF_X_POS,
            yPos: CONST.VALUES.DEF_Y_POS,
            max: CONST.VALUES.DEF_MAX,
        };
    }
    save() {
        Object.assign(this.projObj, this);
    }
}
exports.OttProject = OttProject;
//# sourceMappingURL=ott-projects.js.map