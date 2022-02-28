import React from "react";

//stateles component - THIS IS CHILD COMPONENT
function ShowResult({result, didScore}){
    return(
        <div>
            {/* Receives state from a statefull (parent) component */}
            <p>Current result of the game is: 1 - {result} for Dinamo</p>
            <button onClick={didScore}>Dinamo scored</button>
        </div>
    );
}

//statefull component - THIS IS A PARENT
export default class FootballResult extends React.Component{
    state = {
        result: 0
    };

    changeResult = () => {
        this.setState({result: this.state.result + 1});
    }

    render(){
        return(
            <div>
                {/* Sends state to the stateless (child) component via props */}
                <ShowResult result={this.state.result} didScore={this.changeResult}/>
            </div>
        );
    }
}