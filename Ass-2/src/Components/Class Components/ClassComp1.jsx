import React, { Component } from 'react'

export default class ClassComp1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      handleButtonClick = () => {
        this.setState({
          count: this.state.count + 1
        });
      }
    
  render() {
      return (
        <>
        <h2>First Class Component</h2>
        <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Increment</button>
        </div>
        </>
    )
  }
}
