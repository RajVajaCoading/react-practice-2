import React, { Component } from 'react'

export default class UseStateWithClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    CountInc(){
        this.setState({count:this.state.count +1})
    }

    CountDec(){
        this.setState({count:this.state.count -1})
    }

  render() {
    return (
      <div>
        <h1>count {this.state.count}</h1>
        <button onClick={()=>this.CountInc()}>increment +</button>
        <button onClick={()=>this.CountDec()}>decrement -</button>

      </div>
    )
  }
}
