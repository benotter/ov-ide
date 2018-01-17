import * as React from 'react';
import './tree-list.css';
export class TreeList extends React.Component {
    render() {
        return (<div className="TreeList">
                {this.props.children}
            </div>);
    }
}
export class TreeRoot extends React.Component {
}
export class TreeLimb extends React.Component {
}
export class TreeLeaf extends React.Component {
}
