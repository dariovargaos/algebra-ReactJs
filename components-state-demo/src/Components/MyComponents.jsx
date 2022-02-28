import React from "react";

export default class MyComponent extends React.Component{
    state = {
        city: "Osijek",
        country: "Hrvatska"
    }

    //Originalni primjer promjene stanja
    //changeState = () => {
      //  this.setState({city: "Mece"})
    //}

    //Malo kompliciranija promjena stanja
    changeState = () => {
        const newCity = this.state.city === "Mece" ? "Osijek" : "Mece";
        this.setState({city: newCity}); //Always use setState() method in order to change the state
    }

    //Do not chage state like this! Use setState() method instead
    //dontChangeLikeThis = () => {
      //  this.state.city = "Vukovar";
    //}

    render(){
        return(
            <div>
                <h1>Grad: {this.state.city}</h1>
                <h1>Država: {this.state.country}</h1>
                <button onClick={this.changeState}>Promijeni grad</button>
            </div>
        );
    }
}