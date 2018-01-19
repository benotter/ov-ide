"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIActionTypes;
(function (UIActionTypes) {
    UIActionTypes[UIActionTypes["SIDEBAR_CLOSE"] = 0] = "SIDEBAR_CLOSE";
    UIActionTypes[UIActionTypes["SIDEBAR_OPEN"] = 1] = "SIDEBAR_OPEN";
    UIActionTypes[UIActionTypes["SIDEBAR_DOCK"] = 2] = "SIDEBAR_DOCK";
    UIActionTypes[UIActionTypes["SIDEBAR_UNDOCK"] = 3] = "SIDEBAR_UNDOCK";
})(UIActionTypes = exports.UIActionTypes || (exports.UIActionTypes = {}));
;
exports.UIActions = {
    sideBarOpen: () => ({
        type: UIActionTypes.SIDEBAR_CLOSE,
    }),
    sideBarClose: () => ({
        type: UIActionTypes.SIDEBAR_OPEN,
    }),
    sideBarDock: () => ({
        type: UIActionTypes.SIDEBAR_DOCK,
    }),
    sideBarUnDock: () => ({
        type: UIActionTypes.SIDEBAR_UNDOCK,
    })
};
