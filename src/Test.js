import React from 'react';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    onIncreaseClick = () =>{
        let count = this.state.count;
        this.setState({count: count+1});
    }

    render(){
        return (
            <div>
                <p>
                    {this.state.count}
                </p>
                <button onClick={this.onIncreaseClick}>Increase</button>
            </div>
        );
    }
}
export default Test;