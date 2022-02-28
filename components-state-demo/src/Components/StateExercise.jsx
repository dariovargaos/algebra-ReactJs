import React from "react";

export default class StateExercise extends React.Component{

    state = {
        ime: "Dario",
        prezime: "Varga",
        godine: "28"
    }

    changeName = () => {
        const newName = this.state.ime === "Unknown" ? "Dario" : "Unknown";
        this.setState({ime: newName});

        const newSurname = this.state.prezime === "Unknown" ? "Varga" : "Unknown";
        this.setState({prezime: newSurname});

        const newAge = this.state.godine === "Unknown" ? "28" : "Unknown";
        this.setState({godine: newAge});
    }

    render(){
        return(
            <div>
                <h2>Ime: {this.state.ime}</h2>
                <h2>Prezime: {this.state.prezime}</h2>
                <h2>Godine: {this.state.godine}</h2>
                <button onClick={this.changeName}>Click me</button>


            </div>
            
        );
    }
}