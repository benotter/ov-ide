import { sep } from 'path';
import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

import { OttIpcMain } from './ott-ipc-main';

import * as CONST from '../APP_CONST';

export interface OttWindowData 
{
    width: number,
    height: number,
    xPos: number,
    yPos: number,
    max: boolean,
}

export type PrefSaveHandler = ( details: { name: string, fileName: string }, data: any ) => void;
export type PrefLoadHandler = ( details: { name: string, fileName: string } ) => any;

export class OttWindow
{
    // Statics'
    private static _DEV_MODE = false;
    public static _enableDevMode () { this._DEV_MODE = true; }

    public static _devModeURL = "";
    public static _prodModeURL = "";

    public static _setURLS ( dev, prod )
    {
        this._devModeURL = dev;
        this._prodModeURL = prod;
    }

    public static _ipc: OttIpcMain;
    public static _setIpc(ipc) { this._ipc = ipc; }


    // Instances'
    public get appUrl () 
    {
        let con = ( this.constructor as typeof OttWindow );
        return con._DEV_MODE ? con._devModeURL : con._prodModeURL;
    }

    public browser: BrowserWindow;

    public name: string;
    public fileName: string;


    public get title (): string { return this.browser.getTitle(); }
    public set title ( val: string ) { this.browser.setTitle( val ); }


    public get xPos (): number { return this.browser.getPosition() [ 0 ]; }
    public get yPos (): number { return this.browser.getPosition() [ 1 ]; }
    public get xyPos (): number[] { return this.browser.getPosition(); }

    public get width (): number { return this.browser.getSize() [ 0 ]; }
    public get height (): number { return this.browser.getSize() [ 1 ]; }
    public get size (): number[] { return this.browser.getSize(); }

    public get maximized (): boolean { return this.browser.isMaximized(); }


    constructor ( {
        name = CONST.STRINGS.NEW_PROJECT,
        fileName = CONST.STRINGS.NEW_FILENAME,
        stopLoad = false,
    } = {} )
    {
        this.name = name;
        this.fileName = fileName;

        if ( !stopLoad )
            this.loadWindow();
    }

    public loadWindow ()
    {
        let { _ipc: ipc } = (this.constructor as typeof OttWindow);

        let url = this.appUrl;

        let opts: BrowserWindowConstructorOptions = {
            title: this.name || CONST.STRINGS.NEW_PROJECT,
            show: false,
        };

        let browser = this.browser = new BrowserWindow( opts ),
            webC = browser.webContents;

        let deReg: {0: string, 1: any}[] = [];

        deReg.push(['ready-for-state-load', ipc.register('ready-for-state-load', webC.id, (data, reply)=>
        {

        })]);

        // deReg.push(['', ipc.register('', webC.id, (data, reply)=>{})]);

        deReg.push(['', ipc.register('', webC.id, (data, reply)=>{})]);
        deReg.push(['', ipc.register('', webC.id, (data, reply)=>{})]);
        deReg.push(['', ipc.register('', webC.id, (data, reply)=>{})]);


        let saveStateF = () =>
        {
            
        };

        browser.on( 'ready-to-show', () => 
        {
            
        });

        browser.on( 'closed', () => 
        {
            ipc.deregister(deReg)
        });

        browser.on( 'moved', saveStateF);
        browser.on( 'resize', saveStateF );
        browser.on( 'maximize', saveStateF);
        browser.on( 'unmaximize', saveStateF);
    }
}