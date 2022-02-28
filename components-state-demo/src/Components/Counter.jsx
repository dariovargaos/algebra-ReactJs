import React from "react";

//stateles component - THIS IS CHILD COMPONENT
function ReceivesState({count, onButtonClick}){
    return(
        <div>
            {/* Receives state from a statefull (parent) component */}
            <p>Number of clicks: {count}</p>
            <button onClick={onButtonClick}>Click me</button>
        </div>
    );
}

//statefull component - THIS IS A PARENT
export default class SendsState extends React.Component{
    state = {
        count: 0
    };

    //mozemo u konstruktoru koristiti this.state a u drugim slucajevima setState()
    //constructor(props){
      //  super(props)
        //this.state = {count: 0}
    
    handleButtonClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        return(
            <div>
                {/* Sends state to the stateless (child) component via props */}
                <ReceivesState count={this.state.count} onButtonClick={this.handleButtonClick}/>
                <p>I can use state event in the parent component: {this.state.count}</p>
            </div>
        );
    }
}