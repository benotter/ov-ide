import React, { Component } from 'react';

import './top-bar.css';

export class TopBar extends Component 
{
    render()
    {
        return (
            <div className="TopBar">
                { this.props.children }
            </div>
        );
    }
}