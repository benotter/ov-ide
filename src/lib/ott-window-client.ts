import { ipcRenderer as ipc} from 'electron';

export class OttWindowClient
{
    public ipc = ipc;

    request(chan, data, cb)
    {
        let ipc = this.ipc;

        let listener = (data)=>
        {
            cb(data);
        };

        ipc.on(chan, listener);
        ipc.send(chan, data);

        return (()=>ipc.removeListener(chan, listener));
    }

    requestOnce(chan, data, cb)
    {
        let ipc = this.ipc;

        ipc.once(chan, cb);
        ipc.send(chan, data);
    }

    requestSync(chan, data)
    {
        return ipc.sendSync(chan, data);
    }
}