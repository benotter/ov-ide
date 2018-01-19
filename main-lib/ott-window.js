"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const CONST = require("../APP_CONST");
class OttWindow {
    constructor({ name = CONST.STRINGS.NEW_PROJECT, fileName = CONST.STRINGS.NEW_FILENAME, stopLoad = false, } = {}) {
        this.name = name;
        this.fileName = fileName;
        if (!stopLoad)
            this.loadWindow();
    }
    static _enableDevMode() { this._DEV_MODE = true; }
    static _setURLS(dev, prod) {
        this._devModeURL = dev;
        this._prodModeURL = prod;
    }
    static _setIpc(ipc) { this._ipc = ipc; }
    // Instances'
    get appUrl() {
        let con = this.constructor;
        return con._DEV_MODE ? con._devModeURL : con._prodModeURL;
    }
    get title() { return this.browser.getTitle(); }
    set title(val) { this.browser.setTitle(val); }
    get xPos() { return this.browser.getPosition()[0]; }
    get yPos() { return this.browser.getPosition()[1]; }
    get xyPos() { return this.browser.getPosition(); }
    get width() { return this.browser.getSize()[0]; }
    get height() { return this.browser.getSize()[1]; }
    get size() { return this.browser.getSize(); }
    get maximized() { return this.browser.isMaximized(); }
    loadWindow() {
        let { _ipc: ipc } = this.constructor;
        let url = this.appUrl;
        let opts = {
            title: this.name || CONST.STRINGS.NEW_PROJECT,
            show: false,
        };
        let browser = this.browser = new electron_1.BrowserWindow(opts), webC = browser.webContents;
        let deReg = [];
        deReg.push(['ready-for-state-load', ipc.register('ready-for-state-load', webC.id, (data, reply) => {
            })]);
        // deReg.push(['', ipc.register('', webC.id, (data, reply)=>{})]);
        deReg.push(['', ipc.register('', webC.id, (data, reply) => { })]);
        deReg.push(['', ipc.register('', webC.id, (data, reply) => { })]);
        deReg.push(['', ipc.register('', webC.id, (data, reply) => { })]);
        let saveStateF = () => {
        };
        browser.on('ready-to-show', () => {
        });
        browser.on('closed', () => {
            ipc.deregister(deReg);
        });
        browser.on('moved', saveStateF);
        browser.on('resize', saveStateF);
        browser.on('maximize', saveStateF);
        browser.on('unmaximize', saveStateF);
    }
}
// Statics'
OttWindow._DEV_MODE = false;
OttWindow._devModeURL = "";
OttWindow._prodModeURL = "";
exports.OttWindow = OttWindow;
//# sourceMappingURL=ott-window.js.map