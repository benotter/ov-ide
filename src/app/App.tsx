import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PropTypes from 'prop-types';

import './App.css';

import comps, {
	SideBar,
	TopBar,
	EditorMain,
} from './comps';

import {
	UIInitial,
	OttProgInitial,
} from './state/root-reducer';

import { 
	UIActions, 
	OttProgActions,
	OttProgActTypes
} from './state/root-actions';

class App extends React.Component<{
	uiActs: typeof UIActions, 
	progActs: typeof OttProgActions,
	ui: typeof UIInitial,
	program: typeof OttProgInitial,
}, {}>
{
	render ()
	{
		let progActs = this.props.progActs;
		let uiActs = this.props.uiActs;

		let {
			ui,
			program,
		} = this.props;

		return (
			<div className="App">
				<SideBar>

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

	static propTypes = {
		ui: PropTypes.object.isRequired,
		uiActs: PropTypes.object.isRequired,

		program: PropTypes.object.isRequired,
		progActs: PropTypes.object.isRequired,
	};
}

const stateToProps = state => ( {
	ui: state.ui,
	program: state.program,
} );

const actionsToProps = disp => ( {
	uiActs: bindActionCreators( UIActions, disp ),
	progActs: bindActionCreators( OttProgActions, disp),
} );

export default connect(
	stateToProps,
	actionsToProps,
)( App );
