import React, {Component} from 'react';

class Square extends Component{
    render(){
        return (
            <div>
                <div className="square" onClick={this.props.onClick}>
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default Square;