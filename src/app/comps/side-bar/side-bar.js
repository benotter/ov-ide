"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
require("./side-bar.css");
class SideBar extends React.Component {
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
    onIconClick: () => { },
    onPinClick: () => { },
};
SideBar.propTypes = {
    docked: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onIconClick: PropTypes.func,
    onPinClick: PropTypes.func,
};
exports.SideBar = SideBar;
