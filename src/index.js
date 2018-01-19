"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
require("./index.css");
const App_1 = require("./app/App");
const root_reducer_1 = require("./app/state/root-reducer");
const store = redux_1.createStore(root_reducer_1.default, window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']());
ReactDOM.render((<react_redux_1.Provider store={store}>
            <App_1.default />
        </react_redux_1.Provider>), document.getElementById('root'));
