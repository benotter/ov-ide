"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
require("./App.css");
const comps_1 = require("./comps");
const root_actions_1 = require("./state/root-actions");
class App extends React.Component {
    render() {
        let { ui, curSel, available, lists, uiActs, progActs } = this.props;
        return (<div className="App">
				<comps_1.SideBar>
					uiActs.;slakdfj;aslkfj();
				</comps_1.SideBar>
				<div className="EditorCont">
					<comps_1.TopBar>

					</comps_1.TopBar>

					<comps_1.EditorMain>

					</comps_1.EditorMain>
				</div>
			</div>);
    }
}
const stateToProps = state => ({
    ui: state.uiState,
    curSel: state.curSel,
    available: {
        modules: state.availMods,
        scopes: state.availScopes,
        vars: state.availVars,
        exps: state.availExps,
    },
    lists: {
        progs: state.progList,
        modules: state.moduleList,
        scopes: state.scopeList,
        vars: state.varList,
        exps: state.expList,
    }
});
const actionsToProps = disp => ({
    uiActs: redux_1.bindActionCreators(root_actions_1.UIActions, disp),
    progActs: redux_1.bindActionCreators(root_actions_1.OttProgActions, disp)
});
exports.default = react_redux_1.connect(stateToProps, actionsToProps)(App);
