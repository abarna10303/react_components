import React, { Component } from 'react'

export class Child extends Component {
    constructor()
    {
        super()
        console.log("Child Constractor");
    }
    componentDidMount()
    {
        console.log("Child componentDidMount")
    }
    componentDidUpdate()
    {
        console.log("Child componentDidUpdate");
    }
    componentWillUnmount()
    {
        console.log("Child componentWillUnmountss");
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}

export default Child