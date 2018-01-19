"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class EditorMain extends React.Component {
    render() {
        return (<div className="EditorMain">
                {this.props.children}
            </div>);
    }
}
exports.EditorMain = EditorMain;
