"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
;
class OttPrefs {
    constructor(fileName) {
        this.fileName = fileName;
        this.prefs = {
            projects: [],
            lastProject: null
        };
    }
    load() {
        return new Promise((res, rej) => {
            fs.readFile(this.fileName, (err, buff) => {
                if (err)
                    return rej(err);
                else {
                    try {
                        return res(JSON.parse(buff.toString()));
                    }
                    catch (e) {
                        return rej(e);
                    }
                }
            });
        });
    }
    save(prefs) {
        return new Promise((res, rej) => {
            fs.writeFile(this.fileName, JSON.stringify(prefs), (err) => {
                if (err)
                    return rej(err);
                else
                    return res();
            });
        });
    }
}
exports.OttPrefs = OttPrefs;
//# sourceMappingURL=ott-prefs.js.map