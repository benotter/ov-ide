import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './App.css';

import { 
	UIActions, 
	OttProgActions
} from './state/root-actions';

class App extends Component
{
	render ()
	{
		let {
			ui, 
			uiActs,

			program,
			progActs,
    	} = this.props;

		return (
			<div className="App">
				
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
