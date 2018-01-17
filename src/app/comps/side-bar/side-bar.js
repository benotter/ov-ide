import * as React from 'react';
import * as PropTypes from 'prop-types';
import './side-bar.css';
export class SideBar extends React.Component {
    render() {
        let { docked, open, } = this.props;
        return (<div className={`SideBar ${open ? 'Open' : 'Closed'} ${docked ? 'Docked' : ''}`}>
                <div className="SideBarCont">
                    {this.props.children}
                </div>
            </div>);
    }
}
SideBar.defaultProps = {
    docked: false,
    open: false,
};
SideBar.propTypes = {
    docked: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
};
