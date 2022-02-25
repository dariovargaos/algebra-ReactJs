import React from "react";

export default class ClassComponent extends React.Component {
    render(){
        return <h1>Pozdrav {this.props.name}</h1>
    }
}