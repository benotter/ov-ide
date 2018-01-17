import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { SideBar, TopBar, EditorMain, } from './comps';
import { UIActions, OttProgActions } from './state/root-actions';
class App extends React.Component {
    render() {
        let { ui, curSel, available, lists, uiActs, progActs } = this.props;
        return (<div className="App">
				<SideBar>

				</SideBar>
				<div className="EditorCont">
					<TopBar>

					</TopBar>

					<EditorMain>
						
					</EditorMain>
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
    uiActs: bindActionCreators(UIActions, disp),
    progActs: bindActionCreators(OttProgActions, disp)
});
export default connect(stateToProps, actionsToProps)(App);
