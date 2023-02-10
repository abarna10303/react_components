import React, { Component } from 'react'
import Child from './child';
export class Lifecycle extends Component {
  constructor()
  {
    super();
    this.state=
    {
      names:"Components Update",
      show:true,
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
        <button onClick={()=>this.setState({show:!this.state.show})}>DElete</button>
        {this.state.show?<Child />:null}
      </div>
    )
  }
}

export default Lifecycle