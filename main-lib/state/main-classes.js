"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONST = require("../../APP_CONST");
class OttProject {
    constructor({ name = CONST.STRINGS.NEW_PROJECT, fileName = CONST.STRINGS.NEW_FILENAME, } = {}) {
        this.id = (new Buffer(`${fileName}@${name}`)).toString('base64');
        this.name = name;
        this.fileName = fileName;
    }
}
exports.OttProject = OttProject;
class OttWindowData {
    constructor({ width = CONST.VALUES.DEF_WIN_WIDTH, height = CONST.VALUES.DEF_WIN_HEIGHT, xPos = CONST.VALUES.DEF_X_POS, yPos = CONST.VALUES.DEF_Y_POS, max = CONST.VALUES.DEF_MAX, } = {}) {
        this.width = width;
        this.height = height;
        this.xPos = xPos;
        this.yPos = yPos;
        this.max = max;
    }
}
exports.OttWindowData = OttWindowData;
//# sourceMappingURL=main-classes.js.map