export enum UIActionTypes {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN,

    SIDEBAR_DOCK,
    SIDEBAR_UNDOCK,
};

export const UIActions = {
    sideBarOpen: ()=>({
        type: UIActionTypes.SIDEBAR_CLOSE,
    }),
    sideBarClose: ()=>({
        type: UIActionTypes.SIDEBAR_OPEN,
    }),

    sideBarDock: ()=>({
        type: UIActionTypes.SIDEBAR_DOCK,
    }),
    sideBarUnDock: ()=>({
        type: UIActionTypes.SIDEBAR_UNDOCK,
    })
};