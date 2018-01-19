import { createStore, combineReducers, bindActionCreators } from 'redux';
import { app, ipcMain, dialog } from 'electron';
import * as path from 'path';
// Locals
import { OttIpcMain } from './main-lib/ott-ipc-main';
import { OttPrefs } from './main-lib/ott-prefs';
import { OttWindow } from './main-lib/ott-window';
import * as rootRed from './main-lib/state/main-reducers';
import * as rootAct from './main-lib/state/main-actions';
import * as CONST from './APP_CONST';
// DevTools
import { AddRendererDeveloperTools } from './main-lib/developer-mode';
import devToolsEnhancer from 'remote-redux-devtools';

// Development Flag
const DEVELOPMENT_MODE = true;

// Load Config
const prefs = new OttPrefs( `${ app.getPath( 'userData' ) + path.sep }appData.json` ); // Prefs File Path

// Set up App Event Listeners
app.on( 'window-all-closed', () => app.quit() );
app.on( 'ready', () =>
    prefs.load()
        .catch( err =>
        {
            console.log( err );
            Main();
        } )
        .then( ( oldState ) =>
            Main( oldState )
        )
);

// Main Entry Point
function Main ( oldState = void 0 )
{
    // Main Com Channel
    const ipcM = new OttIpcMain( ipcMain );

    OttWindow._setIpc( ipcM );
    OttWindow._setURLS(
        `http://localhost:3000/`,
        `file://${ __dirname + path.sep }build${ path.sep }index.html`
    );

    if ( DEVELOPMENT_MODE )
    {
        OttWindow._enableDevMode();
        AddRendererDeveloperTools();
    }

    // Main State
    const store = createStore<rootRed.MainState>(
        combineReducers( rootRed ), 
        devToolsEnhancer({
            name: CONST.STRINGS.REDUX_NAME,
            realtime: true,
            suppressConnectErrors: false,
            port: 8080,
        }),
    );

    const unsub = store.subscribe( () =>
        prefs.save( store.getState() ).then(()=>{}).catch( err => console.log( err ) ) );

    const acts = ( ( disp ) =>
        bindActionCreators( rootAct.MainActions, disp ) )( store.dispatch );

    let {
        projectList,
        projectHistory,
    } = store.getState() as rootRed.MainState;

    if ( projectHistory.currentProjects.length > 0 )
        for ( let curP of projectHistory.currentProjects )
        {
            let p = projectList.find( p => p.id === curP );

            if ( p )
                new OttWindow( p );
        }
    // else createNewProject();

    function createNewProject()
    {
        dialog.showSaveDialog({
            filters: [{
                name: CONST.STRINGS.PROJECT_FILE_DESC, 
                extensions: [ CONST.STRINGS.PROJECT_FILE_EXT ] 
            }],
            title: CONST.STRINGS.SAVE_DIALOG_TITLE,
            nameFieldLabel: CONST.STRINGS.NEW_FILENAME,
        }, (fileN)=>
            {
                if(fileN)
                {
                    
                    let x = acts.addProject( path.basename( fileN ), fileN );
                    x;
                    new OttWindow({ name: path.basename( fileN ), fileName: fileN });
                }
            }
        );
    }

    function openNewProject()
    {

    }
}