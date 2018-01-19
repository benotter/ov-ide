import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { OttWindowClient } from './lib/ott-window-client';
import rootReducer from './app/state/root-reducer';

import './index.css';

import App from './app/App';

const owc = new OttWindowClient();

const unList = owc.request('ready-for-state-load', void 0, (data)=>
{
    const store = createStore(
        rootReducer,
        window[ '__REDUX_DEVTOOLS_EXTENSION__' ] && window[ '__REDUX_DEVTOOLS_EXTENSION__' ](),
    );
    
    ReactDOM.render(
        (
            <Provider store={ store }>
                <App />
            </Provider>
        ),
        document.getElementById( 'root' )
    );
});