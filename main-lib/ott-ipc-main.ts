import { IpcMain } from 'electron';

export interface OttIpcMess 
{
    id: string;
    data: any;
}

export class OttIpcMain 
{
    constructor ( public ipc: IpcMain ) { }

    register ( chan: string, webID, cb: ( data: any, reply: ( reply: any, sync: boolean ) => void ) => void )
    {
        let listenF = ( e: Electron.IpcMessageEvent, data: OttIpcMess ) => {
            if ( e.sender.id === webID )
                cb( data, ( reply, sync = false ) => {
                    if ( sync ) e.returnValue = reply;
                    else e.sender.send( chan, reply );
                });
        };
        this.ipc.on( chan, listenF );
        return listenF;
    }

    deregister(chan: string | {0: string, 1: any}[], listenF = null)
    {
        if(Array.isArray(chan))
        {
            for(let list of chan)
                if(Array.isArray(list)) 
                    this.ipc.removeListener(list[0], list[1]);
        }
        else if(typeof chan === 'string' && typeof listenF !== null)
            this.ipc.removeListener(chan as string, listenF);
    }
}