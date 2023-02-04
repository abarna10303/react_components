import React, { Component } from 'react'

export class Lifecycle extends Component {
  constructor()
  {
    super();
    this.state=
    {
      names:"Components Update",
    }
    console.log("constructor");
  }
  componentDidMount()
  {
    console.log("componentDidMount");
  }
  componentDidUpdate()
  {
    console.log("componentDidUpdate",this.state.names);
  }
  render() {
    console.log("render");
    return (
      
      <div>Render Method
        <button onClick={()=>this.setState({names:"Modify Components Update"})}>Click</button>
        <button onClick={()=>this.setState({names:"Modify Components Update"},()=>{
          console.log(this.state.names);
        })}>Update button</button>
      </div>
    )
  }
}

export default Lifecycle