import React, {Component} from 'react';

import './tree-list.css';

export class TreeList extends Component 
{
    render()
    {
        return (
            <div className="TreeList">
                { this.props.children }
            </div>
        );
    }
}

export class TreeRoot extends Component 
{

}

export class TreeLimb extends Component 
{

}

export class TreeLeaf extends Component 
{
    
}