import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PropTypes from 'prop-types';

import './App.css';

import
{
	SideBar,
	TopBar,
	EditorMain,
} from './comps';

import
{
	UIActions, OttProgActions
} from './state/root-actions';

import * as reducers from './state/root-reducer';

class App extends React.Component<AppActionProps & AppStateProps>
{
	render ()
	{
		let {
			ui, curSel, available, lists,
			uiActs, progActs
		} = this.props;

		return (
			<div className="App">
				<SideBar>
					uiActs.;slakdfj;aslkfj();
				</SideBar>
				<div className="EditorCont">
					<TopBar>

					</TopBar>

					<EditorMain>

					</EditorMain>
				</div>
			</div>
		);
	}
}


interface AppStateProps 
{
	ui: reducers.UiInitialState,
	curSel: reducers.CurSelInitial,
	available: {
		modules: reducers.AvailModsInitial,
		scopes: reducers.AvailScopesInitial,
		vars: reducers.AvailVarsInitial,
		exps: reducers.AvailExpsInitial,
	},
	lists: {
		progs: reducers.ProgListInitial,
		modules: reducers.ModuleListInital,
		scopes: reducers.ScopeListInitial,
		vars: reducers.VarListInitial,
		exps: reducers.ExpListInitial,
	},
}

const stateToProps: ( state ) => AppStateProps = state => ( {
	ui: state.uiState,
	curSel: state.curSel as reducers.CurSelInitial,
	available: {
		modules: state.availMods as reducers.AvailModsInitial,
		scopes: state.availScopes as reducers.AvailScopesInitial,
		vars: state.availVars as reducers.AvailVarsInitial,
		exps: state.availExps as reducers.AvailExpsInitial,
	},
	lists: {
		progs: state.progList as reducers.ProgListInitial,
		modules: state.moduleList as reducers.ModuleListInital,
		scopes: state.scopeList as reducers.ScopeListInitial,
		vars: state.varList as reducers.VarListInitial,
		exps: state.expList as reducers.ExpListInitial,
	}
} );

interface AppActionProps 
{
	uiActs: typeof UIActions,
	progActs: typeof OttProgActions,
}

const actionsToProps: ( disp ) => AppActionProps = disp => ( {
	uiActs: bindActionCreators( UIActions, disp ),
	progActs: bindActionCreators( OttProgActions, disp )
} );

export default connect(
	stateToProps,
	actionsToProps,
)( App );
