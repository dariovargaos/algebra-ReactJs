import React from "react";

export default class MultiplePropsClassComponent extends React.Component{
    render(){
        const {name, age} = this.props; //definirali smo NAME i AGE
        return(
            <div>
                <p>Hej class komponento, kako se zoveš?</p>
                <p>Hej Zovem se {name}. Imam {age} godina.</p>
            </div>
            
        )
    }
}