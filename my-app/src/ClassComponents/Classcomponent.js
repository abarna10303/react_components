import React, { Component } from 'react'

export class Classcomponent extends Component {
    constructor()
    {
        super();
        this.state={
            names:"Abarna",
            age:20,
        }
    }
    getData(param)
    {
        console.log("Child to parent");
    }
    Update()
    {
        this.setState({names:"Abarna Subramanityan"})
    }
  render() {
    return (
      <div><h1>Classcomponent</h1>
      <h3> state {this.state.names}</h3>
      <button onClick={()=>this.Update()}>Update</button>
        <ClasscomponenOne string="paraent to child Props in first Class Components" get={this.getData}/>
        <ClasscomponentTwo />
        <ClasscomponentFunction />
      </div>
    )
  }
}
export class ClasscomponentTwo extends Component {
    render() {
      return (
        <div><h2>SecondClass Component</h2>
        </div>
      )
    }
  }
  export class ClasscomponenOne extends Component {
    render() {
        console.log("this",this)
      return (
        <div><h2>First Class Component</h2>
            <p><b>{this.props.string}</b></p>
            <button onClick={()=>this.props.get("hii")}>Click me</button>
        </div>
      )
    }
  }
  
  const ClasscomponentFunction = () => {
    return (
      <div>Using Function in Class Component</div>
    )
  }
export default Classcomponent
 