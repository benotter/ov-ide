import * as fs from 'fs';

import { OttWindowData } from './ott-window';

export interface OttPrefsObj 
{
    projects: {
        id: string,
        name: string,
        fileName: string,

        windowData: OttWindowData,
    }[],
    lastProject: string
};

export class OttPrefs 
{
    public prefs: OttPrefsObj = {
        projects: [],
        lastProject: null
    };

    constructor ( public fileName: string ) { }

    load (): Promise<OttPrefsObj>
    {
        return new Promise(
            ( res, rej ) =>
            {
                fs.readFile(
                    this.fileName,
                    ( err, buff ) =>
                    {
                        if ( err )
                            return rej( err );
                        else
                        {
                            try { return res(JSON.parse( buff.toString() ) as OttPrefsObj); }
                            catch ( e ) { return rej( e ); }
                        }
                    }
                );
            }
        );
    }

    save ( prefs )
    {
        return new Promise(
            ( res, rej ) =>
            {
                fs.writeFile(
                    this.fileName,
                    JSON.stringify( prefs ),
                    ( err ) =>
                    {
                        if ( err )
                            return rej( err );
                        else
                            return res();
                    }
                );
            }
        );
    }
}