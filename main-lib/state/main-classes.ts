import * as CONST from '../../APP_CONST';

export class OttProject 
{
    public id: string;
    public name: string;
    public fileName: string;

    constructor({
        name = CONST.STRINGS.NEW_PROJECT,
        fileName = CONST.STRINGS.NEW_FILENAME,
    } = {})
    {
        this.id = (new Buffer(`${fileName}@${name}`)).toString('base64');

        this.name = name;
        this.fileName = fileName;
    }
}

export class OttWindowData 
{
    public width: number;
    public height: number;
    public xPos: number;
    public yPos: number;
    public max: boolean;

    constructor({
        width = CONST.VALUES.DEF_WIN_WIDTH,
        height = CONST.VALUES.DEF_WIN_HEIGHT,
        xPos = CONST.VALUES.DEF_X_POS,
        yPos = CONST.VALUES.DEF_Y_POS,
        max = CONST.VALUES.DEF_MAX,
    } = {})
    {
        this.width = width;
        this.height = height;
        this.xPos = xPos;
        this.yPos = yPos;
        
        this.max = max;
    }
}