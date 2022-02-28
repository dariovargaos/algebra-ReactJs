import React from "react";

//Parent (stateful) component which has a STATE
export default class Yoda extends React.Component{
    state = {
        name: "Yoda"
    }

    render(){
        //we have passed down STATE from PARENT to CHILD component
        return <BabyYoda name={this.state.name} />
    }
}

//Child (stateless) component which has NO STATE
class BabyYoda extends React.Component{
    //this child component will render information which was given to ic by a PARENT COMPONENT
    render(){
        return <h1>I am {this.props.name}</h1>
    }
}