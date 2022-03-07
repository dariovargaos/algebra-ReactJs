import React from "react";
import {ThemeContext} from './Theme';

export default class ClassContextComponent extends React.Component{

    themeStyles(darkTheme){
        return{
            backgroundColor: darkTheme ? "#333" : "#CCC",
            color: darkTheme ? "#333" : "#CCC",
            padding: "2rem",
            margin: "2rem"
        }
    }

    render(){
        return(
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        );
    }
}