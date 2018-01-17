import * as React from 'react';
import './top-bar.css';
export class TopBar extends React.Component {
    render() {
        return (<div className="TopBar">
                {this.props.children}
            </div>);
    }
}
