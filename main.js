"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const electron_1 = require("electron");
const path = require("path");
// Locals
const ott_ipc_main_1 = require("./main-lib/ott-ipc-main");
const ott_prefs_1 = require("./main-lib/ott-prefs");
const ott_window_1 = require("./main-lib/ott-window");
const rootRed = require("./main-lib/state/main-reducers");
const rootAct = require("./main-lib/state/main-actions");
const CONST = require("./APP_CONST");
// DevTools
const developer_mode_1 = require("./main-lib/developer-mode");
const remote_redux_devtools_1 = require("remote-redux-devtools");
// Development Flag
const DEVELOPMENT_MODE = true;
// Load Config
const prefs = new ott_prefs_1.OttPrefs(`${electron_1.app.getPath('userData') + path.sep}appData.json`); // Prefs File Path
// Set up App Event Listeners
electron_1.app.on('window-all-closed', () => electron_1.app.quit());
electron_1.app.on('ready', () => prefs.load()
    .catch(err => {
    console.log(err);
    Main();
})
    .then((oldState) => Main(oldState)));
// Main Entry Point
function Main(oldState = void 0) {

    // Main State
    const store = redux_1.createStore(redux_1.combineReducers(rootRed), remote_redux_devtools_1.default({
        name: CONST.STRINGS.REDUX_NAME,
        realtime: true,
        suppressConnectErrors: false
    }));

    // Main Com Channel
    const ipcM = new ott_ipc_main_1.OttIpcMain(electron_1.ipcMain);
    ott_window_1.OttWindow._setIpc(ipcM);

    ott_window_1.OttWindow._setURLS(`http://localhost:3000/`, `file://${__dirname + path.sep}build${path.sep}index.html`);
    if (DEVELOPMENT_MODE) {
        ott_window_1.OttWindow._enableDevMode();
        developer_mode_1.AddRendererDeveloperTools();
    }

    const unsub = store.subscribe(() => prefs.save(store.getState()).then(() => { }).catch(err => console.log(err)));
    const acts = ((disp) => redux_1.bindActionCreators(rootAct.MainActions, disp))(store.dispatch);
    let { projectList, projectHistory, } = store.getState();
    if (projectHistory.currentProjects.length > 0)
        for (let curP of projectHistory.currentProjects) {
            let p = projectList.find(p => p.id === curP);
            if (p)
                new ott_window_1.OttWindow(p);
        }
    // else createNewProject();
    function createNewProject() {
        electron_1.dialog.showSaveDialog({
            filters: [{
                    name: CONST.STRINGS.PROJECT_FILE_DESC,
                    extensions: [CONST.STRINGS.PROJECT_FILE_EXT]
                }],
            title: CONST.STRINGS.SAVE_DIALOG_TITLE,
            nameFieldLabel: CONST.STRINGS.NEW_FILENAME,
        }, (fileN) => {
            if (fileN) {
                let x = acts.addProject(path.basename(fileN), fileN);
                x;
                new ott_window_1.OttWindow({ name: path.basename(fileN), fileName: fileN });
            }
        });
    }
    function openNewProject() {
    }
}
//# sourceMappingURL=main.js.map