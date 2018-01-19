"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./top-bar.css");
class TopBar extends React.Component {
    render() {
        return (<div className="TopBar">
                {this.props.children}
            </div>);
    }
}
exports.TopBar = TopBar;
