"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_devtools_installer_1 = require("electron-devtools-installer");
function AddRendererDeveloperTools() {
    electron_devtools_installer_1.default(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    electron_devtools_installer_1.default(electron_devtools_installer_1.REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
}
exports.AddRendererDeveloperTools = AddRendererDeveloperTools;
//# sourceMappingURL=developer-mode.js.map