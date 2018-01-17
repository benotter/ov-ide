import * as React from 'react';

import './side-bar.css';

export class SideBar extends React.Component<{docked: boolean, open: boolean}>
{
    render () 
    {
        let {
            docked = false,
            open = false,
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