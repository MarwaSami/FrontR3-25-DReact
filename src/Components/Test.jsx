import React, { Component } from 'react'

class Test extends Component {
    //this.setState() // v dom update plz make rerender to this component

    componentDidMount() {
    }
    componentWillUnmount() {

    }
    componentDidUpdate() {
        console.log("first")
    }
    render() {
        console.log("hi from test");
        // init
        return (
            <div>Test</div>
        )
    }
}


export default Test;