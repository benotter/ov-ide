"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uiState(state = {
        sideBarOpen: true,
        sideBarDocked: true,
    }, act) {
    switch (act.type) {
        default:
            return state;
    }
}
exports.uiState = uiState;
