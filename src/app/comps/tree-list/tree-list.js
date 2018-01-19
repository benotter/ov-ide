"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./tree-list.css");
class TreeList extends React.Component {
    render() {
        return (<div className="TreeList">
                {this.props.children}
            </div>);
    }
}
exports.TreeList = TreeList;
class TreeRoot extends React.Component {
}
exports.TreeRoot = TreeRoot;
class TreeLimb extends React.Component {
}
exports.TreeLimb = TreeLimb;
class TreeLeaf extends React.Component {
}
exports.TreeLeaf = TreeLeaf;
