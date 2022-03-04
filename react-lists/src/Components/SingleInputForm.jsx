import React from 'react';

//Ovo je zapravo vjezba za MultipleInput forme

export default class SingleInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // "e" stands fro EVENT (from syntax: event.preventDefault();)
    handleSubmit(e) {
        alert("A form was submitted, and the value is " + this.state.firstName + " " + this.state.lastName + " "+ this.state.age);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="firstName" onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Surname:
                    <input type="text" name="lastName" onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" name="age" onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}