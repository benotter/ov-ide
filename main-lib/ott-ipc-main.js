"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OttIpcMain {
    constructor(ipc) {
        this.ipc = ipc;
    }
    register(chan, webID, cb) {
        let listenF = (e, data) => {
            if (e.sender.id === webID)
                cb(data, (reply, sync = false) => {
                    if (sync)
                        e.returnValue = reply;
                    else
                        e.sender.send(chan, reply);
                });
        };
        this.ipc.on(chan, listenF);
        return listenF;
    }
    deregister(chan, listenF = null) {
        if (Array.isArray(chan)) {
            for (let list of chan)
                if (Array.isArray(list))
                    this.ipc.removeListener(list[0], list[1]);
        }
        else if (typeof chan === 'string' && typeof listenF !== null)
            this.ipc.removeListener(chan, listenF);
    }
}
exports.OttIpcMain = OttIpcMain;
//# sourceMappingURL=ott-ipc-main.js.map