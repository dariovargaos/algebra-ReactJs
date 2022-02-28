import React from "react";

export default class Homer extends React.Component{
    state = {
        father: "Homer Simpson",
        mother: "Marge",
        son: "Bart",
        daugther: "Lisa",
        bestFriendBart: "Milhouse",
        bestFriendLisa: "Janey",
        schoolBart: false,
        schoolLisa: true
        
    }

    render(){
        return <Bart father={this.state.father} son={this.state.son}
        bestFriendBart={this.state.bestFriendBart} school={this.state.schoolBart}/>,

        <Lisa mother={this.state.mother} daugther={this.state.daugther}
        bestFriendLisa={this.state.bestFriendLisa} school={this.state.schoolLisa}/>
    }
}

class Bart extends React.Component{
    render(){
        return <p>Hi, my name is {this.props.son}. 
        My best friend is {this.props.bestFriendBart} and my father 
        is {this.props.father}. {this.props.schoolBart ? "I really love school." : "I really do not love school."}  </p>
    }
}

class Lisa extends React.Component{
    render(){
        return <p>Hi, my name is {this.props.daugther}. 
        My best friend is {this.props.bestFriendLisa} and my mother 
        is {this.props.mother}. {this.props.schoolLisa ? "I really love school." : "I really do not love school."}  </p>
    }
}