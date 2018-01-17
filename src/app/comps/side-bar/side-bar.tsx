import * as React from 'react';
import * as PropTypes from 'prop-types';

import './side-bar.css';

export class SideBar extends React.Component<{docked?: boolean, open?: boolean}, {}>
{
    static defaultProps = {
        docked: false,
        open: false,
    };

    static propTypes = {
        docked: PropTypes.bool.isRequired,
        open: PropTypes.bool.isRequired,
    };

    render () 
    {
        let {
            docked,
            open,
        } = this.props;
        
        return (
            <div className={ `SideBar ${ open ? 'Open' : 'Closed' } ${ docked ? 'Docked' : '' }` }>
                <div className="SideBarCont">
                    { this.props.children }
                </div>
            </div>
        );
    }
}