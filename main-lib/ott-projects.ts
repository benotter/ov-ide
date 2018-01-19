import { OttWindowData } from './ott-window';

import * as CONST from '../APP_CONST';

export interface OttProjectObj 
{
    id: string;
    name: string;
    fileName: string;
    windowData?: OttWindowData;
}

export class OttProjects 
{
    public projects: OttProject[];

    constructor(projL: OttProjectObj[] = [])
    {
        for(let proj of projL)
            this.add(proj);
    }

    add(projObj: OttProjectObj)
    {
        this.projects.push(new OttProject(projObj));
    }
}

export class OttProject
{
    public projObj: OttProjectObj;

    public id: string;
    public name: string;
    public fileName: string;
    windowData: OttWindowData;

    constructor(projObj: OttProjectObj = null) 
    {
        let {
            id = "",
            name = "",
            fileName = "",
            windowData = <OttWindowData> null,
        } = projObj || {};

        this.projObj = projObj;

        this.id = id;
        this.name = name;
        this.fileName;

        this.windowData = windowData || {
            width: CONST.VALUES.DEF_WIN_WIDTH,
            height: CONST.VALUES.DEF_WIN_HEIGHT,
            xPos: CONST.VALUES.DEF_X_POS,
            yPos: CONST.VALUES.DEF_Y_POS,
            max: CONST.VALUES.DEF_MAX,
        };        
    }

    save()
    {
        Object.assign(this.projObj, this);
    }
}