import React from "react";

export default class Lifecycle extends React.Component{

    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
        console.log("Component DID mount")
    }

    render(){
        return(
            <div>
                TODO
            </div>
        );
    }
}