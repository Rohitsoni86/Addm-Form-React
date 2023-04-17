import React, { Component } from 'react'

export default class IncrementAndDecrement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 1
        }
    }
    IncreaseCount = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }
   decreaseCount = () => {
        this.setState(
            {
                count: this.state.count - 1
            }
        )
    }
    render() {
        return (
            <>
                <br /><br />
                <h2 className="py-2.5 px-5 mr-2 mb-2 text-2xl font-medium">Increase OR Decrease Count From Below Buttons</h2>
                <h1 className="py-2.5 px-5 mr-2 mb-2 text-xl font-medium">{this.state.count}</h1>
                {/* <button type='button' onClick={this.IncreaseCount}>Increase</button><br /><br /> */}
                <button type="button" onClick={this.IncreaseCount} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Increase</button><br /><br />
                {/* <button type='button' onClick={this.decreaseCount}>Decrease</button><br /><br /> */}
                <button type="button" onClick={this.decreaseCount} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Decrease</button><br /><br />
            </>
        )
    }
}