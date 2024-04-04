import React, { Component } from 'react';

export default class Class_lehoanglong extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"Lê Hoàng Long",
            class:"K22CNT3"
        }
    }
    users = {
        name:"Lê Hoàng Long",
        age:20
    }
    //Ham xu ly su kien
    handleChange = (Event) => {
        this.setState({
            fullname:"Lê Hoàng Việt",
        })
    }
    render() {
    return (
      <div>
        <h2>Class Component Demo</h2>
        {this.users.name} - {this.users.age}
        <hr/>
        <h3>info: {this.props.info}</h3>
        <h3>time: {this.props.time}</h3>
        <hr/>
        <h3>state:
            fullname: {this.state.fullname}
            class: {this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change name</button>
      </div>
    );
  }
}
