import React from 'react';
export class EditorMain extends React.Component {
    render() {
        return (<div className="EditorMain">
                {this.props.children}
            </div>);
    }
}
